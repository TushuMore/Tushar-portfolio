import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading = ({ text, className }: HeadingProps) => {
  return (
    <div className="flex justify-center">
      <h1
        className={cn(
          "relative inline-block text-center text-4xl font-bold uppercase my-20 before:w-[130%] before:h-1 before:bg-primary/50 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:content-[''] before:rounded-full",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
