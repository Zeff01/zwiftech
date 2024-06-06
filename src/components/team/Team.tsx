import Button from "../button/Button";
import TeamCard from "../teamCard/TeamCard";
import { teamCardData } from "@/lib/data";

export default function Team() {
  return (
    <section className="flex flex-col gap-y-12 w-full">
      <div className="flex flex-col items-center gap-y-4">
        <p className="text-lg sm:text-xl font-bold text-center">
          Our Passionate team of creative professionals
        </p>
        <p className="font-bold text-2xl sm:text-4xl text-custom-purple">ZwiftTech’s Team</p>
        <p className="sm:text-lg max-w-[700px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center">
        {teamCardData.map((d, i) => (
          <TeamCard key={i} {...d} />
        ))}
      </div>
      <div className="py-16 flex flex-col gap-y-3">
        <h2 className="font-bold text-3xl sm:text-4xl text-custom-purple text-center sm:text-start">
          Connect With Us
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-x-16 gap-y-6">
          <p className="sm:text-lg max-w-[700px] text-center sm:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
          </p>
          <div className="flex flex-row gap-x-4">
            <Button variant="outline">Learn More</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
