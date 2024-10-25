import { PrismaClient } from "@prisma/client";
 const prisma = new PrismaClient();
   

 async function insertUser(username: string, password: string, firstname: string, lastname: string , email:string) {
    const user = await prisma.user.create({
        data: {
         username,
         password,
         firstname,
         lastname,
         email
        }
      })
      console.log(user)
 }


 insertUser("renio127","renio123","ram","hero","ishh@emailgit .com")
