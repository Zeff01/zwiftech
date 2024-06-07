import Image from "next/image";
import { motion } from "framer-motion";

interface ITeamCard {
  imageUrl: string;
  name: string;
  position: string;
}

export default function TeamCard({ imageUrl, name, position }: ITeamCard) {
  return (
    <div className="relative w-[309px] h-[350px] flex flex-col items-center overflow-hidden rounded-2xl shadow-md aspect-[0.88]">
      <Image src={imageUrl} width={309} height={350} alt={name} style={{ objectFit: "cover" }} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 bottom-6 flex flex-col items-center gap-y-2 z-[3] w-full">
        <p className="text-lg text-center font-bold text-custom-purple drop-shadow-md">{name}</p>
        <p className="text-lg text-center text-white drop-shadow-md">{position}</p>
      </motion.div>
      <div
        className="absolute top-0 left-0 w-full h-full z-[2] bg-transparent"
        style={{
          backgroundImage: "linear-gradient(to top, black 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
