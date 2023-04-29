function addDays(date,dayToMs){
   dayToMs = dayToMs*24*60*1000000;
    const data = new Date(date);
    // console.log(data);
    const lastData = new Date(data.getTime() + dayToMs);
    console.log(lastData);

    return lastData;
}

addDays(`2000.10.10`, 20)
