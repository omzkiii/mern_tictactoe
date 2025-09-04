"use client";
import { useContext, useState } from "react";
import { PlayersContext } from "./layout";
import { useRouter } from "next/navigation";
import Matches from "@/components/Matches";

export default function Home() {
  const router = useRouter();
  const playerContext = useContext(PlayersContext);
  if (!playerContext) {
    throw new Error("useContext must be used inside PlayersProvider");
  }
  const { players, setPlayers } = playerContext;
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [matches, setMatches] = useState(false);

  function handleStart() {
    if (!player1 || !player2) {
      alert("Please enter names (˶ᵔ ᵕ ᵔ˶)");
      return;
    }
    if (player1.length > 12 || player2.length > 12) {
      alert("Please enter shorter name ≽ ^ • ⩊ • ^ ≼");
      return;
    }
    const newPlayers = [player1, player2];
    setPlayers(newPlayers);
    router.push("/game");
  }
  return (
    <div
      className="relative font-sans flex flex-col items-center justify-center min-h-screen gap-6 
                bg-gradient-to-br from-cyan-500 via-purple-500 to-rose-700 overflow-hidden
                transition-all duration-2000 ease-in-out opacity-0 animate-fadeIn "
    >
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
        <div
          className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-400 
                text-white p-8 rounded-3xl shadow-[0_0_40px_rgba(0,150,255,0.7)] 
                w-80 text-center border-4 border-white/80 animate-bounce-slow"
        >
          <label
            htmlFor="p1name"
            className="block text-2xl font-extrabold mb-4 tracking-wide drop-shadow"
          >
            Player 1
          </label>

          <input
            type="text"
            id="p1name"
            name="p1name"
            placeholder="Enter name..."
            className="w-full px-5 py-3 rounded-xl border-2 border-white/60 
               bg-white/90 text-black font-semibold placeholder-gray-500 
               focus:outline-none focus:ring-4 focus:ring-cyan-300 
               shadow-inner transition"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
        </div>

        <div
          className="relative bg-gradient-to-br from-amber-500 via-orange-400 to-red-400 
                text-white p-8 rounded-3xl shadow-[0_0_40px_rgba(255,120,0,0.7)] 
                w-80 text-center border-4 border-white/80 animate-bounce-slow delay-150"
        >
          <label
            htmlFor="p2name"
            className="block text-2xl font-extrabold mb-4 tracking-wide drop-shadow"
          >
            Player 2
          </label>

          <input
            type="text"
            id="p2name"
            name="p2name"
            placeholder="Enter name..."
            className="w-full px-5 py-3 rounded-xl border-2 border-white/60 
               bg-white/90 text-black font-semibold placeholder-gray-500 
               focus:outline-none focus:ring-4 focus:ring-amber-300 
               shadow-inner transition"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </div>
        <button
          onClick={handleStart}
          className="relative px-12 py-5 rounded-3xl font-extrabold tracking-widest text-white uppercase
             bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600
             shadow-[0_0_30px_rgba(147,51,234,0.9),0_0_60px_rgba(236,72,153,0.7)]
             transition-all duration-500 ease-in-out
             overflow-hidden group
             hover:scale-110 hover:shadow-[0_0_50px_rgba(147,51,234,1),0_0_100px_rgba(236,72,153,1)]"
        >
          <span
            className="absolute top-0 left-[-150%] w-[200%] h-full 
                   bg-gradient-to-r from-transparent via-white/40 to-transparent 
                   rotate-12 
                   group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"
          ></span>

          <span
            className="relative z-10 text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
                   group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
          >
            Start Game
          </span>
        </button>
        <button
          onClick={() => {
            setMatches(true);
          }}
          className="py-3 rounded-2xl font-bold text-white text-md
                   bg-gradient-to-r from-amber-400 via-red-500 to-pink-500
                   shadow-lg shadow-pink-900/40 hover:scale-110 hover:shadow-2xl
                   transition-all duration-300"
        >
          Matches
        </button>
      </div>
      <div className="left-[5vw] particle animate-[slideDown_17s_ease-in-out_infinite]  h-25 w-25">
        X
      </div>
      <div className="left-[10vw] particle  animate-[slideDown_32s_ease-in-out_infinite]  h-32 w-32">
        O
      </div>
      <div className="left-[20vw] particle  animate-[slideDown_30s_ease-in-out_infinite]  h-12 w-12">
        X
      </div>
      <div className="left-[30vw] particle  animate-[slideDown_20s_ease-in-out_infinite]  h-23 w-23">
        O
      </div>
      <div className="left-[40vw] particle  animate-[slideDown_15s_ease-in-out_infinite]  h-17 w-17">
        X
      </div>
      <div className="left-[45vw] particle  animate-[slideDown_31s_ease-in-out_infinite]  h-17 w-17">
        O
      </div>
      {/* <div className="left-[45vw] particle  animate-[slideDown_11s_ease-in-out_infinite]  h-17 w-17"> */}
      {/*   X */}
      {/* </div> */}
      {/* <div className="left-[50vw] particle  animate-[slideDown_19s_ease-in-out_infinite]  h-24 w-24"> */}
      {/*   O */}
      {/* </div> */}
      <div className="left-[50vw] particle  animate-[slideDown_30s_ease-in-out_infinite]  h-24 w-24">
        X
      </div>
      <div className="left-[55vw] particle  animate-[slideDown_20s_ease-in-out_infinite]  h-23 w-23">
        O
      </div>
      {/* <div className="left-[55vw] particle  animate-[slideDown_9s_ease-in-out_infinite]   h-23 w-23"> */}
      {/*   X */}
      {/* </div> */}
      <div className="left-[60vw] particle  animate-[slideDown_24s_ease-in-out_infinite]  h-40 w-40">
        O
      </div>
      <div className="left-[70vw] particle  animate-[slideDown_26s_ease-in-out_infinite]  h-27 w-27">
        X
      </div>
      <div className="left-[80vw] particle  animate-[slideDown_28s_ease-in-out_infinite]  h-29 w-29">
        O
      </div>
      <div className="left-[90vw] particle  animate-[slideDown_35s_ease-in-out_infinite]  h-21 w-21">
        X
      </div>
      <div className="left-[95vw] particle  animate-[slideDown_17s_ease-in-out_infinite]  h-19 w-19">
        O
      </div>

      {matches ? <Matches setMatches={setMatches} /> : null}
    </div>
  );
}
