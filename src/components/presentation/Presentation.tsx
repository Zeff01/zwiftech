import CardWithImage from "../basicCard/CardWithImage";
import { cardWithImageData } from "@/lib/data";

export default function Presentation() {
  return (
    <section className="flex flex-col gap-y-10 py-20">
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg sm:text-xl">Dummy Data</p>
        <p className="font-bold  text-2xl sm:text-4xl text-custom-purple text-center">
          Lorem Ipsum is a simply Dummy Data
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {cardWithImageData.map((d, i) => (
          <CardWithImage key={i} {...d} />
        ))}
      </div>
    </section>
  );
}
