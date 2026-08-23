import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhigyan | Full Stack Developer",
  description:
    "Portfolio of Abhigyan — a full stack developer building fast, accessible web experiences.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js"],
  authors: [{ name: "Abhigyan" }],
  openGraph: {
    title: "Abhigyan | Full Stack Developer",
    description:
      "Portfolio of Abhigyan — a full stack developer building fast, accessible web experiences.",
    type: "website",
  },
};

import CustomCursor from "@/components/CustomCursor";
import BackgroundText from "@/components/BackgroundText";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <BackgroundText />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
