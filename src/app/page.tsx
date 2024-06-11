import HomeSwiper from "@/components/main/HomeSwiper";
import React from "react";

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto">
      <div>{/* <HomeSwiper/> */}</div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <h1 className="text-section font-open-sans">About Us</h1>
      </div>
    </section>
  );
}
