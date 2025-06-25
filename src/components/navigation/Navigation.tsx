import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PopupNavMenu from "./PopupNavMenu";

type NavigationProps = {
  scrollLight: {
    isScrolled: boolean;
    onLightSection: boolean;
  };
};

export default function Navigation({ scrollLight }: NavigationProps) {
  const { isScrolled, onLightSection } = scrollLight;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center z-20">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={isScrolled ? (onLightSection ? "/logo.svg" : "/white-logo.svg") : "/white-logo.svg"}
          width={100}
          height={56}
          className="w-[100px] h-[56px]"
          alt="ZwiftTech logo"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center gap-x-8">
        <Link href="/projects" className="hover:text-fuchsia-700 transition-all duration-150">
          Projects
        </Link>
        <Link href="/#contacts" className="hover:text-fuchsia-700 transition-all duration-150">
          Contacts
        </Link>
        <div
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:text-fuchsia-500">
          <span className="text-center">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className="sm:hidden flex items-center gap-2 cursor-pointer"
        onClick={() => setMenuOpen(true)}>
        <span className="text-sm">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <PopupNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}
