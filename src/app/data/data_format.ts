import { iif } from "rxjs";
import { optimizeHyperUnion } from "../functions/optimizer";
import {equipAuxiliary, equipCoolComp, equipCoreAdd,
        equipFarm,
        equipjobWeapattComp,
        equipLevel,
        equipLevelSmooth,
        equipSubStat,
        equipSubweap_case1,
        equipSubweap_case2,
        equipUnionReserved,
        gradeNames } from "./equip_data";
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
        jobStatCond,
        jobCReff,
        jobProperty,
        jobAddIGR,
} from "./job_data";

export class UserStatdata
{
    jobName:jobNames;
    doping_data:TemplateStatdata;

    server:number;
    level:number;
    stat_w_hero:number;
    stat_wo_hero:number;
    sub_stat:number;
    stat_atk:number;
    dmg:number;
    boss_dmg:number;
    ign_dmg:number;
    cri_dmg:number;
    att_mag_rate:number;
    abs_stat:number;
    auxiliary_data:number[];
    link_dmg:number;


    stat_list:number[]=[];


    

    constructor(jobData:TemplateJobData, statData_front:number[], statData_back:number[], equipData:number[], auxiliaryData:number[],linkData:number[])
    {
        this.jobName = jobData.jobName_;
        this.doping_data = jobData.doping_;

        this.server = statData_front[0];
        this.level = statData_front[1];
        this.stat_w_hero = 0;
        this.stat_wo_hero = 0;
        this.sub_stat = 0;

        if(jobData.jobStatType_== 2) //제논
        {
            this.stat_w_hero = statData_front[2]+statData_front[3]+statData_front[4];
            this.stat_wo_hero = statData_front[5]+statData_front[6]+statData_front[7];
        }
        else if(jobData.jobStatType_== 1) //이중 부스탯
        {
            this.stat_w_hero = statData_front[2];
            this.stat_wo_hero = statData_front[3];
            this.sub_stat = statData_front[4]+statData_front[5];
        }
        else
        {
            this.stat_w_hero = statData_front[2];
            this.stat_wo_hero = statData_front[3];
            this.sub_stat = statData_front[4];
        }

        this.stat_atk = statData_back[0];
        this.dmg = statData_back[1];
        this.boss_dmg = statData_back[2];
        this.ign_dmg = statData_back[3];
        this.cri_dmg = statData_back[4];

        this.att_mag_rate = equipData[0]+jobData.statData_.att_mag_rate;
        
        this.abs_stat = 0;
        for(var ii=1; ii < equipData.length; ii++)
        {
            this.abs_stat += equipData[ii];
        }

        this.auxiliary_data = auxiliaryData;

        this.link_dmg = 3 * Math.floor((linkData[0]+1)/2) + 1.5 * linkData[1] + 6 * linkData[2] + 4.5 * linkData[3] + 4 * linkData[4] + 2 * linkData[5];

        //calculate stat rate
        var stat_difference = this.stat_w_hero - this.stat_wo_hero;
        var pure_hero_ap = jobData.ap_by_hero(this.level);

        var main_stat_per = Math.round(stat_difference/pure_hero_ap);
        
        //calculate pure stat

        var stat_w_per = this.stat_wo_hero - this.abs_stat;

        var pure_stat = Math.ceil(stat_w_per/main_stat_per);

        //calculate att_mag






        this.stat_list[0] = pure_stat;
        this.stat_list[1] = main_stat_per;
        this.stat_list[2] = this.abs_stat;
        this.stat_list[3] = this.sub_stat;
        this.stat_list[4] = 0;
        this.stat_list[5] = 0;









        
        
    }
}

export class TemplateStatdata
{
    stat_raw_data:number[] = [];
    current_data:number[] = [];

