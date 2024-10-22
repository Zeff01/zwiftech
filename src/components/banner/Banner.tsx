"use client"
import Button from "../button/Button";
import GroupImages from "../groupImages/GroupImages";
import SectionContainer from "../sectionContainer/SectionContainer";
import { FaArrowDown } from "react-icons/fa6";
import { imagesData } from "@/lib/data";
import { Microsoft, IBM, Ebay, Amazon, Dropbox } from "../icons/Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter()
  return (
    <SectionContainer className="flex flex-col items-center gap-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-6xl text-center w-full max-w-[850px]">
        Elevate Your <span className="font-semibold text-custom-purple">Business</span> with{" "}
        <span className="font-semibold">Next-Generation Technology Solutions</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=" text-lg sm:text-xl text-center max-w-[675px]">
        We believe in empowering businesses with cutting-edge technology solutions tailored to your
        unique needs
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-lg sm:text-xl text-center text-custom-purple font-semibold">
        Meet the Leaders of ZwiftTech
      </motion.h2>
      <GroupImages imagesData={imagesData} />
      <Button onClick={() => router.push("/#technology")}>Get Started</Button>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-row w-full sm:w-auto justify-center">
        <div className="flex flex-col items-center  w-1/3 sm:w-[150px] max-w-[150px]">
          <p className="text-xl sm:text-3xl font-semibold">100+</p>
          <p className="font-semibold">Partnership</p>
        </div>
        <div className="flex flex-col items-center  w-1/3 sm:w-[150px] max-w-[150px] border-x-2 border-custom-black">
          <p className="text-xl sm:text-3xl font-semibold">83</p>
          <p className="font-semibold">Businesses</p>
        </div>
        <div className="flex flex-col items-center  w-1/3 sm:w-[150px] max-w-[150px]">
          <p className="text-xl sm:text-3xl font-semibold">4289</p>
          <p className="font-semibold">Product</p>
        </div>
      </motion.div>
      <Button variant="icon" onClick={() => router.push("/#team")}>
        <FaArrowDown className=" text-lg sm:text-xl" />
      </Button>
      <h3 className="font-bold text-custom-gray text-xl">Trusted by Job Holders from</h3>
      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="scale-75 sm:scale-100 flex flex-row items-center gap-x-3 sm:gap-x-6">
        <Microsoft />
        <IBM />
        <Ebay />
        <Amazon />
        <Dropbox />
      </motion.div>
    </SectionContainer>
  );
}
