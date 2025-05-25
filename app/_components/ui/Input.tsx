import React, {
  useEffect,
  useState,
  FormEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import Search from "../icons/Search";

interface InputProps {
  word: string;
  setWord: (value: string) => void;
}

export default function Input({ word, setWord }: InputProps) {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!word) return;

    setInput(word);
  }, [word]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      setError(true);
      return;
    }
    setError(false);
    setWord(trimmed);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && e.currentTarget.value.endsWith(" ")) {
      e.preventDefault();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (error) setError(false);
  };

  return (
    <section className="p-2 my-4">
      <form onSubmit={handleSubmit} className="relative z-10">
        <input
          type="text"
          className="input w-full z-10 rounded-lg p-3 font-bold outline-none focus:outline-[#A445ED]"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-invalid={error}
          aria-describedby="error-message"
        ></input>

        <button
          type="submit"
          className="absolute top-1/2 z-10 -translate-y-1/2 right-3"
          aria-label="Search"
        >
          <Search width={16} />
        </button>
      </form>

      {error && (
        <p
          id="error-message"
          className="text-red-500 text-sm mt-2"
          role="alert"
        >
          whoops,can&apos;t be empty...
        </p>
      )}
    </section>
  );
}
