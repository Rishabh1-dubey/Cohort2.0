// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function InsertIntoTable(
  username: string,
  password: string,
  email: string
) {
  try {
    await client.connect();
    const result = await client.query(
        `INSERT INTO users (email) VALUES ($1)`,
      [username, password, email]
    );
    console.log(result);
  } catch (err) {
    console.error("Error inserting user:", err);
  } finally {
    await client.end();
  }
}


//just check nothing more

InsertIntoTable('user5@example.com',"rishbah","123edf").catch(console.error);

//completed
