import { gradeNames } from "./equip_data";
import {jobNames,
        jobPassive_base,
        jobSubweapBase,
        jobAbilityInfo,
        jobBuffCond,
        jobUseCoolReduce,
        jobUsebuffFinal,
        jobUseCriRein,
        jobSubweaptype,
        jobMainWeapAtt,
        jobLinkAbilities_main,
        jobPassive_Lv1,
        jobLinkAbilities_semi,
        jobUnion,
        jobCoreStats,
        jobFarm,
} from "./job_data";

export class UserStatdata
{

    main_stat_pure: number;
    main_stat_rate: number;
    main_stat_abs: number;
    sub_stat1_pure: number;
    sub_stat1_rate: number;
    sub_stat1_abs: number;
    sub_stat2_pure: number;
    sub_stat2_rate: number;
    sub_stat2_abs: number;
    att_mag: number;
    att_mag_rate: number;
    dmg: number;
    boss_dmg: number;
    final_dmg: number;
    ign_dmg: number;
    cri_rate: number;
    cri_dmg: number;

    constructor(statinfo:number[])
    {
        this.main_stat_pure = statinfo[0];
        this.main_stat_rate = statinfo[1];
        this.main_stat_abs = statinfo[2];
        this.sub_stat1_pure = statinfo[3];
        this.sub_stat1_rate = statinfo[4];
        this.sub_stat1_abs = statinfo[5];
        this.sub_stat2_pure = statinfo[6];
        this.sub_stat2_rate = statinfo[7];
        this.sub_stat2_abs = statinfo[8];
        this.att_mag = statinfo[9];
        this.att_mag_rate = statinfo[10];
        this.dmg = statinfo[11];
        this.boss_dmg = statinfo[12];
        this.final_dmg = statinfo[13];
        this.ign_dmg = statinfo[14];
        this.cri_rate = statinfo[15];
        this.cri_dmg = statinfo[16];
        
    }


    add_stat(to_add:UserStatdata)
    {
        

        this.main_stat_pure += to_add.main_stat_pure;
        this.main_stat_rate += to_add.main_stat_rate;
        this.main_stat_abs += to_add.main_stat_abs;
        this.sub_stat1_pure += to_add.sub_stat1_pure;
        this.sub_stat1_rate += to_add.sub_stat1_rate;
        this.sub_stat1_abs += to_add.sub_stat1_abs;
        this.sub_stat2_pure += to_add.sub_stat2_pure;
        this.sub_stat2_rate += to_add.sub_stat2_rate;
        this.sub_stat2_abs += to_add.sub_stat2_abs;
        this.att_mag += to_add.att_mag;
        this.att_mag_rate += to_add.att_mag_rate;
        this.dmg += to_add.dmg;
        this.boss_dmg += to_add.boss_dmg;
        this.final_dmg = (this.final_dmg * 0.01 + 1) * (to_add.final_dmg * 0.01 + 1) * 100 -100;
        this.ign_dmg = (1 - (1 - this.ign_dmg * 0.01) * (1 - to_add.ign_dmg * 0.01)) * 100;
        this.cri_rate += to_add.cri_rate;
        this.cri_dmg += to_add.cri_dmg;

    }


}

export class TemplateStatdata
{
    main_stat_pure: number;
    main_stat_rate: number;
    main_stat_abs: number;
    sub_stat_pure: number;
    sub_stat_rate: number;
    sub_stat_abs: number;
    att_mag: number;
    att_mag_rate: number;
    dmg: number;
    boss_dmg: number;
    final_dmg: number;
    ign_dmg: number;
    cri_rate: number;
    cri_dmg: number;

    constructor(statinfo:number[])
    {
        this.main_stat_pure = statinfo[0];
        this.main_stat_rate = statinfo[1];
        this.main_stat_abs = statinfo[2];
        this.sub_stat_pure = statinfo[3];
        this.sub_stat_rate = statinfo[4];
        this.sub_stat_abs = statinfo[5];
        this.att_mag = statinfo[6];
        this.att_mag_rate = statinfo[7];
        this.dmg = statinfo[8];
        this.boss_dmg = statinfo[9];
        this.final_dmg = statinfo[10];
        this.ign_dmg = statinfo[11];
        this.cri_rate = statinfo[12];
        this.cri_dmg = statinfo[13];
        
    }


