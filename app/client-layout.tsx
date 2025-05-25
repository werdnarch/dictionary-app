"use client";

import { ThemeProvider } from "next-themes";
import { FontProvider } from "./_context/FontContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <FontProvider>{children}</FontProvider>
    </ThemeProvider>
  );
}
