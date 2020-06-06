let topicsArray = [
    "台視首播",
    "衛視中文台重播",
    "停播",
    "台視首播",
    "衛視中文台重播",
    "台視首播"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月分和日期
    startDate.setMonth(startMonth-1, startDay);

    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);