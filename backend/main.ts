import express, { Request, Response } from "express";
import cors from "cors";
import { getMatches, saveMatch } from "./controllers/match.js";
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];
app.use(express.json());

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`CORS: Origin ${origin} not allowed`));
    },
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
