"use client";
import { useContext, useState } from "react";
import { PlayersContext } from "../layout";
import { checkWin } from "@/controllers/checkWin";
import Floating from "@/components/Floating";
type PlayerStats = {
  name: string;
  symbol: string;
  score: number;
};

export default function Game() {
  // const playerContext = useContext(PlayersContext);
  // if (!playerContext) {
  //   throw new Error("useContext must be used inside PlayersProvider");
  // }
  // const { players, setPlayers } = playerContext;
  const [players, setPlayers] = useState(["paul", "polycarp"]);
  const [player1, setPlayer1] = useState<PlayerStats>({
    name: players[0],
    symbol: "X",
    score: 0,
  });
  const [player2, setPlayer2] = useState<PlayerStats>({
    name: players[1],
    symbol: "0",
    score: 0,
  });
  const [turn, setTurn] = useState<number>(0);
  const [activePlayer, setActivePlayer] = useState<PlayerStats>(player1);
  const [win, setWin] = useState<string | null>();
  const empty_board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [board, setBoard] = useState<string[][]>(empty_board);
  function resetGame() {
    setTimeout(() => {
      setBoard(empty_board);
    }, 2);
    setTurn(0);
  }
  function handleMove(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    row: number,
    col: number,
  ) {
    if (activePlayer.symbol === player1.symbol) {
      setActivePlayer(player2);
    } else {
      setActivePlayer(player1);
    }
    e.currentTarget.disabled = true;
    board[row][col] = activePlayer.symbol;
    setTurn((prev) => prev + 1);
    setBoard(board);

    if (checkWin(board, activePlayer.symbol)) {
      setTimeout(() => {
        setBoard(empty_board);
      }, 2);
      if (activePlayer.symbol === player1.symbol) {
        setPlayer1((prev) => ({ ...prev, score: prev.score + 1 }));
        setWin(player1.name);
      } else {
        setPlayer2((prev) => ({ ...prev, score: prev.score + 1 }));
        setWin(player2.name);
      }
      resetGame();
      return;
    }

    if (turn >= 8) {
      setWin("draw");
      resetGame();
    }
  }
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center font-sans p-6 transition-colors duration-700 ${
        activePlayer.symbol === "X"
          ? "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500"
          : "bg-gradient-to-br from-blue-200 via-cyan-500 to-sky-700"
      }`}
    >
      <div className="flex flex-row gap-16 items-center justify-center p-8">
        <div
          className="relative bg-gradient-to-br from-fuchsia-500 via-pink-400 to-orange-400 
                  px-8 py-6 rounded-2xl border-4 border-white/70 shadow-[0_0_30px_rgba(255,0,150,0.6)] 
                  text-center w-40 md:w-56 animate-bounce-slow"
        >
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full blur-lg opacity-70 animate-pulse"></div>
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow">
            {player1.name}
          </h3>
          <p className="text-4xl md:text-5xl font-black text-white drop-shadow-lg mt-2">
            {player1.score}
          </p>
        </div>
        <div className="text-3xl md:text-5xl font-extrabold text-white px-4 animate-pulse">
          VS
        </div>
        <div
          className="relative bg-gradient-to-br from-indigo-500 via-blue-400 to-cyan-300 
                  px-8 py-6 rounded-2xl border-4 border-white/70 shadow-[0_0_30px_rgba(0,150,255,0.6)] 
                  text-center w-40 md:w-56 animate-bounce-slow delay-150"
        >
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-400 rounded-full blur-lg opacity-70 animate-ping"></div>
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow">
            {player2.name}
          </h3>
          <p className="text-4xl md:text-5xl font-black text-white drop-shadow-lg mt-2">
            {player2.score}
          </p>
        </div>
      </div>
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div
          id={`row${rowIndex + 1}`}
          key={rowIndex}
          className="flex justify-center mb-4"
        >
          {Array.from({ length: 3 }).map((_, colIndex) => (
            <button
              key={`${rowIndex},${colIndex}`}
              className="m-2 w-24 h-24 md:w-32 md:h-32 rounded-xl 
                         bg-gradient-to-tr from-red-400 via-orange-400 to-yellow-300
                         text-3xl font-bold text-white shadow-lg shadow-black/50
                         hover:scale-110 hover:rotate-3 transition-all duration-300
                         active:scale-95 active:rotate-0
                         disabled:bg-gray-400 
                         disabled:text-gray-700 
                         disabled:shadow-inner 
                         disabled:cursor-not-allowed
                         disabled:scale-100 
                         disabled:rotate-0 "
              disabled={board[rowIndex][colIndex] !== ""}
              onClick={(e) => {
                handleMove(e, rowIndex, colIndex);
              }}
            >
              {board[rowIndex][colIndex]}
            </button>
          ))}
        </div>
      ))}

      <p className="mt-8 text-lg md:text-2xl font-bold text-white uppercase animate-pulse">
        {`${activePlayer.name}'s turn`}
      </p>
      <Floating win={win ?? null} setWin={setWin} />
    </div>
  );
}
