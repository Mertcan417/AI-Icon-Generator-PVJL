// pages/api/proxy.js

export default async function handler(req, res) {
    const { method, body } = req;
  
    if (method === 'POST') {
      const apiUrl = 'https://api.limewire.com/api/image/generation';
  
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer lmwr_sk_0petDyN70v_1qzSOXkcWksba59peGWzp4zWVjh2B9SZtnTze`, // Use environment variable for API key
            'Accept': 'application/json',
            'X-Api-Version': 'v1',
          },
          body: JSON.stringify(body),
        });
  
        const data = await response.json();
        res.status(response.status).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  