import { connectDB } from "./db.js";

type Match = {
  player1: { name: string; score: number };
  player2: { name: string; score: number };
  winner: string;
  time: string;
};

export async function saveMatch(match: Match) {
  try {
    const db = await connectDB();
    const matches = db.collection("matches");
    const result = await matches.insertOne(match);
    console.log("Match saved: ", result);
  } catch (error) {
    console.log("Error saving match: ", error);
  }
}

export async function getMatches() {
  try {
    const db = await connectDB();
    const matches = db.collection("matches");
    const matchList = await matches.find({}).toArray();
    console.log("Matches: ", matchList);
    return matchList;
  } catch (error) {
    console.log("Error getting matches: ", error);
  }
}
