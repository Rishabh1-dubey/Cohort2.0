import { z } from "zod";
import express from "express";

const app = express();
app.use(express.json()); //Middleware to parse json bodies

// Define the schmea the profiles
const profileUpdate = z.object({
  name: z.string().min(1, { message: "name cannot be empty" }),
  email: z.string().email({ message: "Invalid email " }),
  age: z.number().min(19, { message: "ages should be atleast 19 " }).optional(),
});

export type finalUserSchema= z.infer<typeof profileUpdate>// things to remember it is same like a pick
app.put("/user", (req, res) => {
  const result = profileUpdate.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ Error: result.error });
    return;
  }

  // Types of updatedBody is inferred
  const updatedBody = result.data;

  // update database here
  res.json({
    messgage: "user updated",
    updatedBody,
  });
});

app.listen(3000, () => console.log("server running on port 3000"));
