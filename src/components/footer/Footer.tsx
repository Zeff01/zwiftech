import Image from "next/image";
import { Facebook, Github, LinkedIn, Twitter } from "../icons/Icons";
import { motion } from "framer-motion";

export default function Footer() {

  const parentVariants = {
    show: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay between children animations
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full overflow-hidden">
      <div className="flex flex-col items-center sm:items-start sm:flex-row py-16 border-t border-b border-gray-300 gap-y-6">
        <motion.div 
        initial={{
          opacity:0,
          x: -100
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{duration: 0.4}}
        className="max-w-[300px] flex flex-col gap-y-2">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/de1f/4ce8/781ecf0623ef81158eb27a8e275d1b81?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5mLxkHK650GsA3mKD35G3gw23RMIBYP-Tu1vAYpX4N85uONXB9o1nAiCgA7UQ8WMZ8bj2ZAW7qK3fMOxEiRQn5OHQzCG8qL4FpaT6JsM7hg4MgUh~xGnIXFKANhK5JczAEJ8axuChOPxtolNUT18sNWbe6L-NVAHjSF74SS93AcABN9M1RwYTOQYX9czEunQtRzpaU6hIfTh3ST2kXzGKTA0yIHCPOKMOucZdcULZ4rq9rQ8dIiVDG~xO9yVyLp~1Lr9JV9l5-G~-2x9F5RMxPNXMOA~rlwgL5vwamO4DJRuuXhyqs9vW0jqcGEJZaaWbrXWOsvnzl~rLkw0jkuXA__"
            }
            width={100}
            height={27}
            alt="ZwiftTech logo"
          />
          <p className="sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry
          </p>
        </motion.div>
        <div className="flex flex-row flex-grow justify-center sm:justify-around sm:text-lg gap-3 flex-wrap">
        <motion.div
          className="min-w-[120px] flex flex-col items-center"
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
        >
          <motion.p className="font-semibold" variants={childVariants}>Product</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
        </motion.div>
        <motion.div
          className="min-w-[120px] flex flex-col items-center"
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
        >
          <motion.p className="font-semibold" variants={childVariants}>Company</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
        </motion.div>
        <motion.div
          className="min-w-[120px] flex flex-col items-center"
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
        >
          <motion.p className="font-semibold" variants={childVariants}>Partnerships</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
          <motion.p variants={childVariants}>Lorem Ipsum</motion.p>
        </motion.div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 pb-12 gap-3">
        <motion.p
        initial={{x: "-100%",}}
        whileInView={{x:0}}
        transition={{duration:0.4, type: "spring"}}
         className="text-custom-gray sm:text-lg text-center">
          © 2024 Tech Innovators. All rights reserved.
        </motion.p>
        <motion.div
        initial={{x: "100%",}}
        whileInView={{x:0}}
        transition={{duration:0.4, type: "spring"}}
         className="flex flex-row gap-x-6">
          <Facebook />
          <Github />
          <LinkedIn />
          <Twitter />
        </motion.div>
      </div>
    </footer>
  );
}
