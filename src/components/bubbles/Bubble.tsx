"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BubbleProps {
  className?: string;
  speed?: "slow" | "medium" | "fast";
  direction?: "y" | "x" | "xy";
  rotate?: boolean;
  delayOffset?: number;
}

export default function Bubble({
  className = "",
  speed = "medium",
  direction = "y",
  rotate = false,
  delayOffset = Math.random(),
}: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = speed === "slow" ? 50 : speed === "fast" ? 200 : 100;

  const y = useTransform(scrollYProgress, [0, 1], [0, direction.includes("y") ? distance : 0]);
  const x = useTransform(scrollYProgress, [0, 1], [0, direction.includes("x") ? distance : 0]);
  const r = useTransform(scrollYProgress, [0, 1], ["0deg", rotate ? "45deg" : "0deg"]);

  const delay = delayOffset * 2;

  return (
    <motion.div
      ref={ref}
      style={{
        translateX: x,
        translateY: y,
        rotate: rotate ? r : undefined,
      }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    />
  );
}
