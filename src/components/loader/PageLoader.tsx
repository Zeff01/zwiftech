"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-200 text-white">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-wide text-black">
        Zwift Tech
      </motion.h1>
    </motion.div>
  );
}
