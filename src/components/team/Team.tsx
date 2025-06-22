"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BubbleGroup from "../bubbles/BubbleGroup";

const founders = [
  { name: "Joanne Reyes", image: "/joanne.jpeg" },
  { name: "Armand Reyes", image: "/armand.jpeg" },
  { name: "Jzeff Kendrew Somera", image: "/jzeff.jpeg" },
  { name: "Sherwin Gonzales", image: "/sherwin.jpeg" },
];

export default function TeamSection() {
  return (
    <section
      data-section-type="dark"
      className="relative w-full bg-[#6150eb] overflow-hidden text-white py-24">
      <BubbleGroup preset="team" />
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[30px] font-light mb-2">
          Meet our Founders
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[50px] font-extrabold mb-10">
          ZwiftTech’s Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-16 text-lg font-light">
          At ZwiftTech, we empower businesses with tailored technology solutions. Our services
          include software development, data analytics, and cloud integration, helping clients
          streamline operations and drive growth.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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
                className="relative w-56 h-56 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover object-center"
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
