levelup = [`CSS`, `JavaScript`, `React`, `Node JS`];
this.level = 1;
// console.log(this.level);
const student = {
    stack:[`HTML`],
    level: this.level,
    improveLevel(){
        this.level = level+1;
        // this.stack = stack;
        for (let index = 0; index < levelup.length; index++) {
            if(this.level-1==index) this.stack.push(levelup[0]);
            
        }
        return this;

    }
};
console.log(student);
console.log(student);
