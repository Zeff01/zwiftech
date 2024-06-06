"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";

export default function SideBar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  function toggleSidebar() {
    const sidebar = sidebarRef.current;
    const cover = coverRef.current;
    if (!sidebar || !cover) return;
    const hasSideBarShow = sidebar.classList.contains("sideBarShow");
    if (hasSideBarShow) {
      sidebar.classList.replace("sideBarShow", "sideBarHide");
      cover.classList.replace("showCover", "hideCover");
    } else {
      sidebar.classList.replace("sideBarHide", "sideBarShow");
      cover.classList.replace("hideCover", "showCover");
    }
  }

  useLayoutEffect(() => {
    const sidebar = sidebarRef.current;
    const cover = coverRef.current;
    if (!sidebar || !cover) return;
    sidebar.classList.add("sideBarHide");
    cover.classList.add("hideCover");
  }, []);

  return (
    <div className="sm:hidden">
      <RxHamburgerMenu
        className="sm:hidden text-2xl"
        role="button"
        tabIndex={1}
        onClick={toggleSidebar}
      />
      <div
        ref={coverRef}
        className="z-20 bg-custom-black/40 transition-all duration-200"
        onClick={toggleSidebar}
      />
      <div
        ref={sidebarRef}
        className="fixed top-0 h-screen w-full max-w-[200px] bg-custom-white z-[50] flex flex-col gap-y-4 p-6 shadow-xl font-semibold transition-all duration-200">
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
      </div>
    </div>
  );
}
