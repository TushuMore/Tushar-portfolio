"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";

const milestones = [
  {
    year: "2022",
    title: "Started Web Dev",
    description:
      "Began learning HTML, CSS, and JavaScript from YouTube and online courses.",
  },
  {
    year: "2023",
    title: "Next.js & Tailwind",
    description:
      "Built several projects using Next.js, Tailwind CSS, and started freelancing.",
  },
  {
    year: "2024",
    title: "UI/UX & TypeScript",
    description:
      "Improved design skills, used TypeScript and started building full-stack apps.",
  },
  {
    year: "2025",
    title: "Portfolio & Job Hunt",
    description:
      "Created portfolio, applied for jobs and started a dev agency.",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const height = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (height + windowHeight))
      );

      setProgressHeight(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Heading text="Journey" />
      <div ref={containerRef} className="relative pr-4 sm:pr-0 mx-auto py-20 w-[380px] xl:w-[1000px] lg:w-[800px] sm:w-[600px]">
        {/* Progress Line */}
        <div className="absolute left-10 top-10 bottom-0 w-1">
          <div
            ref={progressRef}
            className="absolute -left-[2px] top-0 w-1 bg-primary/50"
            style={{ height: `${progressHeight}%` }}
          />
        </div>

        <div className="ml-20 space-y-12">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-14 top-8 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-900" />
              <div className="bg-foreground/10 shadow-md rounded-xl p-5">
                <h3 className="text-xl font-semibold">
                  {item.year} - {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
