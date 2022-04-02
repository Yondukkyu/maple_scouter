
 
export const grades: string[] =
[
    '버닝메린이',
    '에픽둘둘',
    '에픽+둘둘',
    '유닠둘둘',
    '18유닠둘둘',
    '반레전둘둘',
    '레전둘둘',
    '해방 초고스펙',
    '5칠흑 2여명',
    '9칠흑 2여명',
    '현실적 이론끝',
    '챙미니',
    '욘두뀨',
]

export type gradeNames = typeof grades[number];

export const templategrades: string[] =
[
    '버닝메린이',
    '에픽둘둘',
    '에픽+둘둘',
    '유닠둘둘',
    '18유닠둘둘',
    '반레전둘둘',
    '레전둘둘',
    '해방 초고스펙',
    '5칠흑 2여명',
    '9칠흑 2여명',
    '현실적 이론끝',
]

export type templategradeNames = typeof templategrades[number];





// 장비 수준에 따른 레벨, 유니온 데이터 (레벨, 하이퍼 칸수, 유니온 블럭수)
export const equipAuxiliary: Record<gradeNames, number[]> =
{
    '버닝메린이': [200, 399, 0],
    '에픽둘둘': [245, 828, 116],
    '에픽+둘둘': [250, 894, 121],
    '유닠둘둘': [255, 964, 125],
    '18유닠둘둘': [260, 1035, 129],
    '반레전둘둘': [265, 1110, 149],
    '레전둘둘': [270, 1186, 149],
    '챙미니': [275, 1266, 149],
    '해방 초고스펙': [275, 1266, 149],
    '욘두뀨': [270, 1186, 150],
    '5칠흑 2여명': [280, 1347, 151],
    '9칠흑 2여명': [280, 1347, 155],
    '현실적 이론끝': [285, 1432, 155],
}


//유니온 예약 블럭 (일반, 모법, 루미)
export const equipUnionReserved: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 40, 12],
    '에픽둘둘': [0, 40, 28],
    '에픽+둘둘': [0, 40, 28],
    '유닠둘둘': [0, 40, 28],
    '18유닠둘둘': [0, 40, 28],
    '반레전둘둘': [0, 40, 12],
    '레전둘둘': [0, 40, 12],
    '챙미니': [0, 40, 12],
    '해방 초고스펙': [0, 40, 12],
    '욘두뀨': [0, 40, 12],
    '5칠흑 2여명': [0, 40, 7],
    '9칠흑 2여명': [0, 40, 7],
    '현실적 이론끝': [0, 40, 7],
}


// 장비 수준 보정
export const equipLevelSmooth: Record<gradeNames, number> =
{
    '버닝메린이': 1,
    '에픽둘둘': 1,
    '에픽+둘둘': 1,
    '유닠둘둘': 1,
    '18유닠둘둘': 1,
    '반레전둘둘': 0,
    '레전둘둘': 0,
    '챙미니': 0,
    '해방 초고스펙': 0,
    '욘두뀨': 0,
    '5칠흑 2여명': 0,
    '9칠흑 2여명': 0,
    '현실적 이론끝': 0,
}

// 템값
export const equipLevel: Record<gradeNames, number[]> =
{
    '버닝메린이': [1863, 90, 0, 700, 42, 0, 433, 9, 2, 80, 0, 40.786975, 0, 0],
    '에픽둘둘': [3230, 211, 7200, 1023, 64, 0, 1214, 54, 0, 155, 0, 70.98561775, 0, 0],
    '에픽+둘둘': [3561, 240, 12000, 1241, 64, 0, 1471, 60, 0, 220, 0, 71.577748, 0, 8],
    '유닠둘둘': [4045, 397, 13200, 1602, 65, 0, 1683, 87, 0, 220, 0, 71.577748, 0, 8],
    '18유닠둘둘': [4225, 478, 14300, 1802, 65, 0, 1837, 105, 0, 220, 0, 71.577748, 0, 16],
    '반레전둘둘': [4557, 549, 14700, 2122, 101, 0, 2151, 105, 0, 220, 0, 71.577748, 0, 16],
    '레전둘둘': [5016, 634, 15800, 2536, 164, 0, 2662, 105, 0, 210, 0, 74.4199732, 0, 16],
    '챙미니': [5198, 669, 17400, 2452, 179, 0, 2734, 129, 9, 222, 0, 61.6299598, 0, 19],
    '해방 초고스펙': [5309, 736, 16600, 2765, 144, 0, 2937, 114, 0, 252, 0, 74.4199732, 0, 19],
    '욘두뀨': [5966, 669, 16200, 3132, 148, 0, 3278, 117, 0, 312, 0, 74.48392327, 0, 25],
    '5칠흑 2여명': [6327, 753, 17000, 3317, 152, 0, 3592, 114, 0, 284, 0, 76.97797588, 0, 24],
    '9칠흑 2여명': [6469, 879, 17400, 3623, 150, 0, 3769, 138, 0, 292, 0, 85.4961248, 0, 34],
    '현실적 이론끝': [7032, 896, 17400, 3709, 91, 0, 4042, 150, 6, 324, 0, 83.07881227, 0, 42],
}

