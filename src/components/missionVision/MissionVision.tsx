"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BackgroundImage } from "../backgroundImage/backgroundImage";

export default function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section
      data-section-type="light"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white to-gray-100 py-24 px-6 overflow-hidden">
      <BackgroundImage
        src="/mission-left-image.svg"
        alt="Left background"
        y={leftY}
        position="left"
      />
      <BackgroundImage
        src="/mission-left-image.svg"
        alt="Right background"
        y={rightY}
        position="right"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ Animated Text Column */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}>
          <h4 className="text-[35px] tracking-wide text-[#6150eb] font-medium">What we believe</h4>
          <h2 className="text-4xl md:text-[63px] font-bold text-[#6150eb] leading-none">
            Our Mission and Vision
          </h2>
          <button className="mt-10 px-10 py-3 border-2 border-[#6150eb] text-[#6150eb] font-medium rounded-full hover:bg-[#5d4efc] hover:text-white transition">
            ABOUT US
          </button>
        </motion.div>

        {/* ✅ Animated Image Column */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}>
          {/* Mission */}
          <div className="flex items-center gap-6">
            <div className="relative w-52 h-52">
              <div className="absolute inset-[-10px] rounded-full border-[2px] border-[#8a7bff] z-10" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                <Image
                  src="/mission-bulb.svg"
                  alt="Mission"
                  fill
                  className="object-contain rounded-full z-10 relative"
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#5d4efc] font-bold uppercase text-sm">Mission</h4>
              <p className="text-gray-700 mt-1 max-w-sm">
                To deliver exceptional value through technology.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-center gap-6">
            <div className="relative w-52 h-52">
              <div className="absolute inset-[-10px] rounded-full border-[2px] border-[#8a7bff] z-10" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                <Image
                  src="/vision-bulb.svg"
                  alt="Vision"
                  fill
                  className="object-contain rounded-full z-10 relative"
                />
              </div>
            </div>
            <div>
              <h4 className="text-[#5d4efc] font-bold uppercase text-sm">Vision</h4>
              <p className="text-gray-700 mt-1 max-w-sm">
                To share our expertise across different industries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
