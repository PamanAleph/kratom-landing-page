import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });


export const metadata = {
  title: {
      template: "%s | Kratom",
      default: "Kratom",
  },
  description: "Kratom is asdadsadsasdadaddssa",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <body className={inter.className}>
        <div className="bg-white">
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
