import React from "react";
import BACKGROUND from "@/assets/blog/Blog.jpg";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface StoreCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const formatCurrency = (price: number): string => {
  return "Rp " + price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function StoreCard({
  title,
  description,
  price,
  image,
}: StoreCardProps) {
  return (
    <section>
      <div className="relative w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg group">
        <Image
          className="object-fit w-full h-[400px]"
          src={image}
          alt="BACKGROUND IMAGE"
          height={1080}
          width={1920}
        />

        <div className="py-5 text-center flex flex-col gap-y-2">
          <h1 className="block text-xl font-extrabold font-play-fair text-black">
            {title}
          </h1>
          <p className="font-open-sans text-[16px] text-primary">
            {description}
          </p>
          <p className="font-play-fair text-secondary text-[24px]">
            {formatCurrency(price)}
          </p>
        </div>

        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
          <Link
            href="#"
            className="px-8 py-3 flex items-center justify-center gap-2 font-semibold rounded-full bg-secondary text-white hover:text-primary duration-300"
          >
            More Detail
            <ArrowRightCircleIcon className="w-8 h-8" />
          </Link>
          <Link
            href="#"
            className="px-8 py-3 flex items-center justify-center gap-2 font-semibold rounded-full bg-secondary text-white hover:text-primary duration-300"
          >
            Add to Cart
            <ShoppingCartIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
