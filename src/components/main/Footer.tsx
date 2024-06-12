import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const sectionsQuickLinks = [
    {
      title: "Quick Links",
      links: [
        { text: "About Us", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Our Service", href: "#" },
        { text: "Terms & Condition", href: "#" },
        { text: "Support", href: "#" },
      ],
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "09:00 am - 07:00 pm" },
    { day: "Saturday", hours: "09:00 am - 12:00 pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  const officeDetails = [
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-secondary" />,
      text: "email@example.com",
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-secondary" />,
      text: "+1 234 567 890",
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-secondary" />,
      text: "123 Street, New York, USA",
    },
  ];

  const socialMediaIcons = [
    { icon: <FaTwitter size={20} className="text-white hover:text-black duration-300"/>, href: "#" },
    { icon: <FaFacebookF size={20} className="text-white hover:text-black duration-300"/>, href: "#" },
    { icon: <FaYoutube size={20} className="text-white hover:text-black duration-300"/>, href: "#" },
    { icon: <FaLinkedinIn size={20} className="text-white hover:text-black duration-300"/>, href: "#" },
  ];

  return (
    <footer className="bg-[#252C30]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="font-play-fair text-[24px] text-secondary font-extrabold">
              Our Office
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {officeDetails.map((detail, index) => (
                <li key={index} className="flex flex-col sm:flex-row items-center gap-2">
                  {detail.icon}
                  <p className="text-[16px] text-[#F5F8F2] font-open-sans">
                    {detail.text}
                  </p>
                </li>
              ))}
              <li className="flex justify-center sm:justify-start mt-4 space-x-2">
                {socialMediaIcons.map((social, index) => (
                  <Link key={index} href={social.href}>
                    <div className="bg-secondary p-2 rounded-full">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          {sectionsQuickLinks.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <p className="font-play-fair text-[24px] text-secondary font-extrabold">
                {section.title}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href}>
                      <p className="transition duration-300 transform scale-100 hover:scale-110 text-[16px] text-[#F5F8F2] font-open-sans">
                        <span className="text-secondary">{">"} </span>
                        {link.text}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center sm:text-left">
            <p className="font-play-fair text-[24px] text-secondary font-extrabold">
              Business Hours
            </p>
            <ul className="mt-8 space-y-4 font-open-sans">
              {businessHours.map((item) => (
                <li key={item.day}>
                  <p className="text-[#B0B9AE] text-[16px]">{item.day}</p>
                  <p className="pt-1 text-[#F5F8F2] font-semibold font-play-fair">{item.hours}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-play-fair text-[24px] text-secondary font-extrabold">
              News Letter
            </p>
            <div className="mx-auto mt-8 max-w-md sm:ms-0">
              <p className="text-justify leading-relaxed text-[#B0B9AE] ltr:sm:text-left rtl:sm:text-right">
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </p>
              <form className="mt-4">
                <div className="flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    className="w-full border-gray-200 px-6 py-3 shadow-sm"
                    type="email"
                    placeholder="Your email"
                  />
                  <button
                    className=" bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t bg-[#252525] py-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left px-10">
          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 text-[16px]">
            &copy;{" "}
            <Link href="/" className="text-secondary hover:underline">
              Your Site Name
            </Link>{" "}
            <span className="text-[#B0B9AE]">All Right Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
