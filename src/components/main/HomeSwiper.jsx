"use client"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import BACKGROUND1 from "@/assets/blog/Blog.jpg"
import Image from "next/image";

const slides = [
  {
    imgSrc: BACKGROUND1.src,
    imgAlt: "image 1",
    title: "Welcome To Tea House",
    description: "Organic & Quality Tea Production",
    buttons: [
      { text: "Explore", variant: "filled" },
      { text: "Gallery", variant: "text" }
    ],
    alignment: "center",
  },
  {
    imgSrc: BACKGROUND1.src,
    imgAlt: "image 1",
    title: "The Beauty of Nature",
    description: "It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
    buttons: [
      { text: "Explore", variant: "filled" },
      { text: "Gallery", variant: "text" }
    ],
    alignment: "center",
  },

];

export default function HomeSwiper() {
  return (
    <Carousel loop={true} navigation={false}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-full w-full">
          <Image
            src={slide.imgSrc}
            alt={slide.imgAlt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 grid h-full w-full place-items-${slide.alignment} bg-black/75`}>
            <div className={`w-3/4 ${slide.alignment === 'center' ? 'text-center' : `pl-12 md:pl-20 lg:pl-32 ${slide.alignment === 'end' ? 'pb-12 md:pb-20 lg:pb-32' : ''}`}`}>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl font-open-sans"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-3xl md:text-4xl lg:text-5xl font-extrabold font-play-fair"
              >
                {slide.description}
              </Typography>
              <div className={`flex ${slide.alignment === 'center' ? 'justify-center' : ''} gap-2`}>
                {slide.buttons.map((button, idx) => (
                  <Button key={idx} size="lg" color="white" variant={button.variant}>
                    {button.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
