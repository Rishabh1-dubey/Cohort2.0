import axios from "axios";
import Image from "next/image";

export default function Home() {
 

async function userDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
  
}

  return (
    <div >
      hii there!
      
    </div>
  );
}
