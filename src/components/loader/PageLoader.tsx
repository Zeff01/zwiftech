"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-200 text-white">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-wide text-black">
        <Image
          src="/logo.svg"
          width={100}
          height={56}
          className="w-[100px] h-[56px]"
          alt="ZwiftTech logo"
          priority
        />
      </motion.h1>
    </motion.div>
  );
}
