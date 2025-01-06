const express = require("express");
const app = express();

const PORT = 7777;

const{adminAuth , userAuth} = require("../MIDDLEware/middlewares/auth")

//middleware

app.use("/admin",adminAuth);
app.use("/user", userAuth);


app.get("/user/login",(req,res)=>{
  res.send("no need to use middleware")
})

app.get("/admin/admindetails",adminAuth,(req,res)=>{
  res.send("adming chalu ho gya bhai balle balle !");
  console.log("server is running bro ")
})

app.get("/user/userdetails",userAuth,(req,res)=>{
  res.send("user bhi chalu ho gya bhai");
  console.log("server is running broooooo")
})

app.listen(PORT,()=>{
  console.log(`server is running on port no ${PORT}`)
})