const { MongoClient } = require("mongodb");

const uri ="mongodb+srv://zayana_user:accacc1212@zayana-cluster.azzb1ki.mongodb.net/zayana?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
    const db = client.db("zayana"); // اسم الداتابيس
    const collections = await db.listCollections().toArray();
    console.log("📂 Collections:", collections.map(c => c.name));
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await client.close();
  }
}

run();
