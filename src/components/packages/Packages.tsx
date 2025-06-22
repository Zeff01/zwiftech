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
        className="text-[30px] font-light ">
        Pick a Plan
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[50px] font-extrabold mb-10 max-w-2xl mx-auto ">
        Our Services & Packages
      </motion.h2>
      <PackageList />
    </SectionContainer>
  );
}
