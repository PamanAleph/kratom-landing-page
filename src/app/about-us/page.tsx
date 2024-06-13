import AboutUs from "@/components/about/AboutUs";
import Header from "@/components/main/Header";
import React from "react";

export default function page() {
  return (
    <section>
      <Header page="about us"/>
      <AboutUs />
    </section>
  );
}
