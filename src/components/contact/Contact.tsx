import React from "react";
import SectionText from "../main/SectionText";
import Heading from "../main/Heading";
import Divider from "../main/Divider";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-10 h-10 text-white" />,
      text: "info@example.com",
      supportText: "support@example.com",
    },
    {
      icon: <PhoneIcon className="w-10 h-10 text-white" />,
      text: "123-456-7890",
      supportText: "123-456-7890",
    },
    {
      icon: <MapPinIcon className="w-10 h-10 text-white" />,
      text: "123 Street Name, City, Country",
      supportText: "123 Street Name, City, Country",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto text-center py-10 px-6">
      <SectionText title="Contact Us" />
      <Heading title="Contact Us Right Now" />
      <Divider width={2} />
      <p className="py-6 text-primary">
        Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
        et lorem et sit, sed stet lorem sit clita duo justo Diam dolor diam
        ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
        sit, sed stet lorem sit clita duo justo
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="text-center ">
            <div className="flex justify-center items-center py-4">
              <div className="bg-[#F5F8F2] rounded-full h-24 w-24 flex items-center justify-center">
                <div className="bg-secondary rounded-full h-16 w-16 flex items-center justify-center">
                  {info.icon}
                </div>
              </div>
            </div>
            <h1 className="text-lg font-semibold">{info.text}</h1>
            <p className="pt-2 text-sm text-gray-600">{info.supportText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
