function getKiller(suspectInfo,deadPeople){
    for(let i= 0 ;i<Object.keys(suspectInfo).length;i++){
       if(deadPeople.every(x => Object.values(suspectInfo)[i].includes(x)))
        console.log(`Killer: ${Object.keys(suspectInfo)[i]}`);
    }

}
getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    }, ['Lucas', 'Bill']
); 
getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
); // Killer Megan

// console.log(Object.keys(obj).length);
