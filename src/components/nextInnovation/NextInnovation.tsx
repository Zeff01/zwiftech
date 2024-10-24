import Image from "next/image";
import SectionContainer from "../sectionContainer/SectionContainer";
import { motion } from "framer-motion";

export default function NextInnovation() {
  return (
    <SectionContainer className="flex flex-col gap-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
        <div className="w-full sm:w-[400px] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-xl">We Help You</p>
            <p className="font-bold text-4xl text-custom-purple">Your Next Innovation.</p>
          </div>
          <p className="text-lg">
          At ZwiftTech, we empower businesses with tailored technology solutions. Our services include software development, data analytics, and cloud integration, helping clients streamline operations and drive growth.
          </p>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-custom-purple h-[200px] sm:h-[250px] w-full sm:flex-grow flex flex-row items-center justify-center rounded-2xl shadow-lg">
          <p className="text-white text-4xl sm:text-6xl text-center">WE HELP YOU </p>
        </motion.div>
      </div>
      <div className="w-full aspect-[2.6] flex items-center">
        <Image
          src={
            "/group-of-umbrellas.png"
          }
          width={1300}
          height={500}
          alt="Group of Umbrellas"
          className="rounded-2xl shadow-lg w-full xsm:aspect-[1.4] sm:aspect-[1.8] md:aspect-[2.2] lg:aspect-[2.6]"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-custom-white flex flex-col lg:flex-row justify-center items-center gap-x-10 rounded-2xl shadow-sm p-4 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-4xl xsm:text-5xl sm:text-[64px] md:text-[72px] lg:text-[90px] text-custom-purple font-[900]">
          TRANSFORM
        </motion.p>
        <div className="flex flex-col items-center text-4xl sm:text-5xl md:text-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className="font-liu">
            YOUR
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
            className="font-[900] font-lexend">
            BRAND
          </motion.p>
        </div>
      </div>
    </SectionContainer>
  );
}