import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});
async function insertUserAndAddress(
    username:string,
    email:string,
    password:string,
    city:string,
    pincode:string,
    country:string,
    street:string
){
try{
    await client.connect();

    //start transction
    await client.query('BEGIN');

    //insert user
    const insertUserText=`
    INSERT INTO user(username , email , password)
    VALUES($1,$2,$3)
    RETURNING id`;

    const userRes= await client.query(insertUserText,[username,password,email])
    const userId = userRes.rows[0].id;

// inset address using the returned userID
const insertUserAddress=`
INSERT INTO addresses(user_id, country,street,city,pincode)
VALUES($1,$2,$3,$4)`;

await client.query(insertUserAddress,[userId,country,pincode,street,city])


//Commit transtions

await client.query('COMMIT');
console.log('Userr and address insertd successfully')
}catch(err){
    await client.query('ROLLBACK');
    console.log('ERROR  during transction , rolled back',err)
    throw err
    
}finally{
await client.end()
}
}

// Example usage
insertUserAndAddress(
    'johndoe', 
    'john.doe@example.com', 
    'securepassword123', 
    'New York', 
    'USA', 
    '123 Broadway St', 
    '10001'
);