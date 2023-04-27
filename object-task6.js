const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Nicholas" },
    { id: 3, name: "Angelina" },
    { id: 4, name: "Vitaly" },
];
let newArr =[];
let chng;
for (let index = 0; index < people.length; index++){
    chng = ordersArr[index];
    newArr[Object.values(people[index])['id']] = people[chng];
    // console.log();
}
// let chng;
// for (let index = 0; index < people.length; index++) {
//      chng = ordersArr[index];
//     newArr[index] = people[chng];
//     console.log(chng);
    
// }
console.log(newArr);