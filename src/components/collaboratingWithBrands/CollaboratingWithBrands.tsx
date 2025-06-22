"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  { name: "Brand One", image: "/brand.svg" },
  { name: "Brand Two", image: "/brand.svg" },
  { name: "Brand Three", image: "/brand.svg" },
  { name: "Brand Four", image: "/brand.svg" },
  { name: "Brand Five", image: "/brand.svg" },
  { name: "Brand Six", image: "/brand.svg" },
  { name: "Brand Seven", image: "/brand.svg" },
  { name: "Brand Eight", image: "/brand.svg" },
  { name: "Brand Nine", image: "/brand.svg" },
  { name: "Brand Ten", image: "/brand.svg" },
  { name: "Brand Eleven", image: "/brand.svg" },
  { name: "Brand Twelve", image: "/brand.svg" },
];

export default function CollaboratingWithBrands() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 1;
    let frame: number;

    const autoScroll = () => {
      container.scrollLeft += scrollAmount;
      if (
        container.scrollLeft + container.offsetWidth >= container.scrollWidth ||
        container.scrollLeft <= 0
      ) {
        scrollAmount = -scrollAmount;
      }
      frame = requestAnimationFrame(autoScroll);
    };

    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-[#6150eb] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[63px] font-bold mb-4">
          Collaborating with Brands
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 mb-12">
          Here are some of the brands we&apos;ve worked with over the years.
        </motion.p>

        <div ref={containerRef} className="overflow-hidden whitespace-nowrap flex justify-center">
          <div
            className="grid grid-rows-3 auto-cols-max gap-8 animate-none justify-items-center content-center"
            style={{ display: "grid", gridAutoFlow: "column", width: "max-content" }}>
            {brands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-40 h-24 flex justify-center items-center bg-white">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
