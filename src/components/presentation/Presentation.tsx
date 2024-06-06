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
        <p className="font-bold text-lg sm:text-xl">Dummy Data</p>
        <p className="font-bold  text-2xl sm:text-4xl text-custom-purple text-center">
          Lorem Ipsum is a simply Dummy Data
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
