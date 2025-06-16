import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";
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
    <html lang="en" className="bg-gray-100">
      <body className={lato.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
