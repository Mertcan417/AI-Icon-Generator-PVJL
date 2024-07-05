import { v4 as uuidv4 } from 'uuid';

let jobQueue = {};

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === 'POST') {
    const jobId = uuidv4(); // Generate a unique job ID
    jobQueue[jobId] = { status: 'pending', result: null };

    // Simulate a long-running process with a delay
    setTimeout(async () => {
      try {
        const apiUrl = 'https://api.limewire.com/api/image/generation';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`, // Use environment variable for API key
            'Accept': 'application/json',
            'X-Api-Version': 'v1',
          },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        jobQueue[jobId] = { status: 'completed', result: data };
      } catch (error) {
        jobQueue[jobId] = { status: 'failed', result: null };
      }
    }, 2000); // Simulate a delay of 2 seconds (adjust as needed)

    res.status(200).json({ jobId });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
