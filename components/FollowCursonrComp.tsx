// app/components/FollowCursor.tsx
"use client";

import { useEffect, useState } from "react";

export default function FollowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-40 w-40 rounded-full bg-primary/30  blur-3xl transition-transform duration-200"
      style={{
        transform: `translate(${position.x - 48}px, ${position.y - 48}px)`,
      }}
    />
  );
}
