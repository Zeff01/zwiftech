import Button from "../button/Button";
import GroupImages from "../groupImages/GroupImages";
import SectionContainer from "../sectionContainer/SectionContainer";
import { FaArrowDown } from "react-icons/fa6";
import { imagesData } from "@/lib/data";
import { Microsoft, IBM, Ebay, Amazon, Dropbox } from "../icons/Icons";

export default function Banner() {
  return (
    <SectionContainer className="flex flex-col items-center gap-y-6">
      <h1 className="text-3xl sm:text-6xl text-center w-full max-w-[850px]">
        Elevate Your <span className="font-semibold text-custom-purple">Business</span> with{" "}
        <span className="font-semibold">Next-Generation Technology Solutions</span>
      </h1>
      <h2 className=" text-lg sm:text-xl text-center max-w-[675px]">
        We believe in empowering businesses with cutting-edge technology solutions tailored to your
        unique needs
      </h2>
      <h2 className="text-lg sm:text-xl text-center text-custom-purple font-semibold">
        Meet the Leaders of ZwiftTech
      </h2>
      <GroupImages imagesData={imagesData} />
      <Button>Get Started</Button>
      <div className="flex flex-row w-full sm:w-auto">
        <div className="flex flex-col items-center  w-1/3 sm:w-[150px] max-w-[150px]">
          <p className="text-xl sm:text-3xl font-semibold">100+</p>
          <p className="font-semibold">Partnership</p>
        </div>
        <div className="flex flex-col items-center  w-1/3 sm:w-[150px] max-w-[150px] border-x-2 border-custom-black">
          <p className="text-xl sm:text-3xl font-semibold">83</p>
          <p className="font-semibold">Businesses</p>
        </div>
        <div className="flex flex-col items-center  w-1/3 sm:w-[150px] max-w-[150px]">
          <p className="text-xl sm:text-3xl font-semibold">4289</p>
          <p className="font-semibold">Product</p>
        </div>
      </div>
      <Button variant="icon">
        <FaArrowDown className="text-custom-yellow text-lg sm:text-xl" />
      </Button>
      <h3 className="font-bold text-custom-gray text-xl">Trusted by Job Holders from</h3>
      <div className="scale-75 sm:scale-100 flex flex-row items-center gap-x-3 sm:gap-x-6">
        <Microsoft />
        <IBM />
        <Ebay />
        <Amazon />
        <Dropbox />
      </div>
    </SectionContainer>
  );
}
