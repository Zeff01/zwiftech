"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall, Smartphone } from "lucide-react";

export default function Footer() {
  const parentVariants = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-12">
        {/* Logo and description - own row on mobile and tablet, 1st column on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 lg:hidden">
          <Image src="/zwift.png" width={120} height={35} alt="ZwiftTech logo" />
          <p className="text-gray-600 text-base leading-relaxed">
            Thank you for choosing <strong>ZwiftTech</strong>. Let&apos;s innovate and succeed
            together.
          </p>
        </motion.div>

        {/* Grid: 3 columns on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Desktop logo column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col gap-3">
            <Image src="/logo.svg" width={120} height={35} alt="ZwiftTech logo" />
            <p className="text-gray-600 text-base leading-relaxed">
              Thank you for choosing <strong>ZwiftTech</strong>. Let&apos;s innovate and succeed
              together.
            </p>
          </motion.div>

          {/* Products */}
          <motion.div
            className="flex flex-col gap-2"
            variants={parentVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show">
            <motion.p className="font-semibold text-gray-800" variants={childVariants}>
              Products
            </motion.p>
            {["Software Solutions", "AI Integration", "Business Tech", "Applete"].map((item) => (
              <motion.p key={item} className="text-gray-600" variants={childVariants}>
                {item}
              </motion.p>
            ))}
          </motion.div>

          {/* Partnerships */}
          <motion.div
            className="flex flex-col gap-2"
            variants={parentVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show">
            <motion.p className="font-semibold text-gray-800" variants={childVariants}>
              Partnerships
            </motion.p>
            {["Codebility", "BradWell", "Tapup"].map((item) => (
              <motion.p key={item} className="text-gray-600" variants={childVariants}>
                {item}
              </motion.p>
            ))}
          </motion.div>

          {/* Contact Us */}
          <motion.div
            id="contacts"
            className="flex flex-col gap-2"
            variants={parentVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show">
            <motion.p className="font-semibold text-gray-800" variants={childVariants}>
              Contact Us
            </motion.p>
            <motion.div variants={childVariants} className="flex items-center gap-2 text-gray-600">
              <Smartphone size={18} />
              <span>0921 090 0799</span>
            </motion.div>
            <motion.div variants={childVariants} className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <span>Codebility.dev@gmail.com</span>
            </motion.div>
            <motion.div variants={childVariants} className="flex items-center gap-2 text-gray-600">
              <PhoneCall size={18} />
              <span>(02) 8671-8943</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-200 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <motion.p
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="text-center w-full md:w-auto">
            © 2024 ZwiftTech. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center gap-2 text-center md:text-right w-full md:w-auto break-words"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}>
            <MapPin size={18} className="shrink-0" />
            <span className="break-words">
              Unit 1204, Discovery Suites, 25 ADB Ave, San Antonio, Pasig
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
