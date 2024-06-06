import Image from "next/image";
import SectionContainer from "../sectionContainer/SectionContainer";

export default function NextInnovation() {
  return (
    <SectionContainer className="flex flex-col gap-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-[400px] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-xl">Dummy Data</p>
            <p className="font-bold text-4xl text-custom-purple">Your Next Innovation.</p>
          </div>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className="h-[200px] sm:h-[250px] w-full sm:flex-grow flex flex-row items-center justify-center bg-custom-purple rounded-2xl shadow-lg">
          <p className="text-white text-4xl sm:text-6xl text-center">WE HELP YOU </p>
        </div>
      </div>
      <div className="w-full aspect-[2.6] flex items-center">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/3c19/dfd9/eda487f6e23400665049729b914cd061?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o~MvD1KoMmOGOVvbiyi-wrTcqbo2M18iv0eVYCrYUioj4PS02XBFUCikJeqOZ4BoJTf78OyDnc2e-nfKqhEpc-9apxYZKbOTUko1Ae~Iw0c4Pkt2bQgQHhYL7Wbkq~ZnN3p81x4oDDZpnDMYStVuCDnZcdvGkxCQ9~uwtc1Iq4HVJxR3dkaNM-3D2~FFcqzJm9rxQaHM7ET3gbSKE5QtGKssauICZIww7yp1SB7ynjyti3aTBVjwIjOYKVqwAQvVE4BXM4ApiZS~uH3DeK-qD8OJ3DZ9OFtD2sO2NuEDKA~MuWINHr966idf87BchHZievU2qnjfRTYQU2oNnMkTmw__"
          }
          width={1300}
          height={500}
          alt="Group of Umbrellas"
          className="rounded-2xl shadow-lg w-full aspect-[2.6]"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-custom-white flex flex-col lg:flex-row justify-center items-center gap-x-10 rounded-2xl shadow-sm p-4">
        <p className="text-6xl sm:text-7xl md:text-[90px] lg:text-[100px] text-custom-purple font-[900]">
          TRANSFORM
        </p>
        <div className="flex flex-col items-center text-4xl sm:text-5xl md:text-6xl">
          <p className="font-liu">YOUR</p>
          <p className="font-[900] font-lexend">BRAND</p>
        </div>
      </div>
    </SectionContainer>
  );
}
