"use client";

import Book from "./_components/icons/Book";
import { useState, useEffect } from "react";
import ThemeToggler from "./_components/ui/ThemeToggler";
import FontToggle from "./_components/ui/FontToggle";
import { useFont } from "./_context/FontContext";
import Loading from "./_components/ui/Loading";
import Main from "./_components/ui/Main";

export default function Home() {
  const { font } = useFont();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <main
      className={`min-h-full p-2 lg:p-6 lg:py-12 max-w-4xl mx-auto ${font}`}
    >
      <header className="p-2 flex items-center justify-between">
        <Book />

        <section className="flex items-center">
          <FontToggle />
          <ThemeToggler />
        </section>
      </header>

      <Main />
    </main>
  );
}
