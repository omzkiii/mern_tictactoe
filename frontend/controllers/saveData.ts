export type Match = {
  player1: { name: string; score: number };
  player2: { name: string; score: number };
  winner: string;
};
export async function saveData(match: Match) {
  console.log(match);

  const response = await fetch("http://localhost:5000/saveMatch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(match),
  });

  const data = await response.json();
  console.log(data);
}
