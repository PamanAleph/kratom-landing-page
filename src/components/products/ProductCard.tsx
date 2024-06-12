import Image from "next/image";
import React from "react";

interface ProductCardPRops {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({
  image,
  title,
  description,
}: ProductCardPRops) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
      <div className="w-full h-64 rounded-lg shadow-md">
        <Image
          src={image}
          alt="Product Image"
          width={1920}
          height={1080}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="w-56 -mt-3 overflow-hidden bg-white rounded-lg shadow-lg md:w-[300px] text-center ">
        <h3 className="py-2 font-bold tracking-wide uppercase font-play-fair text-secondary text-[24px]">
          {title}
        </h3>
        <p className="px-3 py-2 text-center text-[16px] font-open-sans text-primary font-[400]">
          {description}
        </p>
      </div>
    </div>
  );
}
