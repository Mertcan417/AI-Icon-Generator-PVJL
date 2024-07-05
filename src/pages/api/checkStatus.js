// checkStatus.js
import { jobQueue } from './jobQueue'; // Importing jobQueue from shared module

export default function handler(req, res) {
  const { method, query } = req;

  if (method === 'GET') {
    const { jobId } = query;
    const job = jobQueue[jobId];
    console.log(job);

    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
