const express = require("express");
const app = express();

const PORT = 7777;

app.get("/user",(req, res,next) => {
  console.log("request 2!");
//   res.send("hello broo i am response 2");
  next()
});
app.get("/user", (req, res, next) => {
  console.log("hello there i am middle ware");
//   next();
});

app.listen(PORT, () => {
  console.log(`server on running on ${PORT}`);
});
