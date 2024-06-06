import BasicCard from "../basicCard/BasicCard";
import { basicCardData } from "@/lib/data";

export default function MarketingSolutions() {
  return (
    <section className="flex flex-col items-center gap-y-12 py-20">
      <h2 className="font-bold text-lg sm:text-xl">What We Offer</h2>
      <h1 className="font-bold  text-2xl sm:text-3xl text-custom-purple">
        Our Marketing Solutions
      </h1>
      <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center">
        {basicCardData.map((d, i) => (
          <BasicCard key={i} {...d} />
        ))}
      </div>
    </section>
  );
}
