import { query } from "../lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      const userCheck = await query("SELECT * FROM users WHERE username = $1", [
        username,
      ]);
      if (userCheck.length > 0) {
        return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await query(
        "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
        [username, hashedPassword]
      );

      return res
        .status(200)
        .json({ message: "User signed up successfully", user: result[0] });
    } catch (error) {
      console.log("THE ERROR:   " + error);
      console.error("Error inserting user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
