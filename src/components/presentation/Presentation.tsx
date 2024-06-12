import CardWithImage from "../basicCard/CardWithImage";
import SectionContainer from "../sectionContainer/SectionContainer";
import { cardWithImageData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <SectionContainer className="flex flex-col gap-y-10">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center">
        <p className="font-bold text-lg sm:text-xl">Our Services</p>
        <p className="font-bold  text-2xl sm:text-3xl text-custom-purple text-center">
        Innovative software and cloud solutions for streamlined, growth-driven operations.
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {cardWithImageData.map((d, i) => (
          <CardWithImage key={i} {...d} />
        ))}
      </div>
    </SectionContainer>
  );
}
