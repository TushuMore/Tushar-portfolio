"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

// Importing Google font
import { Yatra_One } from "next/font/google";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { cn } from "@/lib/utils";

const yatraOne = Yatra_One({
  variable: "--font-yatra-one",
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted, isScrolled]);

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        `fixed w-screen h-20 flex items-center justify-between px-10 xl:px-60 lg:px-40 bg-background backdrop-filter backdrop-blur-sm z-50 `,
        isScrolled
          ? "bg-background/20 backdrop-filter backdrop-blur-sm z-50"
          : ""
      )}
    >
      {/* Logo  */}
      <Link href={"/"}>
        <div
          className={`text-xl xl:text-3xl lg:text-2xl font-bold italic ${yatraOne.className} bg-gradient-to-r from-primary to-foreground/20 bg-clip-text text-white/0`}
        >
          Portfol<span>io.</span>
        </div>
      </Link>

      <ul
        className={
          isMenuOpen
            ? `absolute flex flex-col gap-2 w-max h-screen px-20 py-10 bg-background backdrop-filter backdrop-blur-sm top-20 right-0 pt-20 transition-all duration-150`
            : `hidden sm:flex items-center gap-5 text-sm lg:text-lg transition-all duration-150 `
        }
      >
        <li>
          <Link
            href={"/"}
            className=" font-semibold text-primary hover:text-secondary transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/Projects"}
            className=" font-semibold text-primary hover:text-secondary transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={"/About"}
            className=" font-semibold text-primary hover:text-secondary transition-colors"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href={"/Contact"}
            className="font-semibold text-primary hover:text-secondary transition-colors"
          >
            Contact
          </Link>
        </li>

        {/* Theme toggle button  */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 w-max rounded-sm bg-foreground/20 transition-all"
        >
          {theme === "light" ? (
            <Moon className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer" />
          ) : (
            <Sun className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer" />
          )}
        </button>

        {/* Let's talk button  */}
        <Button className="cursor-pointer lg:text-sm text-[12px]"
          onClick={() => window.open("https://www.linkedin.com/in/tushar-more-987a69258/", "_blank")}
        >
          Let&apos;s talk!
        </Button>
      </ul>

      {/* Hamburger icon  */}
      <div
        className="sm:hidden block p-2 rounded-sm bg-foreground/20 transition-all"
        onClick={handleClick}
      >
        {isMenuOpen ? <RxCross2 /> : <HiMenuAlt3 />}
      </div>
    </nav>
  );
};

export default Navbar;
