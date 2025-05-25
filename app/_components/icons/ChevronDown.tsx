import React from "react";

interface IconProps {
  width?: number;
  height?: number;
}

export default function ChevronDown({ width, height }: IconProps) {
  const aspectRatio = 14 / 8;

  const computedWidth = width ?? (height ? height * aspectRatio : 14);
  const computedHeight = height ?? (width ? width / aspectRatio : 8);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={computedWidth}
      height={computedHeight}
      viewBox="0 0 14 8"
    >
      <path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
    </svg>
  );
}
