"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InnovationStats() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      setMousePos({ x: relativeX - 350, y: relativeY - 350 }); // 350 = half of 700px
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full bg-[#8c52ff] overflow-hidden" ref={containerRef}>
      {/* Floating Circle - Top Left (mouse follows) */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-[#8e82ed] rounded-full opacity-40 z-0"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating Circle - Bottom Right */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-[#8e82ed] rounded-full opacity-40 z-0"
        style={{ bottom: -200, right: -150 }}
        animate={{
          x: [0, 15, 0, -15, 0],
          y: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Oval Ring - Top Right */}
      <div
        className="absolute z-10"
        style={{
          top: "220px",
          right: "-80px",
          transform: "rotate(-45deg)",
        }}>
        <div className="w-[240px] h-[120px] border-[2px] border-[#8a7bff] rounded-full" />
      </div>

      {/* Oval Ring - Bottom Left */}
      <div
        className="absolute z-10"
        style={{
          bottom: "50px",
          left: "-100px",
          transform: "rotate(-45deg)",
        }}>
        <div className="w-[200px] h-[100px] border-[2px] border-[#8a7bff] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        {/* Left Text */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <div>
            <p className="text-lg font-medium">We Help You</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Next <br />
              Innovation.
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-100 max-w-lg">
            At ZwiftTech, we empower businesses with tailored technology solutions. Our services
            include software development, data analytics, and cloud integration, helping clients
            streamline operations and drive growth.
          </p>
        </motion.div>

        {/* Right Stats */}
        <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
          <div className="grid grid-cols-2 gap-20">
            <StatCard number={100} label="Partnerships" delay={0.1} />
            <StatCard number={83} label="Businesses" delay={0.2} />
          </div>
          <StatCard number={4289} label="Products" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  number: number;
  label: string;
  delay?: number;
};

function StatCard({ number, label, delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * number);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className="relative bg-white text-black rounded-full w-44 h-44 flex flex-col items-center justify-center"
      style={{
        boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.3)", // heavier bottom shadow
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false }}>
      <div className="absolute inset-[-10px] rounded-full border-[1px] border-[#8a7bff] z-[1]" />
      <p className="font-bold text-3xl">{count.toLocaleString()}</p>
      <p className="text-sm mt-1">{label}</p>
    </motion.div>
  );
}
