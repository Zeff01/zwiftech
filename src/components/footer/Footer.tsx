"use client"
import Image from "next/image";
// import { Facebook, Github, LinkedIn, Twitter } from "../icons/Icons";
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall, Smartphone } from "lucide-react";

export default function Footer() {
  const parentVariants = {
    show: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay between children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full overflow-hidden">
      <div className="flex flex-col items-center sm:items-start sm:flex-row py-16 border-t border-b border-gray-300 gap-y-6">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.4 }}
          className="max-w-[300px] flex flex-col gap-y-2">
          <Image
            src={"/zwift.png"}
            width={100}
            height={27}
            alt="ZwiftTech logo"
          />
          <p className="sm:text-lg">
            Thank you for choosing ZwiftTech. Let&apos;s innovate and succeed together.
          </p>
        </motion.div>
        <div className="flex flex-row flex-grow justify-center sm:justify-around sm:text-lg gap-3 flex-wrap">
          <motion.div
            className="min-w-[120px] flex flex-col items-center"
            variants={parentVariants}
            initial="hidden"
            whileInView="show">
            <motion.p className="font-semibold" variants={childVariants}>
              Products
            </motion.p>
            <motion.p variants={childVariants}>Software Solutions</motion.p>
            <motion.p variants={childVariants}>AI integration</motion.p>
            <motion.p variants={childVariants}>Business Tech Integration</motion.p>           
          </motion.div>          
          <motion.div
            className="min-w-[120px] flex flex-col items-center"
            variants={parentVariants}
            initial="hidden"
            whileInView="show">
            <motion.p className="font-semibold" variants={childVariants}>
              Partnerships
            </motion.p>
            <motion.p variants={childVariants}>Codebility</motion.p>
            <motion.p variants={childVariants}>Applete</motion.p>
            <motion.p variants={childVariants}>BradWell</motion.p>           
          </motion.div>
          <motion.div
            id="contacts"
            className="min-w-[120px] flex flex-col"
            variants={parentVariants}
            initial="hidden"
            whileInView="show">
            <motion.p className="font-semibold" variants={childVariants}>
              Contact Us
            </motion.p>
            <motion.p variants={childVariants} className="flex flex-row gap-x-2 items-center"><Smartphone size={18} /> 
            <span>
            0921 090 0799
            </span>
            </motion.p>
            <motion.p variants={childVariants} className="flex flex-row gap-x-2 items-center"><Mail size={18} /> 
            <span>
            Codebility.dev@gmail.com
            </span>
            </motion.p>
            <motion.p variants={childVariants} className="flex flex-row gap-x-2 items-center"><PhoneCall size={18} /> 
            <span>
            (02)8671−8943
            </span>
            </motion.p>           
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 pb-12 gap-3">
        <motion.p
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="text-custom-gray sm:text-lg text-center">
          © 2024 Zwift Tech. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="flex flex-row gap-x-3">
          {/* <Facebook />
          <Github />
          <LinkedIn />
          <Twitter /> */}
          <MapPin />
          <p>
          Unit 1204.  Discovery Suites, 25 ADB Avenue, san Antonio Pasig
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
