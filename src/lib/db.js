// utils/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,  // Ensure this is the correct host
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

export async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}