    main_stat_pure: number = 0;
    main_stat_rate: number = 0;
    main_stat_abs: number = 0;
    sub_stat_pure: number = 0;
    sub_stat_rate: number = 0;
    sub_stat_abs: number = 0;
    att_mag: number = 0;
    att_mag_rate: number = 0;
    dmg: number = 0;
    boss_dmg: number = 0;
    final_dmg: number = 0;
    ign_dmg: number = 0;
    cri_rate: number = 0;
    cri_dmg: number = 0;

    constructor(statinfo:number[])
    {
        for(var ii=0; ii<statinfo.length;ii++)
        {
            this.stat_raw_data.push(statinfo[ii]);
        }
        for(var ii=statinfo.length; ii<14;ii++)
        {
            this.stat_raw_data.push(0);
        }

        this.main_stat_pure = this.stat_raw_data[0];
        this.main_stat_rate = this.stat_raw_data[1];
        this.main_stat_abs = this.stat_raw_data[2];
        this.sub_stat_pure = this.stat_raw_data[3];
        this.sub_stat_rate = this.stat_raw_data[4];
        this.sub_stat_abs = this.stat_raw_data[5];
        this.att_mag = this.stat_raw_data[6];
        this.att_mag_rate = this.stat_raw_data[7];
        this.dmg = this.stat_raw_data[8];
        this.boss_dmg = this.stat_raw_data[9];
        this.final_dmg = this.stat_raw_data[10];
        this.ign_dmg = this.stat_raw_data[11];
        this.cri_rate = this.stat_raw_data[12];
        this.cri_dmg = this.stat_raw_data[13];

        
        
    }

    update()
    {
        this.current_data[0] = this.main_stat_pure;
        this.current_data[1] = this.main_stat_rate;
        this.current_data[2] = this.main_stat_abs;
        this.current_data[3] = this.sub_stat_pure;
        this.current_data[4] = this.sub_stat_rate;
        this.current_data[5] = this.sub_stat_abs;
        this.current_data[6] = this.att_mag;
        this.current_data[7] = this.att_mag_rate;
        this.current_data[8] = this.dmg;
        this.current_data[9] = this.boss_dmg;
        this.current_data[10] = this.final_dmg;
        this.current_data[11] = this.ign_dmg;
        this.current_data[12] = this.cri_rate;
        this.current_data[13] = this.cri_dmg;

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
        this.ign_dmg = (this.ign_dmg - to_sub.ign_dmg) / (1 - to_sub.ign_dmg * 0.01);
        this.cri_rate -= to_sub.cri_rate;
        this.cri_dmg -= to_sub.cri_dmg;

    }

    deepCopy()
    {   
        this.update();

        return new TemplateStatdata(this.current_data);
    }

    calcMainStat():number
    {
        return Math.floor(this.main_stat_pure * (this.main_stat_rate/100 + 1)) + this.main_stat_abs;

    }


    
}

export class TemplateJobData
{
    jobName_:string;

    jobBuffCond_:string;
    jobability_:number;
    jobSubweapType_:number;
    jobStatType_:number;
    jobProperty_:number[];

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
    doping_:TemplateStatdata;
    coreStat_:TemplateStatdata;

    statData_:TemplateStatdata;

