interface User{
    firstName:string,
    lastName:string,
    age:number
}

function Islegal(user:User){
    if(user.age>19)
        return true;
    else  {return false };
}

function greet( user:User):void{
    console.log("the age of the can be" +user.firstName)
}

  Islegal({
    firstName:"Rishabh0",
    lastName:"dubey",
    age:19
})

  