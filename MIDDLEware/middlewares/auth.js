
const adminAuth = (req,res,next)=>{

    console.log("adming path is ready to start");
    const token ="xyz";
    const isAdmin = token == "xyz"

if(!isAdmin){
res.status(401).json({
    message:"something went wrong"
})
}else{
next()
}
}


const userAuth =(req,res,next)=>{

    console.log("user path is ready to begin")
const token = "xyz";
const isAdmin =token ==="xyz"
if(!isAdmin){
    res.status(401).json({
        message:"something went wring with your user"
    })
    }else{
        next()
    }
}

module.exports={
    adminAuth,userAuth
}