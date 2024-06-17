"use client";
import SectionText from "../main/SectionText";
import Heading from "../main/Heading";
import Divider from "../main/Divider";
import BLOG from "@/assets/blog/Blog.jpg";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import TestimonialCard from "./TestimonialCard";

const users = [
  {
    name: "Product 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: BLOG.src,
    position: "CEO",
  },
  {
    name: "Product 1",
    description: "Description 1",
    image: BLOG.src,
    position: "CEO",
  },
  {
    name: "Product 1",
    description: "Description 1",
    image: BLOG.src,
    position: "CEO",
  },
  {
    name: "Product 1",
    description: "Description 1",
    image: BLOG.src,
    position: "CEO",
  },
  {
    name: "Product 1",
    description: "Description 1",
    image: BLOG.src,
    position: "CEO",
  },
];

export default function TestimonialSection() {
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
        <div className="text-center max-w-2xl mx-auto">
          <SectionText title="Our Products" />
          <Heading title="Tea has a complex positive effect on the body" />
          <Divider width={2} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
          <Carousel
            autoplay={true}
            loop={true}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 bg-secondary translate-y-3 p-2 rounded gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            itemsPerView={3}
            prevArrow={({ handlePrev }) => (
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
            )}
          >
            {users.map((user, index) => (
              <TestimonialCard
                key={index}
                description={user.description}
                image={user.image}
                name={user.name}
                position={user.position}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
