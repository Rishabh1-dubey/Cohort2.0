const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://renio067778:5yNQqAwz95f46UbG@cluster0.gpp6k.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    tile:String,
    description:String,
    completed:Boolean
})
const todo= mongoose.model('todos', todoSchema);
module.exports={
    todo
}