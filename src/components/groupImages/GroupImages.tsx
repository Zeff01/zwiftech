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
          <div
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] overflow-hidden rounded-full border-2 border-white"
            style={{
              zIndex: i + 1,
              transform: `translateX(${-16 * i}px)`,
            }}>
            <Image 
            key={i} 
            src={data.imageUrl} 
            width={60} 
            height={60} 
            alt={data.alt} 
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" 
            />
          </div>
        );
      })}
    </div>
  );
}
