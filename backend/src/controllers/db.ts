import { MongoClient } from "mongodb";

import dotenv from "dotenv";
dotenv.config();
const url = process.env.DB ?? "";
export const client = new MongoClient(url);

export async function connectDB() {
  await client.connect();
  const result = await client.db("admin").command({ ping: 1 });
  console.log("Ping result:", result);
  return client.db("db");
}
