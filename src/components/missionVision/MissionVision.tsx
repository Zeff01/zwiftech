import SectionContainer from "../sectionContainer/SectionContainer";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <SectionContainer className="flex flex-col gap-y-16 sm:gap-y-24">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0">
        <div className="sm:basis-5/12 flex flex-col justify-between">
          <p className="font-[500] text-2xl sm:text-3xl">Mission</p>
          <p className="sm:text-lg">Lorem Ipsum is simply dummy</p>
        </div>
        <div className="sm:basis-6/12 flex flex-col  gap-y-3 sm:gap-y-6">
          <p className="font-[500] text-2xl sm:text-3xl">
            Empowering Businesses Through Innovative Technology
          </p>
          <div className="flex flex-col gap-y-2 sm:gap-y-4">
            <p className="sm:text-lg">
              At Tech Innovators, our mission is to empower businesses by providing cutting-edge
              technology solutions that drive growth, efficiency, and security.{" "}
            </p>
            <p className="sm:text-lg">
              We are committed to delivering exceptional value through our expert services and
              innovative products, helping our clients navigate the complexities of the digital
              landscape with confidence.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0">
        <div className="sm:basis-5/12 flex flex-col justify-between">
          <p className="font-[500] text-2xl sm:text-3xl">Vision</p>
          <p className="sm:text-lg">Lorem Ipsum is simply dummy</p>
        </div>
        <div className="sm:basis-6/12 flex flex-col gap-y-3 sm:gap-y-6">
          <p className="font-[500] text-2xl sm:text-3xl">
            Leading the Future of Technological Advancement
          </p>
          <div className="flex flex-col gap-y-2 sm:gap-y-4">
            <p className="sm:text-lg">
              Our vision is to be a global leader in technological innovation, setting new standards
              for excellence in the industry. We aspire to create a future where businesses of all
              sizes can leverage the power of advanced technology to achieve their goals and
              transform their operations.
            </p>
            <p className="sm:text-lg">
              By fostering a culture of continuous learning and innovation, we aim to shape the
              future of technology and drive meaningful progress for our clients and communities
              worldwide.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
