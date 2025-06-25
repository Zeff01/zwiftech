import { motion } from "framer-motion";
import SectionContainer from "../sectionContainer/SectionContainer";
import PackageList from "./PackageList";

export default function Packages() {
  return (
    <SectionContainer className="flex flex-col items-center " id="packages">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-[35px] font-medium ">
        Pick a Plan
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-[63px] font-bold mb-10  mx-auto leading-tight ">
        Our Services & Packages
      </motion.h2>
      <PackageList />
    </SectionContainer>
  );
}
