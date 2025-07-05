"use client";

import { motion } from "framer-motion";

interface HighlightPopProps {
  text: string;
  className?: string;
  delay?: number; // optional animation delay in seconds
}

export default function HighlightPop({
  text,
  className = "",
  delay = 1.5,
}: HighlightPopProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {text}
    </motion.span>
  );
}
