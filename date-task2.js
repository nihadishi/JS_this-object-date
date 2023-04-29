getDaysBeforeBirthday(`2023-07-08`);

function getDaysBeforeBirthday(nextBirthdayDate) {
    const data = new Date();
    const myBirth = new Date(nextBirthdayDate);
    const finalBirth = new Date(data.getFullYear(), myBirth.getMonth(), myBirth.getDate());
    // console.log(myBirthDay);
    // console.log(finalBirthDay);
    const abstr = Math.abs(finalBirth.getTime() - data.getTime());
    const res = Math.round(abstr / (1000 * 60 * 60 * 24));
    console.log(`${res} days`);
    

}
