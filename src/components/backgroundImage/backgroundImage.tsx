import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

type BackgroundImageProps = {
  src: string;
  alt: string;
  y: MotionValue<number>;
  position: "left" | "right";
};

export function BackgroundImage({ src, alt, y, position }: BackgroundImageProps) {
  const baseClass = "absolute w-auto pointer-events-none z-0 hidden md:block";
  const positionClass = position === "left" ? "top-10 left-0" : "bottom-10 right-0";

  return (
    <motion.div style={{ y }} className={`${baseClass} ${positionClass}`}>
      <Image src={src} alt={alt} width={455} height={1013} className="w-full h-auto" />
    </motion.div>
  );
}
