import { motion } from "framer-motion";

interface IBasicCard {
  title: string;
  subTitle: string;
  linkTo?: string; // will implement later
}

export default function BasicCard({ title, subTitle }: IBasicCard) {
  return (
    <div className="flex flex-col gap-y-3 sm:gap-y-6 bg-custom-white w-full max-w-[300px] rounded-2xl px-3 sm:px-4 py-6 sm:py-8 shadow-sm justify-between">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-y-2 sm:gap-y-3">
        <p className="font-semibold text-xl sm:text-2xl">{title}</p>
        <p className="sm:text-lg">{subTitle}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-fit self-end">
        {/* <Button variant="ghost" className="text-sm sm:text-base font-semibold pb-0">
          Learn More
        </Button> */}
      </motion.div>
    </div>
  );
}
