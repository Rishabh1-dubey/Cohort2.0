
"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {

    const[data, setData]=useState({
        name:"",
        email:""
    })
    const [loading,setLoading]=useState(false)
  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((res) => {
        setData(res.data)
      });
  }, []);

  if(loading) { 
    return(
        "ha ha load horha hai"
    ) 
  }
  return <div>
    {data.name} {""}
    {data.email}
  </div>;
}