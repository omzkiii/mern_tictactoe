import { MongoClient } from "mongodb";
const url = "mongodb://mongo:mypass@db:27017";
export const client = new MongoClient(url);

export async function connectDB() {
  await client.connect();
  const result = await client.db("admin").command({ ping: 1 });
  console.log("Ping result:", result);
  return client.db("db");
}
