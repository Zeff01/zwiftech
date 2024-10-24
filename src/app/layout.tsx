import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";
const lato = Lato({ subsets: ["latin"], weight: "400" });
import Link from "next/link";
import SideBar from "@/components/sideBar/SideBar";

export const metadata: Metadata = {
  title: "ZwiftTech",
  description: "Elevate Your Business with Next-Generation Technology Solutions",
  authors: {
    url: "https://staging.codebility.tech/", // NOTE: is this correct?
    name: "Codebility",
  },
  keywords: ["Zwift Tech", "ZwiftTech", "Codebility"],  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={lato.className}>
        <nav className="w-full pt-6 px-2 sm:px-8 md:px-12 lg:px-16 flex flex-row gap-x-4 justify-between items-center">
          <Link href={"/"}>
            <Image src={"./logo.svg"} width={100} height={56} alt="ZwiftTech logo" />
          </Link>
          <div className="hidden sm:flex flex-row items-center gap-x-6 md:gap-x-10">
            <div className="flex flex-row gap-x-3 md:gap-x-6 font-semibold">
              {/* <Link
                href="/"
                className="text-center border-b-2 border-transparent hover:border-custom-purple hover:text-custom-purple transition-all duration-150">
                About Us
              </Link>
              <Link
                href="/"
                className="text-center border-b-2 border-transparent hover:border-custom-purple hover:text-custom-purple transition-all duration-150">
                Our Blog
              </Link> */}
              <Link
                href="/projects"
                className="text-center border-b-2 border-transparent hover:border-custom-purple hover:text-custom-purple transition-all duration-150">
                Projects
              </Link>
              {/* <Link
                href="/"
                className="text-center border-b-2 border-transparent hover:border-custom-purple hover:text-custom-purple transition-all duration-150">
                Features
              </Link>
              <Link
                href="/"
                className="text-center border-b-2 border-transparent hover:border-custom-purple hover:text-custom-purple transition-all duration-150">
                Pricing
              </Link> */}
            </div>
            <Link
              href="/#contacts"
              className="bg-custom-black text-white px-6 py-2 rounded-full min-w-[130px] text-center hover:bg-custom-purple active:scale-95 transition-all duration-150 shadow-md">
              Contact Us
            </Link>
          </div>
          <SideBar />
        </nav>
        <div className="px-2 sm:px-8 md:px-12 lg:px-16">{children}</div>
      </body>
    </html>
  );
}
