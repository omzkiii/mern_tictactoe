import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { PlayerStats } from "@/app/game/page";
import { save, saveData } from "@/controllers/match";
type FloatingProps = {
  win: string | null;
  setWin: Dispatch<SetStateAction<string | null | undefined>>;
  player1: PlayerStats;
  player2: PlayerStats;
};

export default function Floating({
  win,
  setWin,
  player1,
  player2,
}: FloatingProps) {
  const router = useRouter();
  return (
    <div>
      {win && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div
            className="relative bg-gradient-to-br from-fuchsia-500 via-rose-400 to-amber-300 
                      rounded-3xl shadow-[0_0_60px_rgba(255,0,150,0.8)] 
                      p-16 w-[26rem] text-center border-4 border-white/80 animate-bounce-in"
          >
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-70 animate-ping"></div>

            <h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase
                       text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)] mb-6"
            >
              {win === "draw" ? "DRAW!" : `${win} WINS!`}
            </h1>

            <p className="text-lg font-semibold text-white/90 mb-8 italic">
              {win === "draw"
                ? "Nobody takes the crown this time..."
                : `${win} reigns supreme this round!`}
            </p>

            <button
              onClick={() => setWin(null)}
              className="px-8 py-3 text-lg font-bold uppercase 
                     bg-emerald-400 text-neutral-700 rounded-full 
                     shadow-lg shadow-black/40 hover:scale-110 
                     active:scale-95 transition-all duration-300 
                     border-2 border-pink-100"
            >
              Continue →
            </button>
            <button
              onClick={async () => {
                setWin(null);
                router.push("/");
                await saveData(save(player1, player2));
              }}
              className="px-8 py-3 mt-5 text-lg font-bold uppercase 
                     bg-rose-400 text-neutral-700 rounded-full 
                     shadow-lg shadow-black/40 hover:scale-110 
                     active:scale-95 transition-all duration-300 
                     border-2 border-pink-100"
            >
              Stop
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
