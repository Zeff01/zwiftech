"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";
import { StarIcon } from "lucide-react";
import { BackgroundImage } from "../backgroundImage/backgroundImage";

const testimonials = [
  {
    id: 1,
    name: "JOHN",
    text: "The team is an excellent communicator and we thoroughly enjoyed working with them! 10/10 would recommend.",
  },
  {
    id: 2,
    name: "JOHN",
    text: "The team is an excellent communicator and we thoroughly enjoyed working with them! 10/10 would recommend.",
  },
  {
    id: 3,
    name: "JOHN",
    text: "The team is an excellent communicator and we thoroughly enjoyed working with them! 10/10 would recommend.",
  },
];

// Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section
      data-section-type="light"
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-6 md:px-20 bg-[#f7f8fc]">
      {/* Background decorations */}
      <BackgroundImage
        src="/testi-left-image.svg"
        alt="Left background"
        y={leftY}
        position="left"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}>
          <p className="text-[35px] tracking-wide text-violet-600 font-medium">Testimonials</p>
          <h2 className="text-4xl md:text-[63px] font-bold text-violet-700">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-md">
            Hear from business owners and executives who have trusted us to build their custom
            software solutions.
          </p>
          <button className="mt-20 px-10 py-3 border-2 border-[#6150eb] text-[#6150eb] font-medium rounded-full hover:bg-[#5d4efc] hover:text-white transition">
            VIEW MORE
          </button>
        </motion.div>

        <div className="flex flex-col gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}>
              <Card
                className="bg-[#d4c2f9] p-6 rounded-xl"
                style={{
                  boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.1)",
                }}>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-xl text-violet-800" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-black font-semibold leading-relaxed">{t.text}</p>
                  <span className="text-sm text-black font-medium">{t.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
