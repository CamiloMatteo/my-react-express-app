import { MongoClient } from 'mongodb';
import { equal } from 'assert';

const url = `mongodb://localhost:27017/myorganizer`;
let db = null;

export async function connectDB() {
  if (db) return db;

  let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  db = client.db();
  console.info("db -->", db);
  return db;
}

// connectDB();
