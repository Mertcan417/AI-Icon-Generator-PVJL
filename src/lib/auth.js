// lib/auth.js
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';

export async function withAuth(req, res, handler) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return handler(req, res, session);
  } else {
    res.status(401).json({ error: 'You must be signed in to access this resource.' });
  }
}
