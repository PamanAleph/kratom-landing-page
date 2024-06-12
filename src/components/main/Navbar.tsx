"use client";

import Link from "next/link";
import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
// import Logo from "@/assets/logo.png";
import Image from "next/image";

/**
 * Navbar Component
 *
 * @returns {JSX.Element} - React element representing the Navbar.
 */
export default function Navbar() {
  // State for mobile menu and user authentication
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavbarPages = [
    {
      title: "Pages",
      items: [
        {
          title: "Features",
          href: "/features",
        },
        {
          title: "Blog Article",
          href: "blog-article",
        },
        {
          title: "Testimonial",
          href: "testimonial",
        },
        {
          title: "404 Page",
          href: "404-page",
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-open-sans font-bold">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12 lg:divide-x-2 lg:divide-black">
            {/* <Link href="/">
              <Image alt="PU Computing" src={Logo} width="130" height="80" />
            </Link> */}
            <div className="hidden px-7 font-bold lg:block">
              <div className="flex flex-col items-center"></div>
            </div>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 top-24 bg-white shadow-md lg:hidden">
              <nav aria-label="Global" className="p-4">
                <ul className="text-md flex flex-col items-center gap-6 font-medium text-black">
                  <li className="hover:text-secondary duration-300">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-secondary duration-300">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="hover:text-secondary duration-300">
                    <Link href="/products">Product</Link>
                  </li>
                  <NavbarDropdown title="More" items={NavbarPages[0].items} />
                </ul>
              </nav>
            </div>
          )}

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <ul className="text-md flex flex-row items-center gap-6 font-semibold text-primary text-[18px]">
              <li className="hover:text-secondary duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-secondary duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-secondary duration-300">
                <Link href="/products">Product</Link>
              </li>
              <li className="hover:text-secondary duration-300">
                <Link href="/store">Store</Link>
              </li>
              {NavbarPages.map((item) => (
                <NavbarDropdown
                  title={item.title}
                  items={item.items}
                  key={item.title}
                />
              ))}
              <li className="hover:text-secondary duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
