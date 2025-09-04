import { MongoClient } from "mongodb";
const url = "mongodb://mongo:mypass@db:27017";
export const client = new MongoClient(url);
