import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });
const playFair = Playfair_Display({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Kratom",
  description: "Kratom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
