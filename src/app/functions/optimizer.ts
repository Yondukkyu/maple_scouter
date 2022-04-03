import { statData } from "../data/data_format";

export function optimizeHyperUnion( statinfo:statData,
                                    hyp_totalPoint:number,
                                    union_totalBlock:number,
                                    union_reserved:number,
                                    is_criRein:number,
                                    bossArmor:number)
{
  var cur_mainStatPure = statinfo.main_stat_pure;
  var cur_mainStatPer = statinfo.main_stat_rate;
  var cur_mainStatAbs = statinfo.main_stat_abs;
  var cur_subStatPure = statinfo.sub_stat_pure
  var cur_subStatPer = statinfo.sub_stat_rate;
  var cur_subStatAbs = statinfo.sub_stat_abs;
  var cur_criProb = statinfo.cri_rate;
  var cur_criDamage = statinfo.cri_dmg;
  var cur_armorIgnore = statinfo.ign_dmg;
  var cur_damageSum = statinfo.boss_dmg+statinfo.dmg;
  var cur_attPower = statinfo.att_mag;
  var criReinP = is_criRein*0.3;



    const  hyp_pointCost = [0, 1, 2, 4, 8, 10, 15, 20, 25, 30, 35, 50, 65, 80, 95, 110, Infinity];
    const  hyp_valueList = [
          [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 450], //mainStat : 0
          [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 450], //subStat : 1
          [0, 1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 25], //criProb : 2
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15], //criDamage : 3
          [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 45], //armorIgnore : 4
          [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 45], //damage : 5
          [0, 3, 6, 9, 12, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 55], //bossDamage : 6
          [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 45] //attPower : 7
    ];
  
    const  uni_max_level = [
          15, //mainStat : 0
          15, //subStat : 1
          40, //criProb : 2
          40, //criDamage : 3
          40, //armorIgnore : 4
          0, //damage : 5
          40, //bossDamage : 6
          15 //attPower : 7
    ];
    //초기 레벨 값 설정
    var hyp_lvlList = [0, 0, 0, 0, 0, 0, 0, 0];
    var uni_lvlList = [5, 1, 0, 0, 0, 0, 0, 5];
    //초기 스탯, 보댐은 일단은 0부터 시작. 동일 효율 계산이라 지장 없음.
    var statList = [cur_mainStatPure*(100+cur_mainStatPer)/100+cur_mainStatAbs, cur_subStatPure*(100+cur_subStatPer)/100+cur_subStatAbs, cur_criProb, cur_criDamage, cur_armorIgnore, cur_damageSum, 0, cur_attPower];
    var mainStatPer = cur_mainStatPer;
    var subStatPer = cur_subStatPer;
    //각 스탯 변화량에 따른 효율값 저장 컨테이너
    var hyp_efficiency = [0, 0, 0, 0, 0, 0, 0, 0];
    var uni_efficiency = [0, 0, 0, 0, 0, 0, 0, 0];
    //초기 총 하이퍼스탯 포인트 값
    var pnt = hyp_totalPoint;
    //초기 총 유니온 포인트 값, 12는 가로지르는 초기 값
    var block_left = union_totalBlock - 12 - union_reserved;
    //종료 플래그
    var exit_flag = false;
    //하이퍼-유니온 가치 환산 계수
    var hyp_uni_coeff = hyp_totalPoint/union_totalBlock;
  
  
    var hyp_after:number = 0;
    var before:number = 0;
    var uni_after:number = 0;;
  
    while(pnt>0 && !exit_flag) {
      for(var i=0; i<8; i++) {
        switch(i) {
          //주스탯 효율 계산
          case 0:
          hyp_after = 4*(statList[0]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i]*5*(100+mainStatPer)/100)+(statList[1]+hyp_valueList[1][hyp_lvlList[1]]+uni_lvlList[1]*5*(100+subStatPer)/100);
          uni_after = 4*(statList[0]+hyp_valueList[i][hyp_lvlList[i]]+(uni_lvlList[i]+1)*5*(100+mainStatPer)/100)+(statList[1]+hyp_valueList[1][hyp_lvlList[1]]+uni_lvlList[1]*5*(100+subStatPer)/100);
          before = 4*(statList[0]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]*5*(100+mainStatPer)/100)+(statList[1]+hyp_valueList[1][hyp_lvlList[1]]+uni_lvlList[1]*5*(100+subStatPer)/100);
          break;
          //부스탯 효율 계산
          case 1:
          hyp_after = 4*(statList[0]+hyp_valueList[0][hyp_lvlList[0]]+uni_lvlList[0]*5*(100+mainStatPer)/100)+(statList[1]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i]*5*(100+subStatPer)/100);
          uni_after = 4*(statList[0]+hyp_valueList[0][hyp_lvlList[0]]+uni_lvlList[0]*5*(100+mainStatPer)/100)+(statList[1]+hyp_valueList[i][hyp_lvlList[i]]+(uni_lvlList[i]+1)*5*(100+subStatPer)/100);
          before = 4*(statList[0]+hyp_valueList[0][hyp_lvlList[0]]+uni_lvlList[0]*5*(100+mainStatPer)/100)+(statList[1]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]*5*(100+subStatPer)/100);
          break;
          //크리율 효율 계산
          case 2:
          hyp_after = (Math.min(1,(statList[i]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i])/100))*(1.35+(statList[3]+hyp_valueList[3][hyp_lvlList[3]]+uni_lvlList[3]*0.5+(statList[i]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i])*criReinP)/100)+(1-Math.min(1,(statList[i]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i])/100));
          uni_after = (Math.min(1,(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]+1)/100))*(1.35+(statList[3]+hyp_valueList[3][hyp_lvlList[3]]+uni_lvlList[3]*0.5+(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]+1)*criReinP)/100)+(1-Math.min(1,(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]+1)/100));
          before = (Math.min(1,(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i])/100))*(1.35+(statList[3]+hyp_valueList[3][hyp_lvlList[3]]+uni_lvlList[3]*0.5+(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i])*criReinP)/100)+(1-Math.min(1,(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i])/100));
          break;
          //크댐 효율 계산
          case 3:
          hyp_after = (Math.min(1,(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])/100))*(1.35+(statList[3]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i]*0.5+(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])*criReinP)/100)+(1-Math.min(1,(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])/100));
          uni_after = (Math.min(1,(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])/100))*(1.35+(statList[3]+hyp_valueList[i][hyp_lvlList[i]]+(uni_lvlList[i]+1)*0.5+(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])*criReinP)/100)+(1-Math.min(1,(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])/100));
          before = (Math.min(1,(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])/100))*(1.35+(statList[3]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]*0.5+(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])*criReinP)/100)+(1-Math.min(1,(statList[2]+hyp_valueList[2][hyp_lvlList[2]]+uni_lvlList[2])/100));
          break;
          //방무 효율 계산
          case 4:
          hyp_after = 1-bossArmor/100*(1-statList[4]/100)*(1-(hyp_valueList[i][hyp_lvlList[i]+1])/100)*(1-(uni_lvlList[i])/100);
          uni_after = 1-bossArmor/100*(1-statList[4]/100)*(1-(hyp_valueList[i][hyp_lvlList[i]])/100)*(1-(uni_lvlList[i]+1)/100);
          before = 1-bossArmor/100*(1-statList[4]/100)*(1-(hyp_valueList[i][hyp_lvlList[i]])/100)*(1-(uni_lvlList[i])/100);
          break;
          //댐퍼 효율 계산
          case 5:
          hyp_after = (1+(statList[i]+hyp_valueList[i][hyp_lvlList[i]+1]+hyp_valueList[6][hyp_lvlList[6]]+uni_lvlList[6])/100);
          uni_after = 0;
          before = (1+(statList[i]+hyp_valueList[i][hyp_lvlList[i]]+hyp_valueList[6][hyp_lvlList[6]]+uni_lvlList[6])/100);
          break;
          //보공 효율 계산
          case 6:
          hyp_after = 1+(statList[5]+hyp_valueList[5][hyp_lvlList[5]]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i])/100;
          uni_after = 1+(statList[5]+hyp_valueList[5][hyp_lvlList[5]]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]+1)/100;
          before = 1+(statList[5]+hyp_valueList[5][hyp_lvlList[5]]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i])/100;
          break;
          //공마 효율 계산
          case 7:
          hyp_after = statList[7]+hyp_valueList[i][hyp_lvlList[i]+1]+uni_lvlList[i];
          uni_after = statList[7]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i]+1;
          before = statList[7]+hyp_valueList[i][hyp_lvlList[i]]+uni_lvlList[i];
          break;
        }
        //하이퍼 스탯 효율 계산
        if(hyp_pointCost[hyp_lvlList[i]+1] <= pnt) {
          hyp_efficiency[i] = (hyp_after / before - 1) / hyp_pointCost[hyp_lvlList[i]+1];
        }
        //못찍으면 효율은 0
        else {
          hyp_efficiency[i] = 0;
        }
        //유니온 효율 계산
        if(block_left > 0){
          if(uni_lvlList[i] < uni_max_level[i])
          {
            uni_efficiency[i] = (uni_after / before -1) / hyp_uni_coeff;
          }
          else
          {
            uni_efficiency[i] = 0;
          }
        }
        else {
          uni_efficiency[i] = 0;
        }
  
  
      }
      
      //효율이 모두 0인경우, 더 못찍으니 함수 종료 
      var is_valid = 0;
      var best_efficiency, best_eff_idx;
  
      for(var i=0; i<8; i++) {
        is_valid += hyp_efficiency[i];
        is_valid += uni_efficiency[i];
      }
      if(is_valid == 0) {
        exit_flag = true;
      }
      //정보 업데이트
      else {
        best_efficiency = 0;
        best_eff_idx = 0;
  
        var uni_flag = 0;
  
        for(var i=0; i<8; i++) {
          if(hyp_efficiency[i] > best_efficiency) {
            best_efficiency = hyp_efficiency[i];
            best_eff_idx = i;
            uni_flag = 0;
          }
          if(uni_efficiency[i] > best_efficiency) {
            best_efficiency = uni_efficiency[i];
            best_eff_idx = i;
            uni_flag = 1;
          }
        }
  
  
  
        if(uni_flag == 1)
        {
          block_left -= 1;
          uni_lvlList[best_eff_idx] += 1;
        }
        else
        {
          pnt -= hyp_pointCost[hyp_lvlList[best_eff_idx]+1];
          hyp_lvlList[best_eff_idx] += 1;
        }
       
      }
    }
    
    var actual_hyp = [hyp_valueList[0][hyp_lvlList[0]], hyp_valueList[1][hyp_lvlList[1]], hyp_valueList[2][hyp_lvlList[2]], hyp_valueList[3][hyp_lvlList[3]], hyp_valueList[4][hyp_lvlList[4]], hyp_valueList[5][hyp_lvlList[5]], hyp_valueList[6][hyp_lvlList[6]], hyp_valueList[7][hyp_lvlList[7]]];
    var actual_uni = [5 * uni_lvlList[0], 5 * uni_lvlList[1], uni_lvlList[2], 0.5*uni_lvlList[3], uni_lvlList[4], uni_lvlList[5], uni_lvlList[6], uni_lvlList[7]];
  
  
    return new statData([actual_uni[0], 0 , actual_hyp[0], actual_uni[1], 0, actual_hyp[1], actual_uni[7]+actual_hyp[7], 0, actual_hyp[5], actual_hyp[6]+actual_uni[6],0,(1-(1-actual_hyp[4]/100)*(1-actual_uni[4]/100))*100,actual_hyp[2]+actual_uni[2], actual_hyp[3]+actual_uni[3]]);
}