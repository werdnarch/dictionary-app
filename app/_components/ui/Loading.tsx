import React from "react";

export default function Loading() {
  return (
    <div className="h-screen loadercenter flex items-center justify-center">
      <div className="w-[40%] aspect-square loadercenter max-w-[150px] rounded-full border-[20px] loader relative">
        <div className="bg-blue-400 h-full w-[40%] absolute top-[20px] left-1/2 -translate-x-1/2 loaderbar"></div>
      </div>
    </div>
  );
}
