import Divider from "@/components/main/Divider";
import React from "react";
import SectionText from "@/components/main/SectionText";
import Heading from "@/components/main/Heading";
import AboutUs from "@/components/about/AboutUs";
import BLOG from "@/assets/blog/Blog.jpg";
import Image from "next/image";
import Contact from "@/components/contact/Contact";
import HomeSwiper from "@/components/main/HomeSwiper";
import ProductsSection from "@/components/products/ProductsSection";
import StoreSection from "@/components/store/StoreSection";
import ButtonModal from "@/components/main/ButtonModal";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function HomePage() {
  const features = [
    "Great tea assortment",
    "High-quality ingredients",
    "Affordable prices",
    "Sustainable sourcing",
  ];

  return (
    <section>
      <div className="h-screen">
        <HomeSwiper />
      </div>
      <AboutUs />

      {/* our product  */}
      <ProductsSection />

      <div className="bg-white py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto gap-10">
          <div className="md:col-span-2">
            <Image
              src={BLOG}
              width={1920}
              height={1080}
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-3">
            <SectionText title="Featured Article" />
            <Heading title="The history of tea leaf in the world" />
            <Divider width={2} />
            <article className="font-open-sans mt-4 text-justify">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
              <br />
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.
              Tempor erat elitr rebum at clita.
            </article>
            <div className="py-8">
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full bg-secondary text-white"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src={BLOG}
          width={1920}
          height={1080}
          alt="background image"
          className="h-[850px] md:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-secondary opacity-80"></div>
        <div className="absolute py-2 px-4 md:px-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-start space-y-4 p-4 md:p-0">
            <h1 className="text-black font-play-fair text-2xl md:text-[40px] font-extrabold">
              Tea is a drink of{" "}
              <span className="text-white">health</span> and{" "}
              <span className="text-white">beauty</span>
            </h1>
            <p className="italic font-play-fair text-white text-lg md:text-[20px] font-[600]">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit
            </p>

            <div className="py-4 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-row gap-4 items-center">
                    <CheckIcon
                      className="size-10 bg-white p-1 rounded-full"
                      color="#88B44E"
                    />
                    <p className="font-open-sans text-sm md:text-[16px] text-black">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4 md:py-8">
              <button
                type="button"
                className="px-6 py-3 md:px-8 md:py-3 font-[400] bg-white rounded-full"
              >
                Explore More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonModal />
          </div>
        </div>
      </div>


      <StoreSection />
      <Contact />
    </section>
  );
}
