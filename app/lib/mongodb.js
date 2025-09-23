import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL; // Add this to your .env.local file
const options = {};

let client;
let clientPromise;

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  clientPromise.then(() => console.log("✅ Connected to MongoDB")).catch(err => console.error("❌ MongoDB connection error:", err));

}

export default clientPromise;
