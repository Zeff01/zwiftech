// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Navigation from "../navigation/Navigation";
import Image from "next/image";
import BubbleGroup from "../bubbles/BubbleGroup";
import { useHeaderState } from "@/hooks/useHeaderState";

export default function HeroSection() {
  const { isScrolled, onLightSection } = useHeaderState(20, 80);

  return (
    <section
      data-section-type="dark"
      className="
        relative w-full bg-[#6150eb] text-white overflow-hidden
        pt-[120px] pb-20
        [@media(min-width:1600px)]:min-h-screen [@media(min-width:1600px)]:flex [@media(min-width:1600px)]:items-center
      ">
      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${
            isScrolled
              ? onLightSection
                ? "bg-white text-black shadow-md"
                : "bg-white/60 text-stone-900 shadow-md"
              : "bg-transparent text-white pt-10"
          }
        `}>
        <Navigation scrollLight={{ isScrolled }} />
      </header>

      <BubbleGroup preset="team" />

      <div
        className="
          relative w-full max-w-screen-2xl mx-auto px-4 md:px-8
          grid grid-cols-1 md:grid-cols-[40%_60%] 
          gap-y-8 gap-x-10
          md:gap-y-0
          items-start md:items-center
          z-10
        ">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}>
          <div className="relative w-[220px] sm:w-[300px] md:w-[440px] aspect-square">
            {/* blob hidden on small */}
            <div className="relative z-0">
              {/* Original glow ellipse */}
              <motion.div
                className="hidden lg:block absolute top-[359px] -right-[161px]
               w-[820px] h-[460px] md:w-[1500px] md:h-[460px]
               -rotate-[45deg] z-0"
                style={{ borderRadius: "9999px" }}
                animate={{ backgroundColor: ["#8a7bff", "#c840b6", "#8a7bff"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Radar sweep overlay */}
              <motion.div
                className="hidden lg:block absolute top-[359px] -right-[161px]
               w-[820px] h-[460px] md:w-[1500px] md:h-[460px]
               -rotate-[45deg] z-10 pointer-events-none"
                style={{
                  borderRadius: "9999px",
                  background: `conic-gradient(
        from 0deg,
        rgba(244, 190, 255, 0.15) 0deg 15deg,
        transparent 15deg 360deg
      )`,
                  WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 100%)",
                  maskImage: "radial-gradient(circle at center, black 50%, transparent 100%)",
                  filter: "blur(8px)",
                  opacity: 0.5,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
              />
            </div>

            <div className="absolute inset-[-20px] rounded-full border border-[#8a7bff] -z-10" />

            <motion.div
              className="relative z-10 w-full h-full rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}>
              <Image src="/hero-jzeff.svg" alt="Team" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl md:text-[63px] font-bold leading-snug md:leading-[73px]">
            Elevate Your <span className="text-fuchsia-700">Business</span>
            <br className="hidden md:block" />
            with Next-Generation <br className="hidden md:block" />
            Technology Solution
          </h1>
          <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto md:mx-0">
            We believe in empowering businesses with cutting-edge technology solutions tailored to
            your unique needs.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}>
        <div className="flex flex-col items-center space-y-1 text-white">
          {[0.8, 0.6, 0.4].map((o, i) => (
            <motion.svg
              key={i}
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              animate={{ y: [0, 6, 0], opacity: [0, o, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: i * 0.2 }}>
              <path d="M10 12.586l4.95-4.95 1.414 1.414L10 15.414 3.636 9.05l1.414-1.414z" />
            </motion.svg>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
