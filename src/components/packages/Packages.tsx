import SectionContainer from "../sectionContainer/SectionContainer";
import PackageList from "./PackageList";

export default function Packages() {
  return (
    <SectionContainer className="flex flex-col items-center gap-y-5" id="packages">
      <h2 className="font-bold text-3xl sm:text-4xl text-custom-purple text-center sm:text-starttext-3xl ">
        Our Services & Packages
      </h2>
      <p className="sm:text-lg text-center ">
        Choose a bundled package that suits your business stage.
      </p>
      <PackageList />
    </SectionContainer>
  );
}
