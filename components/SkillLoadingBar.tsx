"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function SkillLoadingBar({
  label,
  percent,
  color = "#6366f1", // Default to indigo
}: {
  label: string;
  percent: number;
  color?: string;
}) {
  const strokeWidth = 8;
  const radius = 50;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); // only animate once
  const [visiblePercent, setVisiblePercent] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Start animation once in view
      const timeout = setTimeout(() => {
        setVisiblePercent(percent);
      }, 100); // slight delay for smoothness

      return () => clearTimeout(timeout);
    }
  }, [isInView, percent]);

  const offset = circumference - (visiblePercent / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <svg
        viewBox="0 0 120 120"
        className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 transition-all"
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx="60"
          cy="60"
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-1000"
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          className="dark:fill-white fill-black text-sm sm:text-base font-semibold"
        >
          {visiblePercent}%
        </text>
      </svg>
      <span className="mt-2 text-sm sm:text-base font-medium">{label}</span>
    </div>
  );
}
