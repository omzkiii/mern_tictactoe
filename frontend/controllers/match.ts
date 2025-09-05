import { PlayerStats } from "@/app/game/page";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export type Match = {
  player1: { name: string; score: number };
  player2: { name: string; score: number };
  winner: string;
  time: string;
};
export async function saveData(match: Match) {
  const response = await fetch(`${apiUrl}/saveMatch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(match),
  });

  const data = await response.json();
  console.log(data);
}
export async function getMatches() {
  const response = await fetch(`${apiUrl}/getMatches`, {
    method: "GET",
  });

  const data = await response.json();
  console.log(data);
  return data;
}

export function save(player1: PlayerStats, player2: PlayerStats): Match {
  let winner;
  if (player1.score === player2.score) {
    winner = "draw";
  } else if (player1.score > player2.score) {
    winner = player1.name;
  } else {
    winner = player2.name;
  }

  const now = new Date();
  const matchData: Match = {
    player1: {
      name: player1.name,
      score: player1.score,
    },
    player2: {
      name: player2.name,
      score: player2.score,
    },
    winner: winner,
    time: now.toLocaleString(),
  };
  return matchData;
}
