import { useEffect, useState } from "react";
import axios from "axios";

import React from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
const[inputValue,setinputValue]= useState(1);

let count =0;
for(let i =1; i<=inputValue; i++){
  count =count +i
}
  function Counterbtn() {
    setCounter(counter +1);
  }
  return (
    <div>
      <input type="text" onChange={function(e){
        setinputValue(e.target.value)
      }}  placeholder="enter you number" />
      <br></br>
      <p>sum is {inputValue} is {count}</p>
      <button onClick={() => Counterbtn()}> Counter is {counter} </button>
    </div>
  );
};

export default App;
