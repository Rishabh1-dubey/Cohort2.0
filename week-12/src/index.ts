interface User{
    name:string,
    age:number
}

function sumOfTwoNum(user1:User , user2:User){
    return user1.age + user2.name
}
const age = sumOfTwoNum({name:"tony", age:44},{name:"Rishabh" , age:45})
console.log(age);