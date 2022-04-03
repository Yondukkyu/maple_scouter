import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';


import { jobNames, jobs } from 'src/app/data/job_data';
import { TemplateData, jobData, UserStatdata } from 'src/app/data/data_format';
import { equipLevel, gradeMainStat, grades, templategrades } from 'src/app/data/equip_data';
import { polynomial_regression } from 'src/app/functions/poly_reg';
import { CubicSolver } from 'src/app/functions/eqsolver';

@Component({
  selector: 'app-container',
  templateUrl: './scouter.component.html',
  styleUrls: ['./scouter.component.scss']
})
export class ScouterComponent implements OnInit {

  job_names = jobs;
  grade_names = grades;
  equip_levels = equipLevel;
  template_grades = templategrades;

  jobName:jobNames = '나이트로드';
  basicData:number[] = [0,250,0];//서버, 레벨, 최종댐순
  jobdata:jobData = new jobData(this.jobName);
  monster_guard:number = 300;

  jobTemplateData:TemplateData[] = [];
  job100dmgarr:number[]=[];
  jobMainstatarr:number[]=[];

  userStatData_:UserStatdata;

  
 

  worker!: Worker;
  isLoading = false;
  progress = 0;

  stat_table_front :number[] = [];
  stat_table_back :number[] = [];
  link_table :number[] = [6,6,2,2,2,0];
  equip_table :number[] = [];
  auxiliary_table :number[] = [0,0,0,0,0];
  core_table :number[] = [];

  stat_table_list :string[]=[];
  stat_table : string[] = statListCommon;
  equip_table_list :string[]=[];
  auxiliary_table_list : number[]  = [];

  reboot_final_dmg : number = 0;

  spline_data:number[] = [];

  actual_stat:number = 0;

  constructor(
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'MapleScouter - 환산 스탯 계산'
    );

    this.initializeJobValues();
    this.userStatData_ = new UserStatdata(this.jobdata, this.basicData, this.stat_table_front, this.stat_table_back, this.equip_table, this.auxiliary_table, this.link_table);

  }


  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('../score.worker', import.meta.url)
      );
    } else {
      this.snackbar.open(
        'Web Worker가 지원되지 않는 브라우저입니다. 최신 브라우저를 사용해주세요.',
        '닫기'
      );
    }
    
  }

  initializeJobValues()
  {
    this.jobdata = new jobData(this.jobName);

    if(this.jobdata.jobStatType_== 3)
    {
      this.stat_table_list = statListDemonavenger;
      this.equip_table_list = equipListDemonavenger;
    }
    else if(this.jobdata.jobStatType_== 2)
    {
      this.stat_table_list = statListXenon;
      this.equip_table_list = equipListXenon;
    }
    else if(this.jobdata.jobStatType_== 1)
    {
      this.stat_table_list = statListTwosub;
      this.equip_table_list = equipListDefault;
    }
    else
    {
      this.stat_table_list = statListDefault;
      this.equip_table_list = equipListDefault;
    }

     //어빌, 쿨, 벞지, 크리인
    this.auxiliary_table_list = [this.jobdata.jobability_, this.jobdata.coolReduce_,this.jobdata.buffFinal_,this.jobdata.criRein_];

    for (var ii = 0; ii<templategrades.length; ii++)
    {
      this.jobTemplateData[ii] = new TemplateData(templategrades[ii],this.jobdata,this.monster_guard);
      this.jobMainstatarr[ii]=gradeMainStat[templategrades[ii]]/10000;
      this.job100dmgarr[ii]=this.jobTemplateData[ii].calc100dmg()/10000/10000/10000;   
    }

    //최종댐 계산

    this.calculate_additive_final_dmg();
    console.log(this.jobMainstatarr);
    console.log(this.job100dmgarr);

    //추세선생성

    this.spline_data = polynomial_regression(this.jobMainstatarr,this.job100dmgarr,3);

  }

  calculate_additive_final_dmg()
  {
    if(this.basicData[0] == 1)
    {
      if(this.basicData[1]<250)
      {
        this.reboot_final_dmg = 60;
      }
      else
      {
        this.reboot_final_dmg = 65;
      }
    }
    else
    {
      this.reboot_final_dmg = 0;
    }

    this.basicData[2] = Math.round(((this.jobdata.statData_.final_dmg * 0.01 + 1) * (this.reboot_final_dmg * 0.01 + 1) * 100 - 100)*100)/100 ;
     

  }

  calculate_user_stat()
  {
    this.userStatData_ = new UserStatdata(this.jobdata, this.basicData, this.stat_table_front, this.stat_table_back, this.equip_table, this.auxiliary_table, this.link_table);

    
    this.actual_stat = Math.floor(10000*CubicSolver(this.spline_data,this.userStatData_.calc100dmg(this.monster_guard)/10000/10000/10000));

  }

  
}

const statListDefault: string[] =
[
    '메용O 스탯(시드링 착용)',
    '메용X 스탯(시드링 착용)',
    '부스탯',
]

const statListTwosub: string[] =
[
    '메용O 스탯(시드링 착용)',
    '메용X 스탯(시드링 착용)',
    '부스탯(DEX)',
    '부스탯2(STR)',
]

const statListDemonavenger: string[] =
[
    '쓸뻥O HP(시드링 착용)',
    '쓸뻥X HP(시드링 착용)',
    '부스탯(STR)',
]

const statListXenon: string[] =
[
    'STR 메용O 스탯(시드링 착용)',
    'DEX 메용O 스탯(시드링 착용)',
    'LUK 메용O 스탯(시드링 착용)',
    'STR 메용X 스탯(시드링 착용)',
    'DEX 메용X 스탯(시드링 착용)',
    'LUK 메용X 스탯(시드링 착용)',
    
]


const statListCommon:string[] =
[
    '스공(메용O, 뒷스공)',
    '데미지',
    '보스 데미지(+어빌 상추뎀)',
    '방무',
    '쓸샾후 크뎀',
]







const equipListDefault: string[] =
[
    '템 공격력/마력 퍼',
    '아케인심볼 스탯',
    '어센틱심볼 스탯',
    '하이퍼 스탯+ 어빌 스탯',
    '유니온 공격대원 스탯',
]


const equipListDemonavenger: string[] =
[
    '템 공격력/마력 퍼',
    '아케인심볼 HP',
    '어센틱심볼 HP',
    '어빌 HP',
    '소마, 미하일 유니온 HP',
]

const equipListXenon: string[] =
[
  '템 공격력/마력 퍼',
  '아케인심볼 스탯(단일 스탯 수치)',
  '어센틱심볼 스탯(단일 스탯 수치)',
  '하이퍼 + 어빌 STR',
  '하이퍼 + 어빌 DEX',
  '하이퍼 + 어빌 LUK',
  '유니온 공격대원 STR',
  '유니온 공격대원 DEX',
  '유니온 공격대원 LUK',
]
