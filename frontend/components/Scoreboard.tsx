import { PlayerStats } from "@/app/game/page";

type ScoreboardProps = {
  player1: PlayerStats;
  player2: PlayerStats;
};
export default function Scoreboard({ player1, player2 }: ScoreboardProps) {
  return (
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
      <div className="text-3xl md:text-5xl font-extrabold text-white px-4">
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
  );
}
