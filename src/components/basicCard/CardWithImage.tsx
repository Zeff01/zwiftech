import Image from "next/image";
import Button from "../button/Button";

interface ICardWithImage {
  imageUrl: string;
  alt: string;
  title: string;
  linkTo?: string;
}

export default function CardWithImage({ imageUrl, alt, title }: ICardWithImage) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-full sm:w-[500px] sm:h-[395px] bg-custom-purple overflow-hidden rounded-2xl shadow-md flex justify-end aspect-[1.26]">
        <Image 
        src={imageUrl} 
        width={500} 
        height={395} 
        alt={alt} 
        style={{ objectFit: "cover" }} 
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold text-xl sm:text-2xl">{title}</p>
        <Button variant="outline" className="sm:text-lg">
          Explore
        </Button>
      </div>
    </div>
  );
}
