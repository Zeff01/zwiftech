"use client";

import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-blue-200 text-black">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1.05,
            textShadow: "0 0 20px rgba(255,255,255,0.4)",
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-extrabold tracking-wide text-black glow-text">
          Zwift Tech
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
