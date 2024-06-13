import Image from "next/image";
import React from "react";
import BACKGROUND from "@/assets/blog/Blog.jpg";
import Link from "next/link";

interface HeaderProps {
  page: string;
}

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function Header({ page }: HeaderProps) {
  const formattedPage = page.toLowerCase().replace(/ /g, "-");
  const capitalizedPage = capitalizeWords(page);

  return (
    <section>
      <div className="relative h-[350px]">
        <Image
          src={BACKGROUND}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white bg-black bg-opacity-50">
          <h1 className="font-play-fair font-extrabold text-[72px] text-primary">{capitalizedPage}</h1>
          <div className="mt-4 text-lg font-open-sans font-[400]">
            <Link href="/" className="hover:underline">Home</Link><span> / </span>
            <Link href={`/${formattedPage}`} className="hover:underline text-primary">{capitalizedPage}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
