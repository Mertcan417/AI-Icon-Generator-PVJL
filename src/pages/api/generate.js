// // pages/api/proxy.js

// export default async function handler(req, res) {
//   const { method, body } = req;
  
//   if (method === 'POST') {
//       req.setTimout(30000);
//       const apiUrl = 'https://api.limewire.com/api/image/generation';
  
//       try {
//         const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${process.env.API_KEY}`, // Use environment variable for API key
//             'Accept': 'application/json',
//             'X-Api-Version': 'v1',
//           },
//           body: JSON.stringify(body),
//         });
  
//         const data = await response.json();
//         res.status(response.status).json(data);
//       } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
//     } else {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//     }
// }
  
// pages/api/proxy.js

export default async function handler(req, res) {
  const { method, body } = req;
  
  if (method === 'POST') {
    const apiUrl = 'https://api.limewire.com/api/image/generation';
    const timeout = 30000; // Timeout duration in milliseconds
    const maxRetries = 3;  // Maximum number of retries

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchWithTimeout = async () => {
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`, // Use environment variable for API key
            'Accept': 'application/json',
            'X-Api-Version': 'v1',
          },
          body: JSON.stringify(body),
          signal,
        });

        clearTimeout(timeoutId); // Clear the timeout if the request completes in time

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        }
        throw error;
      }
    };

    const fetchWithRetry = async (retries) => {
      try {
        return await fetchWithTimeout();
      } catch (error) {
        if (retries > 0) {
          console.log(`Retrying... (${maxRetries - retries + 1}/${maxRetries})`);
          return await fetchWithRetry(retries - 1);
        } else {
          throw error;
        }
      }
    };

    try {
      const data = await fetchWithRetry(maxRetries);
      res.status(200).json(data);
    } catch (error) {
      if (error.message === 'Request timed out') {
        res.status(408).json({ error: 'Request timed out' }); // 408 Request Timeout
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
