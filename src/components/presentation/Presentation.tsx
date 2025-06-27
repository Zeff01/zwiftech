"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BubbleGroup from "../bubbles/BubbleGroup";

const founders = [
  { name: "Collaborate with our team", image: "/col-team.svg" },
  { name: "Build your business", image: "/plan-busi.svg" },
  { name: "Plan your future endeavor", image: "/future.svg" },
  { name: "Manage your team", image: "/manage-team.svg" },
];

export default function TeamSection() {
  return (
    <section
      data-section-type="dark"
      className="relative  bg-[#8c52ff] overflow-hidden text-white py-24">
      <BubbleGroup preset="presentation" />
      {/* Main Content */}
      <div className="relative z-10 w-full mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-[35px] font-medium mb-2">
          Our Services
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-[63px] font-bold mb-10 max-w-2xl mx-auto leading-none">
          Innovative software and cloud solutions for streamlined, growth-driven operations.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-fit mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px 10px rgba(203, 140, 255, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover object-top"
                />
              </motion.div>
              <p className="mt-4 text-white text-lg font-semibold text-center">{founder.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
