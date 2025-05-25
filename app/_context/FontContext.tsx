"use client";

import { createContext, useContext, ReactNode } from "react";
import useLocalStorage from "../_hooks/useLocalStorage";

type Font = "fontSans" | "fontSerif" | "fontMono";

const FontContext = createContext<{
  font: Font;
  setFont: (font: Font) => void;
}>({
  font: "fontSans",
  setFont: () => {},
});

export function FontProvider({ children }: { children: ReactNode }) {
  const [font, setFont] = useLocalStorage<Font>("font", "fontSans");

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFont = () => useContext(FontContext);
