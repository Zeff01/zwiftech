import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";
const lato = Lato({ subsets: ["latin"], weight: "400" });
import Button from "@/components/button/Button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export const metadata: Metadata = {
  title: "ZwiftTech",
  description: "Elevate Your Business with Next-Generation Technology Solutions",
  authors: {
    url: "https://staging.codebility.tech/", // NOTE: is this correct?
    name: "Codibility",
  },
  keywords: ["Zwift Tech", "ZwiftTech", "Codibility"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={lato.className}>
        <nav className="w-full pt-6 px-2 sm:px-8 flex flex-row justify-between items-center">
          <Image src={"./logo.svg"} width={100} height={56} alt="ZwiftTech logo" />
          <div className="hidden sm:flex flex-row items-center gap-x-6 md:gap-x-10">
            <div className="flex flex-row gap-x-3 md:gap-x-6 font-semibold">
              <Link href="/">About Us</Link>
              <Link href="/">Our Blog</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Features</Link>
              <Link href="/">Pricing</Link>
            </div>
            <Button className="bg-custom-black">Contact Us</Button>
          </div>
          <RxHamburgerMenu className="sm:hidden text-2xl" />
        </nav>
        <div className="px-2 sm:px-8">{children}</div>
      </body>
    </html>
  );
}