    constructor(jobName:jobNames)
    {
        this.jobName_= jobName;
        
        this.jobBuffCond_ = jobBuffCond[jobName];
        this.jobability_ = jobAbilityInfo[jobName];
        this.jobSubweapType_ = jobSubweaptype[jobName];
        this.jobStatType_ = jobStatCond[jobName];
        this.jobProperty_ = jobProperty[jobName];
        
        this.coolReduce_ = jobUseCoolReduce[jobName];
        this.buffFinal_ = jobUsebuffFinal[jobName];
        this.criRein_ = jobUseCriRein[jobName];
        this.weapData_ = jobMainWeapAtt[jobName];
        


        this.passiveData_ = new TemplateStatdata(jobPassive_base[jobName]);
        this.passiveData_.ign_dmg = jobAddIGR[jobName][0];
        this.passiveData_abl1lv = new TemplateStatdata(jobPassive_Lv1[jobName]);
        this.subweap_ = new TemplateStatdata(jobSubweapBase[jobName]);
        this.linkAbility_main = new TemplateStatdata(jobLinkAbilities_main[jobName]);
        this.linkAbility_sub  = new TemplateStatdata(jobLinkAbilities_semi[jobName]);
        this.farm_ = new TemplateStatdata(jobFarm[jobName]);
        this.union_ = new TemplateStatdata(jobUnion[jobName]);
        this.coreStat_ = new TemplateStatdata(jobCoreStats[jobName]);
        this.doping_ = new TemplateStatdata([30,0,0,30,0,0,180,4,40,50,0,0,0,30]);

        this.statData_ = this.passiveData_ ;
        this.statData_.add_stat(this.subweap_);
        this.statData_.add_stat(this.linkAbility_main);
        this.statData_.add_stat(this.farm_);
        this.statData_.add_stat(this.union_);
        this.statData_.add_stat(this.coreStat_);
        this.statData_.add_stat(this.doping_);



    }

    ap_by_hero(level:number):number
    {
        if(this.jobName_ == '팔라딘')
        {
            return Math.floor((18+5*level)*0.16)
        }
        else
        {
            return Math.floor((18+5*level)*0.15)
        }
    }

}


export class TemplateData
{
    
    jobData_:TemplateJobData;
    jobName_:jobNames;
    gradeName_:gradeNames;
    level_:number;
    hyper_point:number;
    union_blocks:number;
    reserved_blocks:number;

    petit_rumi:number = 0;
    monster_gaurd_rate:number;
    
    totalStat_ :TemplateStatdata;
    templatejobStat_:TemplateStatdata;
    gradeEquipStat_ :TemplateStatdata;
    optimizeResult_:TemplateStatdata;




    constructor(gradeName:gradeNames, jobData:TemplateJobData, monGaurd:number)
    {
        this.monster_gaurd_rate = monGaurd;
        this.gradeName_ = gradeName;
        this.jobData_ = jobData;
        this.jobName_ = jobData.jobName_;
        this.templatejobStat_ = jobData.statData_.deepCopy();
        this.level_ = equipAuxiliary[gradeName][0];
        this.hyper_point = equipAuxiliary[gradeName][1];
        this.union_blocks = equipAuxiliary[gradeName][2];
        this.reserved_blocks = equipUnionReserved[gradeName][jobData.buffFinal_];


        //장비 수준 확정
        this.gradeEquipStat_ = new TemplateStatdata(equipLevel[gradeName]);
        this.gradeEquipStat_.add_stat(new TemplateStatdata(equipCoreAdd[gradeName]));
        //메용, 시그 보정

        this.gradeEquipStat_.main_stat_pure += this.jobData_.ap_by_hero(this.level_);

        
        if((jobData.jobName_ == '나이트워커')
        ||(jobData.jobName_ == '소울마스터')
        ||(jobData.jobName_ == '스트라이커')
        ||(jobData.jobName_ == '윈드브레이커')
        ||(jobData.jobName_ == '플레임위자드'))
        {
            this.gradeEquipStat_.main_stat_pure += Math.floor(this.level_/2)
        }


        //무기공 보정
        this.gradeEquipStat_.att_mag -= jobMainWeapAtt["히어로"][equipjobWeapattComp[gradeName]];
        this.gradeEquipStat_.att_mag += jobMainWeapAtt[jobData.jobName_][equipjobWeapattComp[gradeName]];
        //2부스탯, 보조 보정
        if(jobData.jobStatType_ == 1)
        {
            this.gradeEquipStat_.sub_stat_pure = 2 * this.gradeEquipStat_.sub_stat_pure - equipSubStat[gradeName];
        }
        if(jobData.jobSubweapType_ == 1)
        {
            this.gradeEquipStat_.add_stat(new TemplateStatdata(equipSubweap_case1[gradeName]));
        }
        else if(jobData.jobSubweapType_ == 2)
        {
            this.gradeEquipStat_.add_stat(new TemplateStatdata(equipSubweap_case2[gradeName]));
        }
        //18 유닠둘둘 이하 보정
        if(equipLevelSmooth[gradeName] == 1)
        {
            this.templatejobStat_.sub_stat(jobData.farm_);
            this.templatejobStat_.add_stat(new TemplateStatdata(equipFarm[gradeName]));
            
            if(gradeName=='버닝메린이')
            {
                this.gradeEquipStat_.sub_stat(jobData.linkAbility_main);
                this.gradeEquipStat_.sub_stat(jobData.union_);
                this.gradeEquipStat_.sub_stat(jobData.coreStat_);
            }
            else{
                this.gradeEquipStat_.add_stat(jobData.linkAbility_sub);
            }

        }
        else
        {
            this.petit_rumi = Math.floor(this.level_/20);
        }
        //쿨감 보정
        if(jobData.coolReduce_ == 1)
        {
            this.gradeEquipStat_.main_stat_rate -= equipCoolComp[gradeName][jobCReff[jobData.jobName_][3]];
        }
        

        this.totalStat_ = this.templatejobStat_;
        this.totalStat_.add_stat(this.gradeEquipStat_);
        this.optimizeResult_ = optimizeHyperUnion(this.totalStat_,this.hyper_point,this.union_blocks,this.reserved_blocks,jobData.criRein_,monGaurd);
        this.totalStat_.add_stat(this.optimizeResult_);

        //초과 크리 보정
        if(this.totalStat_.cri_rate > 100)
        {
            var over_rate = this.totalStat_.cri_rate - 100;
            this.totalStat_.cri_rate = 100;
            this.totalStat_.att_mag += over_rate*2.35;
        }
        //직업 특색에 따른 종댐 보정

    }

