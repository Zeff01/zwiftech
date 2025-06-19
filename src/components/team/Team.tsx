"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const founders = [
  {
    name: "Joanne Reyes",
    image: "/joanne-reyes.png",
  },
  {
    name: "Armand Reyes",
    image: "/armand-reyes.png",
  },
  {
    name: "Jzeff Kendrew Somera",
    image: "/zeff.png",
  },
  {
    name: "Sherwin Gonzales",
    image: "/sherwin.png",
  },
];

export default function InnovationStats() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      setMousePos({ x: relativeX - 350, y: relativeY - 350 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full bg-[#6150eb] overflow-hidden text-white" ref={containerRef}>
      {/* Floating Background Effects */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-[#7464f6] rounded-full opacity-40 z-0"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] bg-[#7464f6] rounded-full opacity-40 z-0"
        style={{ bottom: -200, right: -150 }}
        animate={{
          x: [0, 15, 0, -15, 0],
          y: [0, 10, 0, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute z-10 top-[220px] right-[-80px] rotate-[-45deg]">
        <div className="w-[240px] h-[120px] border-[2px] border-[#8a7bff] rounded-full" />
      </div>
      <div className="absolute z-10 bottom-[50px] left-[-100px] rotate-[-45deg]">
        <div className="w-[200px] h-[100px] border-[2px] border-[#8a7bff] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-24 max-w-6xl mx-auto text-center">
        <h3 className="text-[35px] font-light mb-2">Meet our Founders</h3>
        <h2 className="text-[63px] font-extrabold mb-6">ZwiftTech’s Team</h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg font-light">
          At ZwiftTech, we empower businesses with tailored technology solutions. Our services
          include software development, data analytics, and cloud integration, helping clients
          streamline operations and drive growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="flex flex-col items-center">
              <div className="relative w-52 h-52">
                {/* Ring Layer */}
                <div className="absolute inset-[-10px] rounded-full border-[2px] border-[#8a7bff] z-10" />

                {/* Image Layer */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 150px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <p className="mt-4 font-semibold text-lg">{founder.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
