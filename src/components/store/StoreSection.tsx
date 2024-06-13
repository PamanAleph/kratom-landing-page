import React from "react";
import SectionText from "../main/SectionText";
import Heading from "../main/Heading";
import Divider from "../main/Divider";
import StoreCard from "./StoreCard";
import BACKGROUND from "@/assets/blog/Blog.jpg"

const storeItems = [
    {
      title: "Nature Close Tea",
      description: "A soothing tea for relaxation.",
      price: 10000,
      image: BACKGROUND.src,
    },
    {
      title: "Organic Green Tea",
      description: "Healthy and refreshing green tea.",
      price: 100000,
      image: BACKGROUND.src,
    },
    {
      title: "Herbal Bliss Tea",
      description: "A blend of herbs for a perfect cup.",
      price: 876666,
      image: BACKGROUND.src,
    },
  ];

export default function StoreSection() {
  return (
    <section className="max-w-7xl mx-auto text-center py-10 px-6">
      <div className="max-w-xl mx-auto">
        <SectionText title="Online Store" />
        <Heading title="Want to stay healthy? Choose tea taste" />
        <Divider width={2} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeItems.map((item, index) => (
          <StoreCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div className="py-6">
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-secondary text-white hover:text-primary duration-300"
        >
          Rounded
        </button>
      </div>
    </section>
  );
}
