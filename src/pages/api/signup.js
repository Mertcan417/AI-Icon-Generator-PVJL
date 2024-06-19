// pages/api/signup.js
// import { query } from '../utils/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
      // Check if the username already exists
      // const userCheck = await query('SELECT * FROM users WHERE username = $1', [username]);
      if (userCheck.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into the database
      // const result = await query(
        // 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
        // [username, hashedPassword]
      // );

      return res.status(200).json({ message: 'User signed up successfully', user: result[0] });
    } catch (error) {
      console.log("THE ERROR:   "+ error);
      console.error('Error inserting user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
