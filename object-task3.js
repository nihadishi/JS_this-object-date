function handleObjects(obj,key1,action){
    if(action=='get'){
        return Object.values(obj);
     }
    else if(action=='delete'){
       delete obj[key1];
    }
    else if(action=='add'){
        obj.key1 = '';
     }
     return obj;
    
    
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}
 
let result1 = handleObjects(student, 'programmingLanguage', 'delete');
console.log('result', result1);
let result2 = handleObjects(student, 'programmingLanguage', 'add');
console.log('result', result2);
let result3 = handleObjects(student, 'programmingLanguage', 'get');
console.log('result', result3);
