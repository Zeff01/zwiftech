"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#6150eb] via-[#8a7bff] to-[#6150eb] text-white overflow-hidden">
      {/* Center ripples */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute rounded-full"
          style={{
            width: 120,
            height: 120,
            border: "2px solid #c840b640", // lower opacity from start
            opacity: 0, // start fully transparent
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
          transition={{
            duration: 2.8,
            ease: "easeOut",
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Radar HUD Ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 260,
          height: 260,
          background: `
            conic-gradient(
              from 0deg,
              #f4beff 0deg 8deg,
              transparent 8deg 40deg,
              #f4beff 40deg 48deg,
              transparent 48deg 80deg,
              #f4beff 80deg 88deg,
              transparent 88deg 360deg
            )
          `,
          WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 61%)",
          maskImage: "radial-gradient(circle, transparent 60%, black 61%)",
          filter: "blur(1px)",
          opacity: 0,
        }}
        initial={{ opacity: 0, rotate: 0, scale: 1 }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Center pulse */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-[#fff] blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Logo: fade/scale in, then infinite pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="relative z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <Image
            src="/logo.svg"
            width={100}
            height={56}
            className="w-[100px] h-[56px] drop-shadow-[0_0_20px_#fff]"
            alt="ZwiftTech logo"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Floating holograms */}
      <motion.div
        className="absolute top-1/4 left-[15%] w-24 h-24 border border-[#f4beff] rounded-full blur-sm z-10"
        animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-[#f4beff] rounded-full blur-sm z-10"
        animate={{ y: [0, 12, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating bubbles */}
      {[...Array(16)].map((_, i) => {
        const size = 12 + Math.random() * 28;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        return (
          <motion.div
            key={`bubble-${i}`}
            className="absolute bg-[#f4beff]/30 rounded-full blur-md z-10"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 20, 0],
              x: [0, 10 - Math.random() * 20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random(),
            }}
          />
        );
      })}

      {/* Glow trails */}
      {[...Array(6)].map((_, i) => {
        const left = 10 + i * 15;
        return (
          <motion.div
            key={`trail-${i}`}
            className="absolute w-[2px] h-16 bg-[#ffffff55] rounded-full blur-sm z-0"
            style={{
              left: `${left}%`,
              top: `-10%`,
            }}
            animate={{ top: ["-10%", "110%"], opacity: [0.1, 0.6, 0] }}
            transition={{
              duration: 3 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </motion.div>
  );
}
