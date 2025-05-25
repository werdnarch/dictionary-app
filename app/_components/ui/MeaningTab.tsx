import React, { useEffect, useState } from "react";
import { Definition, Meaning, WordEntry } from "@/app/types";

interface MeaningProps {
  wordData: WordEntry[];
  setWord: (value: string) => void;
}
export default function MeaningTab({ wordData, setWord }: MeaningProps) {
  const [meaningData, setMeaningData] = useState<Meaning[]>();

  useEffect(() => {
    if (!wordData?.length) return;
    setMeaningData(wordData?.[0].meanings);
  }, [wordData]);
  return (
    <>
      {meaningData?.map((meaning: Meaning, index: number) => (
        <div key={index}>
          <div className="p-2 flex items-center gap-2">
            <p className="italic text-[1.1rem] font-bold">
              {meaning.partOfSpeech}
            </p>
            <hr className="border-t-1 border-zinc-500 w-full"></hr>
          </div>
          <section className="my-4 p-2">
            <p className="text-zinc-600">Meaning</p>

            <ul className="flex list-disc flex-col gap-4 text-sm lg:text-base mt-4 list">
              {meaning.definitions.map(
                (definition: Definition, index: number) => (
                  <li key={index} className="list-item">
                    <div className="flex flex-col gap-2">
                      <span>{definition.definition}</span>
                      {definition.example && (
                        <span className="text-zinc-400">
                          &ldquo;{definition.example}&rdquo;
                        </span>
                      )}
                    </div>
                  </li>
                )
              )}
            </ul>
            {meaning.synonyms?.length ? (
              <div className="my-4 flex  gap-6">
                <p className="text-zinc-600">Synonyms</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {meaning.synonyms.map((synonym, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        setWord(synonym);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-sm font-medium text-purple-600 cursor-pointer hover:underline"
                    >
                      {synonym}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {meaning.antonyms?.length ? (
              <div className="my-4 flex  gap-6">
                <p className="text-zinc-600">Antonyms</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {meaning.antonyms.map((antonym, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        setWord(antonym);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-sm font-medium text-purple-600 cursor-pointer hover:underline"
                    >
                      {antonym}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </div>
      ))}

      <hr className="text-zinc-300"></hr>

      <footer className="py-3 mb-12 flex items-center gap-4">
        <p className="underline">Source</p>

        {wordData?.[0]?.sourceUrls?.length > 0 && (
          <a
            href={wordData[0].sourceUrls[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {wordData[0].sourceUrls[0]}
          </a>
        )}
      </footer>
    </>
  );
}
