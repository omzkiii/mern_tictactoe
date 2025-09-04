"use client";
import { useContext, useState } from "react";
import { PlayersContext } from "./layout";

export default function Home() {
  const playerContext = useContext(PlayersContext);
  if (!playerContext) {
    throw new Error("useContext must be used inside PlayersProvider");
  }
  const { players, setPlayers } = playerContext;
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function handleStart() {
    if (!player1 || !player2) {
      alert("Please enter names");
      return;
    }
    const newPlayers = [player1, player2];
    setPlayers(newPlayers);
  }
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen gap-6 bg-gradient-to-br from-cyan-300 to-rose-300">
      <div
        className="
        flex flex-col 
        gap-7
        p-24 rounded-2xl 
        bg-white/10 backdrop-blur-lg 
        border border-white/20 
        shadow-lg
        z-1"
      >
        {/* Player 1 */}
        <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg w-80 text-center">
          <label htmlFor="p1name" className="block text-lg font-semibold mb-2">
            Player 1
          </label>
          <input
            type="text"
            id="p1name"
            name="p1name"
            placeholder="Enter name..."
            className="w-full px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
        </div>

        {/* Player 2 */}
        <div className="bg-amber-500 text-white p-6 rounded-2xl shadow-lg w-80 text-center">
          <label htmlFor="p2name" className="block text-lg font-semibold mb-2">
            Player 2
          </label>
          <input
            type="text"
            id="p2name"
            name="p2name"
            placeholder="Enter name..."
            className="w-full px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300 text-black"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </div>
        <button
          className="px-6 py-3 rounded-xl font-semibold text-white 
               bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 
               shadow-lg hover:scale-105 hover:shadow-xl 
               transition-all duration-300"
          onClick={() => {
            handleStart();
          }}
        >
          Start Game
        </button>
      </div>
      <div className="absolute left-[5vw] rounded-full bg-amber-200 z-0 animate-[slideDown_17s_ease-in-out_infinite] blur-sm h-25 w-25"></div>
      <div className="absolute left-[10vw] rounded-full bg-amber-100 z-0 animate-[slideDown_32s_ease-in-out_infinite] blur-sm h-32 w-32"></div>
      <div className="absolute left-[20vw] rounded-full bg-amber-100 z-0 animate-[slideDown_30s_ease-in-out_infinite] blur-lg h-12 w-12"></div>
      <div className="absolute left-[30vw] rounded-full bg-amber-100 z-0 animate-[slideDown_20s_ease-in-out_infinite] blur-sm h-23 w-23"></div>
      <div className="absolute left-[40vw] rounded-full bg-amber-100 z-0 animate-[slideDown_15s_ease-in-out_infinite] blur-sm h-17 w-17"></div>
      <div className="absolute left-[45vw] rounded-full bg-amber-100 z-0 animate-[slideDown_31s_ease-in-out_infinite] blur-sm h-17 w-17"></div>
      <div className="absolute left-[45vw] rounded-full bg-amber-100 z-0 animate-[slideDown_11s_ease-in-out_infinite] blur-sm h-17 w-17"></div>
      <div className="absolute left-[50vw] rounded-full bg-amber-100 z-0 animate-[slideDown_19s_ease-in-out_infinite] blur-md h-24 w-24"></div>
      <div className="absolute left-[50vw] rounded-full bg-amber-100 z-0 animate-[slideDown_30s_ease-in-out_infinite] blur-md h-24 w-24"></div>
      <div className="absolute left-[55vw] rounded-full bg-amber-100 z-0 animate-[slideDown_20s_ease-in-out_infinite] blur-sm h-23 w-23"></div>
      <div className="absolute left-[55vw] rounded-full bg-amber-100 z-0 animate-[slideDown_9s_ease-in-out_infinite] blur-sm h-23 w-23"></div>
      <div className="absolute left-[60vw] rounded-full bg-amber-100 z-0 animate-[slideDown_24s_ease-in-out_infinite] blur-xl h-40 w-40"></div>
      <div className="absolute left-[70vw] rounded-full bg-amber-100 z-0 animate-[slideDown_26s_ease-in-out_infinite] blur-lg h-27 w-27"></div>
      <div className="absolute left-[80vw] rounded-full bg-amber-100 z-0 animate-[slideDown_28s_ease-in-out_infinite] blur-sm h-29 w-29"></div>
      <div className="absolute left-[90vw] rounded-full bg-amber-100 z-0 animate-[slideDown_35s_ease-in-out_infinite] blur-md h-21 w-21"></div>
      <div className="absolute left-[95vw] rounded-full bg-amber-100 z-0 animate-[slideDown_17s_ease-in-out_infinite] blur-lg h-19 w-19"></div>
    </div>
  );
}
