"use client"
import { useEffect, useState } from "react";

export default function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 20,
        left: position.x - 20,
        width: 40,
        height: 40,
        background: "radial-gradient(circle, rgba(215,254,100,0.4) 0%, transparent 80%)",
        pointerEvents: "none",
        borderRadius: "50%",
        zIndex: 9999,
        mixBlendMode: "screen",
      }}
    />
  );
}
