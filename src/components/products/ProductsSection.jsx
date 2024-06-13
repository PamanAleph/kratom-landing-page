"use client"
import SectionText from "../main/SectionText";
import Heading from "../main/Heading";
import Divider from "../main/Divider";
import BLOG from "@/assets/blog/Blog.jpg";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import ProductCard from "./ProductCard";

const products = [
  { title: "Product 1", description: "Description 1", image: BLOG.src },
  { title: "Product 2", description: "Description 2", image: BLOG.src },
  { title: "Product 3", description: "Description 3", image: BLOG.src },
  { title: "Product 4", description: "Description 4", image: BLOG.src },
  { title: "Product 5", description: "Description 5", image: BLOG.src },
  { title: "Product 6", description: "Description 6", image: BLOG.src },
];

export default function ProductsSection() {
  return (
    <div className="relative bg-[#F3F7ED] overflow-hidden">
      <Image
        width={1920}
        height={1080}
        src={BLOG}
        alt="image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-[#F3F7ED] bg-opacity-80 z-10"></div>
      <div className="py-10 relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <SectionText title="Our Products" />
          <Heading title="Tea has a complex positive effect on the body" />
          <Divider width={2} />
          <Carousel className="rounded-xl" navigation={false} itemsPerView={3} prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-secondary hover:text-secondary hover:bg-transparent duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-secondary hover:text-secondary hover:bg-transparent duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
