import Divider from "@/components/main/Divider";
import React from "react";
import SectionText from "@/components/main/SectionText";
import Heading from "@/components/main/Heading";
import AboutUs from "@/components/about/AboutUs";
import BLOG from "@/assets/blog/Blog.jpg";
import Image from "next/image";
import Contact from "@/components/contact/Contact";
import HomeSwiper from "@/components/main/HomeSwiper";
import ProductCard from "@/components/products/ProductCard";
import ProductsSection from "@/components/products/ProductsSection";

export default function HomePage() {
  return (
    <section>
      <div className="h-screen">
        <HomeSwiper/>
      </div>
      <AboutUs />

      {/* our product  */}
      <ProductsSection/>

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
      

      <Contact />
    </section>
  );
}