    calcMainStat():number
    {
    
        return this.totalStat_.calcMainStat();
    }

    calc100dmg():number
    {
        var prof_coeff = (this.jobData_.jobProperty_[0]+1)/2;
        var weap_coeff = this.jobData_.jobProperty_[1];
        var stat_coeff = (4*(Math.floor(this.totalStat_.main_stat_pure * (this.totalStat_.main_stat_rate/100 + 1)) + this.totalStat_.main_stat_abs) + Math.floor(this.totalStat_.sub_stat_pure * (this.totalStat_.sub_stat_rate/100 + 1)) + this.totalStat_.sub_stat_abs) / 100;
        if(this.jobName_ == '데몬어벤져')
        {
            let equip_main_stat = Math.floor(this.totalStat_.main_stat_pure * (this.totalStat_.main_stat_rate/100 + 1)) + this.totalStat_.main_stat_abs;
            let pure_hp = 545 + this.level_*90;

            stat_coeff = (4*(pure_hp/14 + (equip_main_stat - pure_hp)/17.5) +  Math.floor(this.totalStat_.sub_stat_pure * (this.totalStat_.sub_stat_rate/100 + 1)) + this.totalStat_.sub_stat_abs) / 100;
        }
        
        var att_coeff = Math.floor(this.totalStat_.att_mag * (this.totalStat_.att_mag_rate/100 + 1)) + this.petit_rumi;
        var dmg_coeff = (100 + this.totalStat_.dmg + this.totalStat_.boss_dmg) / 100;
        var final_coeff = (100 + this.totalStat_.final_dmg) / 100;
        var ign_coeff = Math.max(0, 1 - this.monster_gaurd_rate / 100 * (1-this.totalStat_.ign_dmg / 100));
        var cri_coeff = Math.min(this.totalStat_.cri_rate,100)/100 * (0.35 + this.totalStat_.cri_dmg/100) + 1;
        
        

        return Math.floor(prof_coeff * weap_coeff * stat_coeff * att_coeff * dmg_coeff * final_coeff * ign_coeff * cri_coeff);
    }




}