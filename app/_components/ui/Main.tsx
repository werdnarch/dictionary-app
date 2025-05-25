"use client";

import React, { useState, useEffect } from "react";
import Input from "./Input";
import useFetch from "@/app/_hooks/useFetch";
import { Phonetic } from "@/app/types";
import MeaningTab from "./MeaningTab";
import NotFound from "./NotFound";
import useLocalStorage from "@/app/_hooks/useLocalStorage";
import AudioPart from "./AudioPart";

export default function Main() {
  const [word, setWord] = useLocalStorage<string>("word", "table");

  const [phoneticsText, setPhoneticsText] = useState<string | null>(null);
  const { wordData } = useFetch(word);

  useEffect(() => {
    if (!wordData) return setPhoneticsText(null);

    setPhoneticsText(
      wordData[0].phonetics.find((p: Phonetic) => p.text)?.text || ""
    );
  }, [wordData]);

  return (
    <>
      <Input word={word} setWord={setWord} />

      {/*     <NotFound /> */}

      {wordData && (
        <section className="my-8 p-2 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold lg:text-7xl">
              {wordData?.[0].word}
            </p>
            <p className="text-[#A445ED]">
              {wordData?.[0].phonetic ? wordData?.[0].phonetic : phoneticsText}
            </p>
          </div>

          <AudioPart wordData={wordData} />
        </section>
      )}

      {wordData && <MeaningTab setWord={setWord} wordData={wordData} />}

      {!wordData && <NotFound />}
    </>
  );
}
