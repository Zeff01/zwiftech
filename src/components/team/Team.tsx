import TeamCard from "../teamCard/TeamCard";
import SectionContainer from "../sectionContainer/SectionContainer";
import { motion } from "framer-motion";
import { teamCardData } from "@/lib/data";

export default function Team() {
  return (
    <SectionContainer className="flex flex-col gap-y-12" id="team">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-y-4">
        <p className="text-lg sm:text-xl font-bold text-center">
          Our Passionate team of creative professionals
        </p>
        <p className="font-bold text-2xl sm:text-4xl text-custom-purple">ZwiftTech’s Team</p>
        <p className="sm:text-lg max-w-[700px] text-center">
          At ZwiftTech, we pride ourselves on our team of world-class talents. Our experts bring
          unparalleled skill and innovation to every project, ensuring exceptional results for our
          clients. With a diverse team of industry leaders, we consistently deliver cutting-edge
          solutions that set the standard in technology.
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center">
        {teamCardData.map((d, i) => (
          <TeamCard key={i} {...d} />
        ))}
      </div>
      <div className="py-16 flex flex-col gap-y-3">
        <h2 className="font-bold text-3xl sm:text-4xl text-custom-purple text-center sm:text-start">
          Connect With Us
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-x-16 gap-y-6">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="sm:text-lg max-w-[700px] text-center sm:text-start">
            Discover how ZwiftTech&apos;s world-class talents can transform your business. Reach out
            to us for tailored technology solutions that drive innovation and success. We&apos;re
            here to help you navigate the digital landscape and achieve your goals. Let&apos;s
            connect and create the future together.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-row gap-x-4">
            <Button variant="outline">Learn More</Button>
            <Button>Get Started</Button>
          </motion.div> */}
        </div>
      </div>
    </SectionContainer>
  );
}
