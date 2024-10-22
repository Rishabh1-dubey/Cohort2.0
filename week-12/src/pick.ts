interface UserInfo{
    id:number
    name:string,
    email:string,
    password:string,
    age:number
}

type  updateProps=  Pick <UserInfo, 'name'| 'email'|'age'>

function updateUser (updateProps:UserInfo){
    
}