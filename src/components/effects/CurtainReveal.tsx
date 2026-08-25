"use client";
import { motion } from "framer-motion";
import type { AppPhase } from "@/lib/types";

interface Props { phase: AppPhase; onDone: () => void; }

export default function CurtainReveal({ phase, onDone }: Props) {
  if (phase === "ready") return null;
  const isOpen = phase === "curtain";
  const ease = [0.76, 0, 0.24, 1] as const;
  return (
    <>
      <motion.div
        key="ct"
        className="fixed top-0 inset-x-0 z-[90]"
        style={{ height: "50vh", background: "linear-gradient(180deg,#0f0a0a,#1a060a)" }}
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease, delay: 0.05 }}
        onAnimationComplete={isOpen ? onDone : undefined}
      />
      <motion.div
        key="cb"
        className="fixed bottom-0 inset-x-0 z-[90]"
        style={{ height: "50vh", background: "linear-gradient(0deg,#0f0a0a,#1a060a)" }}
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "100%" : "0%" }}
        transition={{ duration: 0.9, ease, delay: 0.05 }}
      />
    </>
  );
}
