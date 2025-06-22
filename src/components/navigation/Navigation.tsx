import Link from "next/link";
import SideBar from "../sideBar/SideBar";
import Image from "next/image";
type NavigationProps = {
  scrollLight: {
    isScrolled: boolean;
    onLightSection: boolean;
  };
};
export default function Navigation({ scrollLight }: NavigationProps) {
  const { isScrolled, onLightSection } = scrollLight;

  return (
    <nav className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 flex flex-row gap-x-4 justify-between items-center z-20">
      <Link href={"/"}>
        <Image
          src={
            isScrolled ? (onLightSection ? "/logo.svg" : "/white-logo.svg") : "/white-logo.svg" // or something neutral
          }
          width={100}
          height={56}
          className="w-[100px] h-[56px]"
          alt="ZwiftTech logo"
          priority
        />
      </Link>
      <div className="hidden sm:flex flex-row items-center gap-x-6 md:gap-x-10">
        <div className="flex flex-row gap-x-3 md:gap-x-6">
          <Link
            href="/projects"
            className="text-center hover:text-fuchsia-700 transition-all duration-150">
            Projects
          </Link>
        </div>
        <div className="flex flex-row gap-x-3 md:gap-x-6">
          <Link
            href="/#contacts"
            className="text-center hover:text-fuchsia-700 transition-all duration-150">
            Contacts
          </Link>
        </div>
        <div className="flex items-center justify-between w-full px-4 py-2">
          {/* Left side: Navigation links */}
          <div className="flex flex-row gap-x-3 md:gap-x-6">
            <Link
              href="#"
              className="text-center  hover:text-fuchsia-700 transition-all duration-150">
              Menu
            </Link>
          </div>

          {/* Right side: Burger icon */}
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
      <SideBar />
    </nav>
  );
}
