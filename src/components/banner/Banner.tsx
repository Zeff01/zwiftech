"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "../navigation/Navigation";
import Image from "next/image";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move effect for floating circle
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const { scrollY } = useScroll();
  const yHeading = useTransform(scrollY, [0, 300], [0, -20]);
  const yParagraph = useTransform(scrollY, [0, 300], [0, -10]);

  return (
    <section
      className="w-full relative bg-[#6150eb] text-white pb-20 overflow-hidden h-screen"
      ref={containerRef}>
      <header
        className={`${
          isScrolled
            ? "bg-stone-950/50 shadow-md fixed top-0 w-full z-[999] transition-all duration-300 pt-0"
            : "bg-transparent pt-10"
        }`}>
        <Navigation />
      </header>

      {/* Floating Circle */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-[#7464f6] rounded-full opacity-40 z-0"
        style={{ top: -100, right: -50 }}
        animate={
          mousePos.x && mousePos.y
            ? {
                x: mousePos.x - (containerRef.current?.offsetWidth || 0) + 350,
                y: mousePos.y - 350,
              }
            : {
                x: [0, -20, 0, 20, 0],
                y: [0, -10, 0, 10, 0],
              }
        }
        transition={
          mousePos.x && mousePos.y
            ? {
                type: "spring",
                stiffness: 50,
                damping: 20,
              }
            : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      {/* Oval Ring */}
      <div
        className="absolute z-10"
        style={{
          top: `${100 - offsetY * 0.2}px`,
          right: `-${100 - offsetY * 0.1}px`,
          transform: "rotate(-45deg)",
        }}>
        <motion.div
          className="w-[240px] h-[120px] border-[2px] rounded-full"
          animate={{ borderColor: ["#705ff3", "#6150eb", "#705ff3"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Floating elements */}
      {[
        { top: "30%", left: "20%" },
        { top: "50%", left: "70%" },
        { top: "70%", left: "10%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white/20 rounded-full z-10"
          style={{ top: pos.top, left: pos.left }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative -mt-20 w-full px-4 md:px-8 mx-auto max-w-screen-2xl min-h-screen grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center z-10">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delayChildren: 0.3, staggerChildren: 0.2 }}
          viewport={{ once: false, amount: 0.6 }}>
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

            <motion.div
              className="absolute inset-[-26px] rounded-full border-[1px] -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ borderColor: "#8a7bff" }}
            />

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#8a7bff] z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="relative z-30 w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}>
              <Image
                src="/zeff.png"
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
          viewport={{ once: false, amount: 0.6 }}>
          <motion.h1
            className="text-4xl md:text-[63px] font-bold leading-[73px] lg:pe-16"
            style={{ y: yHeading }}>
            Elevate Your <span className="text-fuchsia-700">Business </span>
            <br className="md:hidden" /> with Next-Generation
            <br className="md:hidden" /> Technology Solution
          </motion.h1>
          <motion.p
            className="mt-6 text-2xl text-white/90 max-w-2xl font-comic"
            style={{ y: yParagraph }}>
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
