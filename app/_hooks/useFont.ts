"use client";

import { useState } from "react";

type Font = "fontSans" | "fontSerif" | "fontMono";

export default function useFont() {
  const [font, setFont] = useState<Font>("fontSans");

  const handleFontChange = (font: Font) => {
    setFont(font);
  };
  return { font, handleFontChange };
}