// 템값_제논
export const equipLevel_xenon: Record<gradeNames, number[]> =
{
    '버닝메린이': [3104, 81, 0, 0, 0, 0, 572, 9, 0, 50, 0, 40.786975, 0, 0],
    '에픽둘둘': [5594, 145, 10368, 0, 0, 0, 1258, 54, 0, 155, 0, 70.98561775, 0, 0],
    '에픽+둘둘': [5898, 162, 17280, 0, 0, 0, 1461, 60, 0, 220, 0, 71.577748, 0, 8],
    '유닠둘둘': [7127, 261, 19008, 0, 0, 0, 1636, 105, 0, 220, 0, 71.577748, 0, 8],
    '18유닠둘둘': [7508, 345, 20595, 0, 0, 0, 1772, 105, 0, 220, 0, 71.577748, 0, 16],
    '반레전둘둘': [8436, 388, 21168, 0, 0, 0, 2084, 105, 0, 220, 0, 71.577748, 0, 16],
    '레전둘둘': [9561, 433, 22752, 0, 0, 0, 2711, 105, 0, 210, 0, 74.4199732, 0, 16],
    '해방 초고스펙': [10315, 548, 23904, 0, 0, 0, 2860, 114, 0, 250, 0, 74.4199732, 0, 19],
    '5칠흑 2여명': [12015, 593, 24480, 0, 0, 0, 3395, 114, 0, 274, 0, 76.97797588, 0, 24],
    '9칠흑 2여명': [13320, 658, 25056, 0, 0, 0, 3595, 138, 0, 292, 0, 79.28017829, 0, 34],
    '현실적 이론끝': [14112, 745, 26208, 0, 0, 0, 3975, 153, 6, 344, 0, 83.07881227, 0, 42],
}

// 템값_데벤져
export const equipLevel_demon: Record<gradeNames, number[]> =
{
    '버닝메린이': [58152, 39, 0, 806, 0, 0, 503, 9, 2, 80, , 40.786975, 0, 0],
    '에픽둘둘': [85525, 187, 151200, 1099, 0, 0, 1257, 54, 0, 155, 0, 70.98561775, 0, 0],
    '에픽+둘둘': [90883, 198, 252000, 1255, 0, 0, 1523, 60, 0, 220, 0, 71.577748, 0, 8],
    '유닠둘둘': [102096, 379, 277200, 1623, 0, 0, 1777, 87, 0, 220, 0, 71.577748, 0, 8],
    '18유닠둘둘': [104860, 460, 300300, 1751, 0, 0, 1907, 105, 0, 220, 0, 71.577748, 0, 16],
    '반레전둘둘': [110882, 539, 308700, 2047, 0, 0, 2213, 105, 0, 220, 0, 71.577748, 0, 16],
    '레전둘둘': [118261, 624, 331800, 2432, 0, 0, 2706, 105, 0, 210, 0, 74.4199732, 0, 16],
    '해방 초고스펙': [125550, 744, 348600, 2645, 0, 0, 3114, 114, 0, 250, 0, 74.4199732, 0, 19],
    '5칠흑 2여명': [121992, 772, 357000, 3114, 0, 0, 3881, 114, 0, 284, 0, 76.97797588, 0, 24],
    '9칠흑 2여명': [126457, 892, 365400, 3370, 0, 0, 3954, 138, 0, 292, 0, 85.4961248, 0, 34],
    '현실적 이론끝': [131035, 970, 365400, 3332, 0, 0, 4132, 150, 6, 324, 0, 83.078812269, 0, 42],
}


