"use client";
import { getMatches } from "@/controllers/match";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export type Match = {
  _id?: string;
  player1: { name: string; score: number };
  player2: { name: string; score: number };
  winner: string | null;
  time: string;
};

type MatchesProps = {
  setMatches: Dispatch<SetStateAction<boolean>>;
};
export default function Matches({ setMatches }: MatchesProps) {
  const [matchList, setMatchList] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getMatches();
        setMatchList(data);
      } catch (error) {
        console.error("Failed to fetch matches", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);
  function onClose() {
    setMatches(false);
  }

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div
          className="relative z-10 w-full max-w-4xl rounded-3xl p-6 md:p-8
                      bg-gradient-to-br from-[#0f172a]/80 via-[#6d28d9]/40 to-[#ff0066]/30
                      border-2 border-white/10 shadow-[0_20px_60px_rgba(13,12,84,0.6)]
                      overflow-hidden"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                Matches
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Recent battles — who reigned supreme?
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                aria-label="close"
                className="relative inline-flex items-center justify-center px-3 py-2 rounded-xl
                          bg-white/10 backdrop-blur text-white hover:bg-white/20 transition"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y pr-2">
            {isLoading ? (
              <div className="col-span-full flex flex-col items-center justify-center p-8 animate-pulse">
                <p className="text-white text-lg md:text-xl font-bold uppercase tracking-wider animate-bounce">
                  Loading matches...
                </p>
              </div>
            ) : matchList.length === 0 ? (
              <div className="col-span-full flex items-center justify-center p-8">
                <div className="text-center text-white/80">
                  <div className="font-semibold text-lg">No matches yet</div>
                  <div className="text-sm mt-1 text-white/70">
                    Your epic battles will appear here.
                  </div>
                </div>
              </div>
            ) : (
              matchList.map((m, i) => (
                <div
                  key={m._id ?? i}
                  className="relative rounded-2xl p-4 md:p-6
                             bg-gradient-to-tr from-white/6 via-white/3 to-transparent
                             border-2 border-white/5 backdrop-blur-sm
                             hover:scale-[1.01] transition-transform duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="uppercase text-white font-bold text-lg md:text-xl">
                          {m.player1.name} vs {m.player2.name}
                        </div>
                        <div className="text-sm text-white/80 mt-1">
                          {m.player1.score} — {m.player2.score}
                          <span className="mx-2">•</span>
                          <span className="text-xs text-white/60">
                            {m.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        {m.winner === "draw" ? (
                          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 font-semibold text-sm">
                            DRAW
                          </span>
                        ) : m.winner ? (
                          <span className="uppercase inline-block px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold text-sm text-center">
                            {`WINNER: ${m.winner}`}
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-1 rounded-full bg-white/6 text-white/90 font-medium text-sm">
                            —
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2"></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-sm text-white/80">
              Total:{" "}
              <span className="font-bold text-white">{matchList.length}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
