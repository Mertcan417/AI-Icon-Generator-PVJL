// pages/api/login.js

import bcrypt from 'bcrypt'; // Import bcrypt for hashing functions
// import { query } from '../utils/db'; // Adjust the path based on your project structure

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  try {
    // Example query to get hashed password from the database
    // const result = await query('SELECT * FROM users WHERE username = $1', [username]);

    if (result.length === 0) {
      // No user found with the provided username
      return res.status(401).json({ message: 'Username/password incorrect.' });
    }

    const user = result[0];
    const hashedPasswordFromDB = user.password; // Assuming your database column is named 'password'

    // Compare hashed password from DB with submitted password
    const passwordMatch = await bcrypt.compare(password, hashedPasswordFromDB);

    if (passwordMatch) {
      // Successful login
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Authentication failed
      return res.status(401).json({ message: 'Username/password incorrect.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
}
