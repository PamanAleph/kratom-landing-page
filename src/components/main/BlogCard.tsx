import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  image: string;
  reverse?: boolean;
  title: string;
  description: string;
}

export default function BlogCard({ image, reverse,title,description }: BlogCardProps) {
  return (
    <article className={`flex bg-white transition hover:shadow-xl ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="hidden sm:block sm:basis-56">
        <Image
          alt={`${title}'s Image`}
          src={image}
          className="aspect-square h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className={`border-s border-gray-900/10 p-4 sm:p-6 ${reverse ? "sm:border-r-transparent sm:border-l-0" : "sm:border-l-transparent"}`}>
          <Link href="#">
            <h3 className="font-bold uppercase text-gray-900">
              Finding the right guitar for your style - 5 tips
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
           {description}
          </p>
        </div>
      </div>
    </article>
  );
}
