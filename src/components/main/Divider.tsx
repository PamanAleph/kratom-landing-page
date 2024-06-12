import React from "react";

interface DividerProps {
  width: number;
}

export default function Divider({ width }: DividerProps) {
  const widthClass = `w-[${width}px]`;

  return (
    <span className="flex items-center py-4">
      <span className={`h-[3px] flex-1 bg-[#88B44E] ${widthClass}`}></span>
      <span className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center mx-auto">
        <span className="w-3 h-3 rounded-full bg-black"></span>
      </span>
      <span className={`h-[3px] flex-1 bg-[#88B44E] ${widthClass}`}></span>
    </span>
  );
}
