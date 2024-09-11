import { useEffect, useState } from "react";
import axios from "axios";

import React from 'react'

const App = () => {
  return (
    <div>
      <Todo id={3}/>
    </div>
  )
}

function Todo({id}){
  const [todo , settodo]= useState({});
   
  //implement effect here
  useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/todo?id="+ id).then(Response=>{
  settodo(Response.data.todo)
})
  },[]) 


  return<div>
    <h1>{todo.title}</h1>
  </div>
}

export default App
