import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const body = req.body;

    // Process the webhook payload
    console.log('Webhook received:', body);

    // Respond with a success status
    res.status(200).json({ message: 'Webhook received' });
  } else {
    // If the method is not POST, return a 405 (Method Not Allowed) error
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
