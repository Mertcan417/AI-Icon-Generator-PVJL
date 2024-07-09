import bcrypt from "bcrypt";
import { query } from "../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  try {
    const result = await query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (result.length === 0) {
      return res.status(401).json({ message: "Username/password incorrect." });
    }

    const user = result[0];
    const hashedPasswordFromDB = user.password;

    const passwordMatch = await bcrypt.compare(password, hashedPasswordFromDB);

    if (passwordMatch) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Username/password incorrect." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
}
