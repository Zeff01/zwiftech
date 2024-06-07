"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((o) => !o);
  }

  return (
    <div className="sm:hidden">
      <RxHamburgerMenu
        className="sm:hidden text-2xl"
        role="button"
        tabIndex={1}
        onClick={toggleSidebar}
      />
      <div
        className={`${isOpen ? "fixed top-0 left-0 w-screen h-screen" : "hidden"} z-20 bg-custom-black/40 transition-all duration-200`}
        onClick={toggleSidebar}
      />
      <div
        className={`${isOpen ? "right-0" : "right-[-200px]"} fixed top-0 h-screen w-full max-w-[200px] bg-custom-white z-[50] flex flex-col gap-y-4 p-6 shadow-xl font-semibold transition-all duration-200`}>
        <Link href="/" onClick={toggleSidebar}>
          About Us
        </Link>
        <Link href="/" onClick={toggleSidebar}>
          Our Blog
        </Link>
        <Link href="/" onClick={toggleSidebar}>
          Projects
        </Link>
        <Link href="/" onClick={toggleSidebar}>
          Features
        </Link>
        <Link href="/" onClick={toggleSidebar}>
          Pricing
        </Link>
        <Link href="/" onClick={toggleSidebar}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
