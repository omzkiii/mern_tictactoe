"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, createContext } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export type PlayersContextType = {
  players: string[];
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>;
};
export const PlayersContext = createContext<PlayersContextType | undefined>(
  undefined,
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [players, setPlayers] = useState<string[]>([]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlayersContext value={{ players, setPlayers }}>
          {children}
        </PlayersContext>
      </body>
    </html>
  );
}
