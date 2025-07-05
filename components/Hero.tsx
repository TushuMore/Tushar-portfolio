"use client";


import { cn } from "@/lib/utils";


import HighlightPop from "./HighlightPop";
import AnimatedHeading from "./AnimatedHeading";
import {motion} from 'framer-motion';


const CustomButton = ({ name }: { name: string }) => {
  return (
    <motion.button
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 2 }}
  onClick={() => window.open("https://www.linkedin.com/in/tushar-more-987a69258/", "_blank")}
  className="bg-primary text-background px-10 py-4 rounded-sm text-sm xl:text-xl sm:text-lg font-semibold shadow-lg/20 shadow-foreground/50 cursor-pointer hover:bg-primary/80 hover:text-background/80"
>
  {name}
</motion.button>

  );
};



const Hero = () => {
  return (
    <div className="relative flex flex-col h-[50rem] w-full items-center justify-center bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:150px_150px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_0px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_0px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_0px,transparent_1px),linear-gradient(to_bottom,#262626_0px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_5%,background)]"></div>

      {/* Main content  */}
      <div className="z-10 w-full h-max">
        {/* Heading  */}
        <AnimatedHeading/>

        {/* Intro/Name text  */}
        <h2 className="text-center text-lg xl:text-3xl lg:text-2xl sm:text-xl pt-5 font-bold text-foreground/60">
          Hi, I&apos;m{" "}
          <HighlightPop
            text="Tushar More"
            className="italic bg-gradient-to-r from-primary to-foreground/20 text-background px-4 rounded-sm"
          />
        </h2>

        {/* description paragraph  */}
        <p className="text-center text-sm xl:text-2xl lg:text-xl sm:text-lg text-foreground/40 pt-3 px-2 sm:px-10 lg:px-20 xl:px-80  mx-auto">
          Full-stack developer who loves solving real-world problems through
          code. Focused on performance, scalability, and design-first
          development.
        </p>

        {/* Buttons  */}
        <div className="flex items-center justify-center gap-5 mt-10 lg:mt-20 sm:mt-15">
          <CustomButton name={"Let's talk!"} />
          <CustomButton name={"Hire me!"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
