// write a basic express biolerplate code
//with express.json middleware

const express = require("express");


const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrrong input to the user",
    });
    return;
  }
  //put it on mongdb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false

  });
  res.json({
    msg: "todo crated",
  });
});

app.get("/todos", async (req, res) => {
   const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async(req, res) => {
  const updatePaylodd = req.body;
  const parsePayload = updateTodo.safeParse(updatePaylodd);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }

  await todo.update({
    _id:req.body.id
  },{
    completed:true
  })
  res.json({
    msg:"todo marked as completed"
  })
});

app.listen(3000);
