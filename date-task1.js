const data = new Date();
// console.log(data);
function datess(a,b,c,d){
    data.setDate(a);
    data.setMonth(b);
    data.setFullYear(c);
    console.log(`${data.getDate()}${d}${data.getMonth()}${d}${data.getFullYear()}`);
}
// new data(year,month,date,hours,minutes,seconds,ms)

// data.setFullYear(2021);
// data.setMonth(5);
// data.setDate(5);
datess(5,5,2021,'-');
