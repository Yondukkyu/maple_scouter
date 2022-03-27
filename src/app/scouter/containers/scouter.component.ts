import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';


import { jobNames, jobs } from 'src/app/data/job_data';
import { TemplateJobData } from 'src/app/data/data_format';

@Component({
  selector: 'app-container',
  templateUrl: './scouter.component.html',
  styleUrls: ['./scouter.component.scss']
})
export class ScouterComponent implements OnInit {

  jobName:jobNames = '나이트로드';
  jobdata:TemplateJobData = new TemplateJobData(this.jobName);


  job_names = jobs;
  

  worker!: Worker;
  isLoading = false;
  progress = 0;

  stat_table :number[] = [];
  link_table :number[] = [];
  equip_table :number[] = [];
  auxiliary_table :number[] = [];
  core_table :number[] = [];

  stat_table_list :string[]=statListDefault;
  equip_table_list :string[]=equipListDefault;


  constructor(
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'MapleScouter - 환산 스탯 계산'
    );
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

    // if(this.jobName =='제논')
    // {
    //   this.stat_table_list = statListXenon;
    // }
    // else if(this.jobName =='데몬어벤져')
    // {
    //   this.stat_table_list = statListDemonavenger;
    // }
    // else
    if((this.jobName =='듀얼블레이드')||(this.jobName =='섀도어')||(this.jobName =='카데나'))
    {
      this.stat_table_list = statListTwosub;
    }
    else
    {
      this.stat_table_list = statListDefault;
    }


     // if(this.jobName =='제논')
    // {
    //   this.stat_table_list = statListXenon;
    // }
    // else if(this.jobName =='데몬어벤져')
    // {
    //   this.stat_table_list = statListDemonavenger;
    // }
    // else
    {
      this.equip_table_list = equipListDefault;
    }




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
