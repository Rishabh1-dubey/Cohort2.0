import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");
  console.log("response is" + JSON.stringify(response.data));
  return response.data;
}

export default async function User() {
  const data = await getUserDetails();

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
