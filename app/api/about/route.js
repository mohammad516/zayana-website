import clientPromise from '../../lib/mongodb';
import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'zayana');
    const collection = db.collection('About'); // Collection for About images

    // Get all about images, sorted by order if available
    const data = await collection
      .find({})
      .sort({ order: 1, _id: 1 })
      .toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching about images from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch about images' }, { status: 500 });
  }
}

