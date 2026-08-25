import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SS_ICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
      `<rect width="100" height="100" rx="14" fill="#0d0d14"/>` +
      `<text x="50" y="68" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="46" fill="#8b5cf6">SS</text>` +
    `</svg>`
  );

export const metadata: Metadata = {
  title: "Sneha Soni - AI Software Engineer",
  description:
    "Portfolio of Sneha Soni, AI Software Engineer & QA Intern at Nagent.AI. Full-stack developer specializing in React, Node.js, AI Agents, RAG, and GenAI systems.",
  keywords: [
    "Sneha Soni",
    "AI Software Engineer",
    "React",
    "Node.js",
    "RAG",
    "AI Agents",
    "Prompt Engineering",
    "Portfolio",
  ],
  icons: { icon: SS_ICON },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0d0d14] text-slate-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
