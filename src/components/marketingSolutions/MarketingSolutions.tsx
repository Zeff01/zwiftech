import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BackgroundImage } from "../backgroundImage/backgroundImage";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  // Stronger parallax movement
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  const services = [
    {
      title: "Custom Software Development",
      description: "End-to-end development from ideation to deployment.",
      icon: "/ser-software-development.svg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Seamless migration and integration services & Optimized cloud management and support",
      icon: "/ser-cloud-solutions.svg",
    },
    {
      title: "IT Consulting",
      description: "Technology implementation and optimization & Ongoing support and maintenance.",
      icon: "/ser-it-consulting.svg",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security assessments. Advanced threat detection and response.",
      icon: "/ser-cyversecurity.svg",
    },
  ];

  return (
    <section
      data-section-type="light"
      ref={sectionRef}
      className="relative bg-white py-24 overflow-hidden">
      {/* Background decorations */}
      <BackgroundImage
        src="/service-left-image.svg"
        alt="Left background"
        y={leftY}
        position="left"
      />
      <BackgroundImage
        src="/service-right-image.svg"
        alt="Right background"
        y={rightY}
        position="right"
      />
      <motion.div
        className="text-center mb-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
        <p className="text-[35px] text-[#6150eb] font-medium">What We Offer</p>
        <h2 className="text-[63px] font-bold text-[#6150eb] mt-2">Our Technology Solutions</h2>
      </motion.div>
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-fit mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 text-center transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <Image
              src={service.icon}
              alt={service.title}
              width={80}
              height={80}
              className="mb-10 mx-auto"
            />
            <h3 className="text-lg font-semibold text-[#393080] mb-8">{service.title}</h3>
            <p className="text-[16px] text-[#3c3a49]">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
