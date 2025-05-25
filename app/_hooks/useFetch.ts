// In your hook:
import { useState, useEffect } from "react";
import { WordEntry } from "../types";

export default function useFetch(word: string) {
  const [wordData, setwordData] = useState<WordEntry[] | null>(null);

  useEffect(() => {
    if (!word) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const data = (await response.json()) as WordEntry[];
        setwordData(data);
      } catch {
        setwordData(null);
      }
    };

    fetchData();
  }, [word]);

  return { wordData };
}