//부스탯 보정(부스탯2직업시 템값 부스탯x2 - 현수치)
export const equipSubStat: Record<gradeNames, number> =
{
    '버닝메린이': 0,
    '에픽둘둘': 463,
    '에픽+둘둘': 503,
    '유닠둘둘': 580,
    '18유닠둘둘': 580,
    '반레전둘둘': 580,
    '레전둘둘': 580,
    '챙미니': 625,
    '해방 초고스펙': 625,
    '욘두뀨': 685,
    '5칠흑 2여명': 685,
    '9칠흑 2여명': 685,
    '현실적 이론끝': 685,
}

//무기공 보정 
export const equipjobWeapattComp: Record<gradeNames, number> =
{
    '버닝메린이': 0,
    '에픽둘둘': 0,
    '에픽+둘둘': 1,
    '유닠둘둘': 1,
    '18유닠둘둘': 1,
    '반레전둘둘': 1,
    '레전둘둘': 1,
    '챙미니': 4,
    '해방 초고스펙': 3,
    '욘두뀨': 3,
    '5칠흑 2여명': 4,
    '9칠흑 2여명': 4,
    '현실적 이론끝': 4,
}


//방패 보조 수치 (jobSubweap : 1)
export const equipSubweap_case1: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽+둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '유닠둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '18유닠둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [75, 0, 0, 65, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [91, 0, 0, 65, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [91, 0, 0, 65, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [91, 0, 0, 65, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [91, 0, 0, 65, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0],
    '9칠흑 2여명': [105, 0, 0, 95, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0],
    '현실적 이론끝': [105, 0, 0, 95, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0],
}


//듀블 보조 수치 (jobSubweap : 2)
export const equipSubweap_case2: Record<gradeNames, number[]> =
{
    '버닝메린이': [19, 0, 0, 19, 0, 0, 109, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [97, 0, 0, 21, 0, 0, 229, 0, 0, 0, 0, 0, 0, 0],
    '에픽+둘둘': [142, 0, 0, 66, 0, 0, 265, 0, 0, 0, 0, 0, 0, 0],
    '유닠둘둘': [142, 0, 0, 66, 0, 0, 265, 0, 0, 0, 0, 0, 0, 0],
    '18유닠둘둘': [161, 0, 0, 60, 0, 0, 328, 0, 0, 0, 0, 0, 0, 0],
    '반레전둘둘': [161, 0, 0, 60, 0, 0, 328, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [176, 0, 0, 75, 0, 0, 342, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [236, 0, 0, 135, 0, 0, 404, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [236, 0, 0, 135, 0, 0, 404, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [236, 0, 0, 135, 0, 0, 404, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [236, 0, 0, 135, 0, 0, 404, 0, 0, 0, 0, 0, 0, 0],
    '9칠흑 2여명': [236, 0, 0, 135, 0, 0, 404, 0, 0, 0, 0, 0, 0, 0],
    '현실적 이론끝': [236, 0, 0, 135, 0, 0, 404, 0, 0, 0, 0, 0, 0, 0],
}


//농장값(전직업 18유닠둘둘 미만 구간에서 아래수치로 일괄 적용) 
export const equipFarm: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [53, 0, 0, 20, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '에픽+둘둘': [53, 0, 0, 20, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '유닠둘둘': [53, 0, 0, 20, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '18유닠둘둘': [53, 0, 0, 20, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '9칠흑 2여명': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '현실적 이론끝': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

//농장값 제논(전직업 18유닠둘둘 미만 구간에서 아래수치로 일괄 적용) 
export const equipFarm_xenon: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [73, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '에픽+둘둘': [73, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '유닠둘둘': [73, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '18유닠둘둘': [73, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '9칠흑 2여명': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '현실적 이론끝': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

//농장값 데몬어벤져(전직업 18유닠둘둘 미만 구간에서 아래수치로 일괄 적용) 
export const equipFarm_demon: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [700, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '에픽+둘둘': [700, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '유닠둘둘': [700, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '18유닠둘둘': [700, 0, 0, 0, 0, 0, 0, 0, 12, 13, 0, 10, 9, 2],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '9칠흑 2여명': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '현실적 이론끝': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

//템값 추가값(블링크 로프 은월유뇬250)
export const equipCoreAdd: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽+둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '유닠둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '18유닠둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
    '9칠흑 2여명': [30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
    '현실적 이론끝': [30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
}

//템값 추가값_제논(블링크 로프 은월유뇬250)
export const equipCoreAdd_xenon: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽+둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '유닠둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '18유닠둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [90, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [90, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [90, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [90, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
    '9칠흑 2여명': [90, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
    '현실적 이론끝': [90, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
}

//템값 추가값 데몬어벤져(블링크 로프 은월유뇬250)
export const equipCoreAdd: Record<gradeNames, number[]> =
{
    '버닝메린이': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '에픽+둘둘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '유닠둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '18유닠둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '반레전둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '레전둘둘': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '챙미니': [0, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '해방 초고스펙': [0, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '욘두뀨': [0, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
    '5칠흑 2여명': [0, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
    '9칠흑 2여명': [0, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
    '현실적 이론끝': [0, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1],
}

//쿨감 보정값 (2최적, 5최적, 1초, 2초, 3초, 4초, 5초, 6초, 7초)
export const equipCoolComp: Record<gradeNames, number[]> =
{
'버닝메린이': [0, 0, 7, 12, 24, 31, 38, 43, 50],
'에픽둘둘': [0, 0, 7, 12, 24, 31, 38, 43, 50],
'에픽+둘둘': [0, 0, 7, 12, 24, 31, 38, 43, 50],
'유닠둘둘': [12, 12, 7, 12, 24, 31, 38, 43, 50],
'18유닠둘둘': [12, 12, 7, 12, 24, 31, 38, 43, 50],
'반레전둘둘': [12, 24, 7, 12, 24, 31, 38, 43, 50],
'레전둘둘': [12, 24, 7, 12, 24, 31, 38, 43, 50],
'챙미니': [12, 24, 7, 12, 19, 24, 31, 36, 43],
'해방 초고스펙': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'욘두뀨': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'5칠흑 2여명': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'9칠흑 2여명': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'현실적 이론끝': [12, 31, 7, 12, 19, 24, 31, 36, 43],
}

//쿨감 보정값 제논 (2최적, 5최적, 1초, 2초, 3초, 4초, 5초, 6초, 7초)
export const equipCoolComp_xenon: Record<gradeNames, number[]> =
{
'버닝메린이': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'에픽둘둘': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'에픽+둘둘': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'유닠둘둘': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'18유닠둘둘': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'반레전둘둘': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'레전둘둘': [0, 0, 0, 5, 9, 18, 23, 28, 32, 39],
'해방 초고스펙': [0, 0, 0, 5, 9, 14., 18, 23, 28., 32],
'5칠흑 2여명': [0, 0, 0, 5, 9, 14., 18, 23, 28., 32],
'9칠흑 2여명': [0, 0, 0, 5, 9, 14., 18, 23, 28., 32],
'현실적 이론끝': [0, 0, 0, 5, 9, 14., 18, 23, 28., 32],
}

//쿨감 보정값 데몬어벤져 (2최적, 5최적, 1초, 2초, 3초, 4초, 5초, 6초, 7초)
export const equipCoolComp_demon: Record<gradeNames, number[]> =
{
'버닝메린이': [0, 0, 7, 12, 24, 31, 38, 43, 50],
'에픽둘둘': [0, 0, 7, 12, 24, 31, 38, 43, 50],
'에픽+둘둘': [0, 0, 7, 12, 24, 31, 38, 43, 50],
'유닠둘둘': [12, 12, 7, 12, 24, 31, 38, 43, 50],
'18유닠둘둘': [12, 12, 7, 12, 24, 31, 38, 43, 50],
'반레전둘둘': [12, 24, 7, 12, 24, 31, 38, 43, 50],
'레전둘둘': [12, 24, 7, 12, 24, 31, 38, 43, 50],
'챙미니': [12, 24, 7, 12, 19, 24, 31, 36, 43],
'해방 초고스펙': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'욘두뀨': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'5칠흑 2여명': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'9칠흑 2여명': [12, 31, 7, 12, 19, 24, 31, 36, 43],
'현실적 이론끝': [12, 31, 7, 12, 19, 24, 31, 36, 43],
}
