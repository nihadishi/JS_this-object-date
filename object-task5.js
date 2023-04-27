function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
    prize: '$10,000',
}
 
const winnerApplicants = {
    1: {
        name: 'Max',
        age: 25
    },
    2: {
        name: 'Svetlana',
        age: 20
    },
    3: {
        name: 'Catherine',
        age: 35
    },
    4: {
        name: 'asadaf',
        age: 35
    },
    5: {
        name: 'Catsdgsherine',
        age: 35
    },
    6: {
        name: 'sdgdfhgsv',
        age: 35
    },
    7: {
        name: 'Cathjhgfdserine',
        age: 35
    },
    8: {
        name: 'qwerqrw',
        age: 35
    },
}
 function getWinner(winnerApplicants,todaysWinner){
    let randomNumb = getRandomNumberInRange(1, Object.keys(winnerApplicants).length+1);
    console.log(randomNumb);
    // winnerApplicants[randomNumb].todaysWinner = todaysWinner;
    console.log(winnerApplicants[randomNumb]);

 }
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log(todaysWinner,resultWinner); // { prize: '$10,000', name: 'Maxim', age: 25 }


