// utils/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: "postgres",
  host: "localhost",  // Ensure this is the correct host
  database: "image-generator",
  password: "pieter12",
  port: 5432,
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
