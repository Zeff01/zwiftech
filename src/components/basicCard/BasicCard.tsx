import Button from "../button/Button";

interface IBasicCard {
  title: string;
  subTitle: string;
  linkTo?: string; // will implement later
}

export default function BasicCard({ title, subTitle }: IBasicCard) {
  return (
    <div className="flex flex-col gap-y-6 bg-custom-white w-[300px] rounded-2xl px-4 py-8 shadow-sm justify-between">
      <div className="flex flex-col gap-y-3">
        <p className="font-semibold text-2xl">{title}</p>
        <p className="text-lg">{subTitle}</p>
      </div>
      <Button variant="ghost" className="font-semibold self-end pb-0">
        Learn More
      </Button>
    </div>
  );
}
