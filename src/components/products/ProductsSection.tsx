import React from "react";
import SectionText from "../main/SectionText";
import Heading from "../main/Heading";
import Divider from "../main/Divider";
import BLOG from "@/assets/blog/Blog.jpg";
import Image from "next/image";

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
        </div>
      </div>
    </div>
  );
}
