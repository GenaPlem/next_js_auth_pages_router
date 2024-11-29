import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 7 characters long.",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
}
