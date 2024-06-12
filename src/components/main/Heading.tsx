import React from "react";

interface HeadingProps {
  title: String;
}

export default function Heading({ title }: HeadingProps) {
  return (
    <h2 className="text-primary font-play-fair font-[900] text-[40px]">
     {title}
    </h2>
  );
}
