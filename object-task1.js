const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10,
    }, 
    {
       username: 'Lucy',
        status: 'offline',
        lastActivity: 22,
    }, 
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104,
    }

]
let j=0;
let onlineUsers = [];
for(i in users){
if(users[i].status == 'online'){
    onlineUsers[j++] = users[i].username;
}
}
console.log(`The following users are currently online: ${onlineUsers}`);