// write a basic express biolerplate code
//with express.json middleware

const express = require("express");
const { createTodo } = require("/type");
const { updatTodo } = require("./type");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrrong input to the user",
    });
    return;
  }
  //put it on mongdb
});

app.get("/todos", (req, res) => {
  res.send("this is todo server");
});

app.put("/completed", (req, res) => {
  const updatePaylodd = req.body;
  const parsePayload = updatTodo.safeParse(updatePaylodd);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
  }
});

app.listen(3000);
