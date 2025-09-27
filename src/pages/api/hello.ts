import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID!;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN!;
const whatsappFrom = 'whatsapp:+14155238886'; // Twilio sandbox number
const whatsappTo = 'whatsapp:+919511113578'; // Your personal number

const client = twilio(accountSid, authToken);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const message = `📩 New Lead from Website:Neelkanth Dreamz\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}`;

  try {
    await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      body: message,
    });

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
    console.error('Twilio Error:', error);
    const errorMessage =
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message: string }).message
        : 'Unknown error';
    return res.status(500).json({ success: false, error: errorMessage });
  }
}
