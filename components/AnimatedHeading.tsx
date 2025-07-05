'use client'

import React from "react";
import { motion } from "framer-motion";
import { DM_Serif_Text, Rajdhani, Grand_Hotel } from "next/font/google";

const grand_hotel = Grand_Hotel({
  variable: "--grand-hotel",
  subsets: ["latin"],
  weight: "400",
});

const dm_serif = DM_Serif_Text({
  variable: "--dm-serif-text-font",
  subsets: ["latin"],
  weight: "400",
});

const rajdhani = Rajdhani({
  variable: "--rajdhani",
  subsets: ["latin"],
  weight: "400",
});

const words = [
  { text: "Design", className: grand_hotel.className },
  { text: "Develop", className: dm_serif.className },
  { text: "Deliver", className: rajdhani.className },
];

export default function AnimatedHeading() {
  return (
    <motion.h1
      className="text-5xl xl:text-8xl lg:text-7xl sm:text-6xl text-center font-bold"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5, // 50ms delay between each word
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`${word.className} inline-block`}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word.text}
          {index < words.length - 1 && <span className="mx-1">.</span>}
        </motion.span>
      ))}
    </motion.h1>
  );
}