import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
// import { MongoClient } from 'mongodb';
import { db } from '@/utils/firebaseAdmin';

const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID!;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN!;
const whatsappFrom = 'whatsapp:+14155238886'; // Twilio sandbox number
const whatsappTo = 'whatsapp:+919511113578'; // Your personal number

const client = twilio(accountSid, authToken);

const mongoUri = process.env.MONGO_URI!;
if (!mongoUri) {
  throw new Error("❌ MONGO_URI is not defined in environment variables");
}

// const dbName = 'RealEstate';
// const collectionName = 'Project-Details';

// let cachedClient: MongoClient | null = null;


// async function connectToDatabase() {
//   if (cachedClient) return cachedClient;

//   console.log('Connecting to MongoDB...',mongoUri);

//   const client = new MongoClient(mongoUri);
//   await client.connect();
//   cachedClient = client;
//   return client;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, email, project } = req.body;

  if (!name || !phone || !email || !project) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const message = `📩 New Lead from Website:${project}\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}`;

  try {
    await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      body: message,
    });


    await db.collection('leads').add({
      name,
      phone,
      email,
      project,
      createdAt: new Date(),
    });

    // const mongoClient = await connectToDatabase();
    // const db = mongoClient.db(dbName);
    // const collection = db.collection(collectionName);

    // const lead = {
    //   name,
    //   phone,
    //   email,
    //   project,
    //   timestamp: new Date(),
    // };

    // await collection.insertOne(lead);

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage =
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message: string }).message
        : 'Unknown error';
    return res.status(500).json({ success: false, error: errorMessage });
  }
}
