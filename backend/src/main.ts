import express, { Request, Response } from "express";
import cors from "cors";
import { getMatches, saveMatch } from "./controllers/match.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    credentials: false,
  }),
);
app.get("/getMatches", async (req: Request, res: Response) => {
  const matches = await getMatches();
  return res.json(matches);
});
app.post("/saveMatch", (req: Request, res: Response) => {
  const match = req.body;
  saveMatch(match);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
