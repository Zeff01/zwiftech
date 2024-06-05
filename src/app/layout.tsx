import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";
const lato = Lato({ subsets: ["latin"], weight: "400" });
import Button from "@/components/button/Button";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <body className={lato.className}>
        <nav className="w-full pt-6 px-8 flex flex-row justify-between">
          <Image src={"./logo.svg"} width={100} height={56} alt="ZwiftTech logo" />
          <div className="flex flex-row items-center gap-x-10">
            <div className="flex flex-row gap-x-6 font-semibold">
              <Link href="/">About Us</Link>
              <Link href="/">Our Blog</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Features</Link>
              <Link href="/">Pricing</Link>
            </div>
            <Button className="bg-custom-black">Contact Us</Button>
          </div>
        </nav>
        <div className="px-8">{children}</div>
      </body>
    </html>
  );
}
