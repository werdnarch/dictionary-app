import { WordEntry } from "@/app/types";
import React, { useEffect, useRef } from "react";
import useLocalStorage from "@/app/_hooks/useLocalStorage";
import { Phonetic } from "@/app/types";
import Image from "next/image";

interface AudioProps {
  wordData: WordEntry[];
}

export default function AudioPart({ wordData }: AudioProps) {
  const [audio, setAudio] = useLocalStorage<string>("audio", "");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(wordData[0].phonetics.find((p: Phonetic) => p.audio)?.audio || "");
  }, [wordData, setAudio]);

  if (!audio) return null;

  const playAudio = () => {
    audioRef?.current?.play();
  };

  return (
    <>
      <button
        onClick={() => playAudio()}
        className="w-[15%] max-w-[80px] rounded-full aspect-square playButton relative"
      >
        <Image
          src="/icons/icon-play.svg"
          alt="play"
          fill
          className="object-contain"
        />
      </button>
      <audio ref={audioRef} src={audio}></audio>
    </>
  );
}
