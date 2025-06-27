import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";
import PageLoaderProvider from "@/components/loader/PageLoaderProvider";

const lato = Lato({ subsets: ["latin"], weight: "400" });

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
    <html lang="en" className="bg-[#6150eb]">
      <body className={lato.className}>
        <PageLoaderProvider>{children}</PageLoaderProvider>
      </body>
    </html>
  );
}
