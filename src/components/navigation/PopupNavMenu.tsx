// components/PopupNavMenu.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, Smartphone, Mail, PhoneCall, Box, Handshake } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const products = ["Software Solutions", "AI Integration", "Business Tech", "Applete"];
const partners = ["Codebility", "BradWell", "Tapup"];

type PopupNavMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PopupNavMenu({ isOpen, onClose }: PopupNavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="popup-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#8c52ff] text-white z-50 flex flex-col px-6 py-10 overflow-auto">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            aria-label="Close menu">
            <X size={32} />
          </button>

          <div className="flex flex-col lg:flex-row justify-between gap-12 w-full max-w-7xl mx-auto">
            {/* Left Section: Logo + Mission + Menu Links */}
            <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
              <div className="flex flex-col items-start gap-4">
                <Image src="/white-logo.svg" width={120} height={35} alt="ZwiftTech logo" />
                <p className="text-white text-base leading-relaxed max-w-md">
                  Thank you for choosing <strong>ZwiftTech</strong>. Let&apos;s innovate and succeed
                  together.
                </p>
              </div>

              <div>
                <p className="uppercase text-xs tracking-widest text-white/70 mb-2">Navigation</p>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}>
                      <Link
                        href={item.href}
                        className="text-xl font-semibold tracking-wide hover:underline"
                        onClick={onClose}>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 lg:my-0 lg:mx-8 h-px lg:h-auto w-full lg:w-px bg-white/30" />

            {/* Right Section: Products, Partnerships, Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-1/2">
              <div>
                <p className="uppercase text-xs tracking-widest text-white/70 mb-2">Products</p>
                {products.map((item) => (
                  <p
                    key={item}
                    className="text-white text-sm mb-1 flex items-center gap-2 transition-all duration-200 hover:translate-x-1">
                    <Box
                      size={14}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <p className="uppercase text-xs tracking-widest text-white/70 mb-2">Partnerships</p>
                {partners.map((item) => (
                  <p
                    key={item}
                    className="text-white text-sm mb-1 flex items-center gap-2 transition-all duration-200 hover:translate-x-1">
                    <Handshake
                      size={14}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                    {item}
                  </p>
                ))}
              </div>
              <div className="sm:col-span-2 mt-4">
                <p className="uppercase text-xs tracking-widest text-white/70 mb-2">Contact Us</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} /> <span>0921 090 0799</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} /> <span>Codebility.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall size={18} /> <span>(02) 8671-8943</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
