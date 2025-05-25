import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-full f mt-[150px] flex flex-col items-center gap-4 justify-center">
      <p className="text-6xl">😕</p>
      <p>No Definitions Found</p>
      <p className="text-center max-w-[600px]">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
}
