import { jobQueue } from './jobQueue';

export default function handler(req, res) {
  const { method, query } = req;

  if (method === 'GET') {
    const { jobId } = query;

    const job = jobQueue[jobId];
    if (job) {
      res.status(200).json(job);
    } else {
      console.error("Job not found:", jobId); // Log if job is not found
      res.status(404).json({ error: 'Job not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
