import clientPromise from '../../lib/mongodb';
import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'zayana');
    const collection = db.collection('Hero');

    const data = await collection
      .find({})
      .sort({ order: 1, _id: 1 })
      .toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching hero images from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch hero images' }, { status: 500 });
  }
}


