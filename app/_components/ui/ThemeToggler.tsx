"use client";
import React, { useEffect, useState } from "react";
import Moon from "../icons/Moon";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState<"left-1" | "left-7">("left-1");

  useEffect(() => {
    if (theme === "light") {
      setPosition("left-1");
    } else if (theme === "dark") {
      setPosition("left-7");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };
  return (
    <div className="border-l p-2 h-full flex items-center gap-2">
      <button
        onClick={() => handleThemeToggle()}
        className={`bg-[#A445ED] h-6 rounded-full w-12 cursor-pointer relative`}
      >
        <div
          className={`w-4 aspect-square absolute rounded-full bg-white cursor-pointer top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${position}`}
        ></div>
      </button>
      <div className="text-[#A445ED]">
        <Moon />
      </div>
    </div>
  );
}
