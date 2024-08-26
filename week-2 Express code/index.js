// const express = require("express");
// const app= express();


// function sum(n){
//     let ans=0;
//     for(let i=0; i<=n; i++ ){
//         ans= ans+i;
//     }
//     return ans;
// }


// app.get("/",function(req,res){
//     const n=req.query.n;
//     const ans= sum(n);
//     res.send("hii there this is my code after so many time and your ans is "+ ans)
// })

// app.listen(3000);



// const express = require("express")
// const app= express();
// const users=[{
//     name:"John",
//     kidney:[{
//         healthy:false
//     }]
// }]
//     app.use(express.json());

//     //get functionlity
//     app.get("/",function(req,res){
//         const johnkidney=users[0].kidney;
//         const numberkidney= johnkidney.length;
//         let NumberOfHealthKidney=0;
//         for(let i=0; i<johnkidney; i++){
//             if(johnkidney[i].healthy){
//                 NumberOfHealthKidney= NumberOfHealthKidney + 1;
//             }
//         }
//         const numberOfunHealthkidney= numberkidney- NumberOfHealthKidney;
//         res.json({
//             numberOfunHealthkidney,
//             numberkidney,NumberOfHealthKidney
//         })
//     })


//     app.post("/",function(req,res){
//         const isHealthy=req.body.isHealthy
//         users[0].kidney.push({
//             healthy:isHealthy
//         })
//         res.json({ 
//             msg:"done"
//         })
//     })
//     app.listen(3000);


const express= require("express");
const app = express();

app.get("/", (req,res)=>{
 res.send("this is normal server")
})

app.get("/about", (req,res)=>{
    return res.send("this is about us server")
})


app.listen(3000, function(){
    console.log("server has been  stated ........")
})
