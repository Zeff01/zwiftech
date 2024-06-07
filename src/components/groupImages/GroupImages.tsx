import { motion } from "framer-motion";
import Image from "next/image";
interface IGroupImages {
  imagesData: {
    imageUrl: string;
    alt: string;
  }[];
}

export default function GroupImages({ imagesData }: IGroupImages) {
  return (
    <div className="flex flex-row w-fit translate-x-[32px]">
      {imagesData.map((data, i) => {
        return (
          <motion.div
            key={i}
            initial={{
              x: `${-60 * i}px`,
              opacity: 0,
            }}
            whileInView={{
              x: `${-16 * i}px`,
              opacity: 1,
            }}
            transition={{
              duration: (i + 1) * 0.15,
              delay: (5 - i) * 0.2,
              opacity: { duration: 0.15 },
            }}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] overflow-hidden rounded-full border-2 border-white"
            style={{
              zIndex: i + 1,
              transform: `translateX(${-16 * i}px)`,
            }}>
            <Image
              src={data.imageUrl}
              width={60}
              height={60}
              alt={data.alt}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
              style={{ objectFit: "cover", objectPosition: "50% top" }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
