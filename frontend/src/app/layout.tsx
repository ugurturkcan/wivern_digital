import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Wivern Digital | Cinematic AI Avatars",
  description: "Crafting digital avatars since the 16th century. High-fidelity AI pipeline for commercial avatars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full antialiased bg-[#111111] text-[#f4f1ea] overflow-x-hidden flex flex-col relative w-full">
        {children}
      </body>
    </html>
  );
}
