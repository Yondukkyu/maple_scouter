import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';


import { jobNames, jobs } from 'src/app/data/job_data';
import { TemplateData, TemplateJobData } from 'src/app/data/data_format';
import { equipLevel, grades, templategrades } from 'src/app/data/equip_data';

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
  jobdata:TemplateJobData = new TemplateJobData(this.jobName);
  monster_guard:number = 300;

  jobTemplateData:TemplateData[] = []; 
  
  
  

  job100dmgarr:number[]=[this.jobTemplateData[0].calc100dmg(),
                        this.jobTemplateData[1].calc100dmg(),
                        this.jobTemplateData[2].calc100dmg(),
                        this.jobTemplateData[3].calc100dmg(),
                        this.jobTemplateData[4].calc100dmg(),
                        this.jobTemplateData[5].calc100dmg(),
                        this.jobTemplateData[6].calc100dmg(),
                        this.jobTemplateData[7].calc100dmg(),
                        this.jobTemplateData[8].calc100dmg(),
                        this.jobTemplateData[9].calc100dmg(),
                        this.jobTemplateData[10].calc100dmg()];
  jobMainstatarr:number[]=[this.jobTemplateData[0].calcMainStat(),
                        this.jobTemplateData[1].calcMainStat(),
                        this.jobTemplateData[2].calcMainStat(),
                        this.jobTemplateData[3].calcMainStat(),
                        this.jobTemplateData[4].calcMainStat(),
                        this.jobTemplateData[5].calcMainStat(),
                        this.jobTemplateData[6].calcMainStat(),
                        this.jobTemplateData[7].calcMainStat(),
                        this.jobTemplateData[8].calcMainStat(),
                        this.jobTemplateData[9].calcMainStat(),
                        this.jobTemplateData[10].calcMainStat()];



  

  worker!: Worker;
  isLoading = false;
  progress = 0;

  stat_table :number[] = [];
  link_table :number[] = [6,6,2,2,2,0];
  equip_table :number[] = [];
  auxiliary_table :number[] = [0,0,0,0,0];
  core_table :number[] = [];

  stat_table_list :string[]=statListDefault;
  equip_table_list :string[]=equipListDefault;
  auxiliary_table_list : number[]  = [this.jobdata.jobability_, this.jobdata.coolReduce_,this.jobdata.buffFinal_,this.jobdata.criRein_];




  constructor(
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'MapleScouter - 환산 스탯 계산'
    );

    for (var ii = 0; ii<templategrades.length; ii++)
    {
  
      this.jobTemplateData[ii] = new TemplateData(templategrades[ii],this.jobdata,this.monster_guard);
    }
  



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
    this.jobdata = new TemplateJobData(this.jobName);

    // if(this.jobdata.jobStatType_ == 2)
    // {
    //   this.stat_table_list = statListXenon;
    // }
    // else if(this.jobdata.jobStatType_ == 3)
    // {
    //   this.stat_table_list = statListDemonavenger;
    // }
    // else
    if(this.jobdata.jobStatType_ == 1)
    {
      this.stat_table_list = statListTwosub;
    }
    else
    {
      this.stat_table_list = statListDefault;
    }


     // if(this.jobdata.jobStatType_ == 2)
    // {
    //   this.stat_table_list = statListXenon;
    // }
    // else if(this.jobdata.jobStatType_ == 3)
    // {
    //   this.stat_table_list = statListDemonavenger;
    // }
    // else
    {
      this.equip_table_list = equipListDefault;
    }

    //어빌, 쿨, 벞지, 크리인
    this.auxiliary_table_list = [this.jobdata.jobability_, this.jobdata.coolReduce_,this.jobdata.buffFinal_,this.jobdata.criRein_];
    this.jobTemplateData = [new TemplateData(grades[0],this.jobdata,this.monster_guard),
    new TemplateData(grades[1],this.jobdata,this.monster_guard),
    new TemplateData(grades[2],this.jobdata,this.monster_guard),
    new TemplateData(grades[3],this.jobdata,this.monster_guard),
    new TemplateData(grades[4],this.jobdata,this.monster_guard),
    new TemplateData(grades[5],this.jobdata,this.monster_guard),
    new TemplateData(grades[6],this.jobdata,this.monster_guard),
    new TemplateData(grades[8],this.jobdata,this.monster_guard),
    new TemplateData(grades[10],this.jobdata,this.monster_guard),
    new TemplateData(grades[11],this.jobdata,this.monster_guard),
    new TemplateData(grades[12],this.jobdata,this.monster_guard)];
    this.job100dmgarr=[this.jobTemplateData[0].calc100dmg(),
                        this.jobTemplateData[1].calc100dmg(),
                        this.jobTemplateData[2].calc100dmg(),
                        this.jobTemplateData[3].calc100dmg(),
                        this.jobTemplateData[4].calc100dmg(),
                        this.jobTemplateData[5].calc100dmg(),
                        this.jobTemplateData[6].calc100dmg(),
                        this.jobTemplateData[7].calc100dmg(),
                        this.jobTemplateData[8].calc100dmg(),
                        this.jobTemplateData[9].calc100dmg(),
                        this.jobTemplateData[10].calc100dmg()];
   this.jobMainstatarr=[this.jobTemplateData[0].calcMainStat(),
                        this.jobTemplateData[1].calcMainStat(),
                        this.jobTemplateData[2].calcMainStat(),
                        this.jobTemplateData[3].calcMainStat(),
                        this.jobTemplateData[4].calcMainStat(),
                        this.jobTemplateData[5].calcMainStat(),
                        this.jobTemplateData[6].calcMainStat(),
                        this.jobTemplateData[7].calcMainStat(),
                        this.jobTemplateData[8].calcMainStat(),
                        this.jobTemplateData[9].calcMainStat(),
                        this.jobTemplateData[10].calcMainStat()];

  }

  
}



const statListDefault: string[] =
[
    '레벨',
    '메용 스탯(시드링 착용)',
    '메용X 스탯(시드링 착용)',
    '부스탯',
    '스공(뒷스공)',
    '데미지',
    '보스 데미지(+어빌 상추뎀)',
    '방무',
    '쓸샾후 크뎀',
]

const statListTwosub: string[] =
[
    '레벨',
    '메용 스탯(시드링 착용)',
    '메용X 스탯(시드링 착용)',
    '부스탯(DEX)',
    '부스탯2(STR)',
    '스공(뒷스공)',
    '데미지',
    '보스 데미지(+어빌 상추뎀)',
    '방무',
    '쓸샾후 크뎀',
]

const statListDemonavenger: string[] =
[
    '레벨',
    '쓸뻥O HP(시드링 착용)',
    '쓸뻥X HP(시드링 착용)',
    '부스탯',
    '스공(뒷스공)',
    '데미지',
    '보스 데미지(+어빌 상추뎀)',
    '방무',
    '쓸샾후 크뎀',
]

const statListXenon: string[] =
[
    '레벨',
    'STR 메용 스탯(시드링 착용)',
    'DEX 메용 스탯(시드링 착용)',
    'LUK 메용 스탯(시드링 착용)',
    'STR 메용X 스탯(시드링 착용)',
    'DEX 메용X 스탯(시드링 착용)',
    'LUK 메용X 스탯(시드링 착용)',
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
