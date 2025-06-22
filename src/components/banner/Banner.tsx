"use client";

import { motion } from "framer-motion";
import Navigation from "../navigation/Navigation";
import Image from "next/image";
import BubbleGroup from "../bubbles/BubbleGroup";
import { useHeaderState } from "@/hooks/useHeaderState";

export default function HeroSection() {
  const { isScrolled, onLightSection } = useHeaderState(20, 80); // 80 = nav height in px

  return (
    <section
      data-section-type="dark"
      className="w-full relative bg-[#6150eb] text-white pb-20 overflow-hidden h-screen">
      <header
        className={`fixed top-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? onLightSection
              ? "bg-white text-black shadow-md"
              : "bg-stone-950/60 text-white shadow-md"
            : "bg-transparent text-white pt-10"
        }`}>
        <Navigation scrollLight={{ isScrolled, onLightSection }} />
      </header>
      <BubbleGroup preset="team" />

      <div className="relative mt-10 w-full px-4 md:px-8 mx-auto max-w-screen-2xl min-h-screen grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center z-10">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.3, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}>
          <motion.div className="relative w-[420px] md:w-[440px] 2xl:w-[540px] aspect-square">
            <motion.div
              className="absolute top-[130px] md:top-[115px] 2xl:top-[317px] -right-[69px] md:-right-[65px] 2xl:-right-[150px] w-[820px] 2xl:w-[1500px] h-[424px] md:h-[460px] 2xl:h-[570px] -rotate-[45deg] opacity-1 z-11"
              style={{
                backgroundColor: "#8a7bff",
                transform: "rotate(-45deg)",
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "9999px",
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
              }}
              animate={{ backgroundColor: ["#8a7bff", "#c840b6", "#8a7bff"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-[-26px] rounded-full border-[1px] border-[#8a7bff] -z-10" />

            <motion.div
              className="relative z-30 w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}>
              <Image
                src="/hero-jzeff.svg"
                width={420}
                height={420}
                alt="Team"
                className="w-full h-full object-cover rounded-full border-8 border-white"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.3, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}>
          <motion.h1 className="text-4xl md:text-[63px] font-bold leading-[73px] lg:pe-16">
            Elevate Your <span className="text-fuchsia-700">Business </span>
            <br className="md:hidden" /> with Next-Generation
            <br className="md:hidden" /> Technology Solution
          </motion.h1>
          <motion.p className="mt-6 text-2xl text-white/90 max-w-2xl font-comic">
            We believe in empowering businesses with cutting-edge technology solutions tailored to
            your unique needs
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}>
        <motion.div
          className="flex flex-col items-center space-y-1 text-white"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
                repeat: Infinity,
              },
            },
          }}>
          {[0.8, 0.6, 0.4].map((opacity, index) => (
            <motion.svg
              key={index}
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              variants={{
                initial: { y: 0, opacity: 0 },
                animate: {
                  y: [0, 6, 0],
                  opacity: [0, opacity, 0],
                  transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                },
              }}>
              <path d="M10 12.586l4.95-4.95 1.414 1.414L10 15.414 3.636 9.05l1.414-1.414z" />
            </motion.svg>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