    add_stat(to_add:TemplateStatdata)
    {
        

        this.main_stat_pure += to_add.main_stat_pure;
        this.main_stat_rate += to_add.main_stat_rate;
        this.main_stat_abs += to_add.main_stat_abs;
        this.sub_stat_pure += to_add.sub_stat_pure;
        this.sub_stat_rate += to_add.sub_stat_rate;
        this.sub_stat_abs += to_add.sub_stat_abs;
        this.att_mag += to_add.att_mag;
        this.att_mag_rate += to_add.att_mag_rate;
        this.dmg += to_add.dmg;
        this.boss_dmg += to_add.boss_dmg;
        this.final_dmg = (this.final_dmg * 0.01 + 1) * (to_add.final_dmg * 0.01 + 1) * 100 -100;
        this.ign_dmg = (1 - (1 - this.ign_dmg * 0.01) * (1 - to_add.ign_dmg * 0.01)) * 100;
        this.cri_rate += to_add.cri_rate;
        this.cri_dmg += to_add.cri_dmg;

    }

    sub_stat(to_sub:TemplateStatdata)
    {
        

        this.main_stat_pure -= to_sub.main_stat_pure;
        this.main_stat_rate -= to_sub.main_stat_rate;
        this.main_stat_abs -= to_sub.main_stat_abs;
        this.sub_stat_pure -= to_sub.sub_stat_pure;
        this.sub_stat_rate -= to_sub.sub_stat_rate;
        this.sub_stat_abs -= to_sub.sub_stat_abs;
        this.att_mag -= to_sub.att_mag;
        this.att_mag_rate -= to_sub.att_mag_rate;
        this.dmg -= to_sub.dmg;
        this.boss_dmg -= to_sub.boss_dmg;
        this.final_dmg = (this.final_dmg * 0.01 + 1) / (to_sub.final_dmg * 0.01 + 1) * 100 -100;
        this.ign_dmg = (1 - (1 - this.ign_dmg * 0.01) / (1 - to_sub.ign_dmg * 0.01)) * 100;
        this.cri_rate -= to_sub.cri_rate;
        this.cri_dmg -= to_sub.cri_dmg;

    }


}

export class TemplateJobData
{
    jobName_:string;

    jobBuffCond_:string;
    jobability_:number;
    jobSubweaptype:number;

    coolReduce_:number;
    buffFinal_:number;
    criRein_:number;
    weapData_:number[];

    passiveData_:TemplateStatdata;
    passiveData_abl1lv:TemplateStatdata;
    subweap_:TemplateStatdata;
    linkAbility_main:TemplateStatdata;
    linkAbility_sub:TemplateStatdata;
    farm_:TemplateStatdata;
    union_:TemplateStatdata;
    coreStat_:TemplateStatdata;

    statData_:TemplateStatdata;

    constructor(jobName:jobNames)
    {
        this.jobName_= jobName;
        
        this.jobBuffCond_ = jobBuffCond[jobName];
        this.jobability_ = jobAbilityInfo[jobName];
        this.jobSubweaptype = jobSubweaptype[jobName];

        this.coolReduce_ = jobUseCoolReduce[jobName];
        this.buffFinal_ = jobUsebuffFinal[jobName];
        this.criRein_ = jobUseCriRein[jobName];
        this.weapData_ = jobMainWeapAtt[jobName];


        this.passiveData_ = new TemplateStatdata(jobPassive_base[jobName]);
        this.passiveData_abl1lv = new TemplateStatdata(jobPassive_Lv1[jobName]);
        this.subweap_ = new TemplateStatdata(jobSubweapBase[jobName]);
        this.linkAbility_main = new TemplateStatdata(jobLinkAbilities_main[jobName]);
        this.linkAbility_sub  = new TemplateStatdata(jobLinkAbilities_semi[jobName]);
        this.farm_ = new TemplateStatdata(jobFarm[jobName]);
        this.union_ = new TemplateStatdata(jobUnion[jobName]);
        this.coreStat_ = new TemplateStatdata(jobCoreStats[jobName]);
        
        this.statData_ = this.passiveData_ ;
        this.statData_.add_stat(this.subweap_);
        this.statData_.add_stat(this.linkAbility_main);
        this.statData_.add_stat(this.farm_);
        this.statData_.add_stat(this.union_);
        this.statData_.add_stat(this.coreStat_);



    }

}


export class TemplateData
{

    jobData_:TemplateJobData;
    gradeName_:gradeNames;
    templateStat_:TemplateStatdata;


    constructor(gradeName:gradeNames, jobData:TemplateJobData)
    {
        this.gradeName_ = gradeName;
        this.jobData_ = jobData;
        this.templateStat_ = jobData.statData_;


    }




}