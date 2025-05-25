"use client";
import React, { useEffect, useState, useRef } from "react";
import ChevronDown from "../icons/ChevronDown";
import { useFont } from "@/app/_context/FontContext";
export default function FontToggle() {
  const { font, setFont } = useFont();
  const [displayName, setDisplayName] = useState<string>("Sans Serif");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (font === "fontSans") {
      setDisplayName("Sans Serif");
    } else if (font === "fontSerif") {
      setDisplayName("Serif");
    } else if (font === "fontMono") {
      setDisplayName("Monospace");
    }
  }, [font]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <div
        className={`p-2 flex items-center gap-2 relative  w-[10vw] max-w-[130px] min-w-[120px] mr-2`}
      >
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center gap-1 cursor-pointer w-full justify-between
        "
        >
          <p>{displayName}</p>
          <ChevronDown height={6} />
        </button>

        <div
          ref={menuRef}
          className={`absolute menu rounded-lg w-full top-full left-0 z-50 transition-opacity duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p
            onClick={() => {
              setFont("fontSans");
              setMenuOpen(false);
            }}
            className=" p-2 fontSans hover:text-[#A445ED] cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Sans Serif
          </p>
          <p
            onClick={() => {
              setFont("fontSerif");
              setMenuOpen(false);
            }}
            className=" p-2 fontSans hover:text-[#A445ED] cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Serif
          </p>
          <p
            onClick={() => {
              setFont("fontMono");
              setMenuOpen(false);
            }}
            className=" p-2 fontSans hover:text-[#A445ED] cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Monospace
          </p>
        </div>
      </div>
    </>
  );
}
