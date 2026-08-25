"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const posRef = useRef({ x: -9999, y: -9999 });
  const divRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (divRef.current) {
        divRef.current.style.left = `${posRef.current.x}px`;
        divRef.current.style.top = `${posRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={divRef}
      className="fixed pointer-events-none z-[10]"
      style={{
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(244,63,94,0.07) 0%, rgba(251,146,60,0.04) 40%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        top: "-9999px",
        left: "-9999px",
        willChange: "left, top",
      }}
    />
  );
}
