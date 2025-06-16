"use client";

import Banner from "@/components/banner/Banner";
import MarketingSolutions from "@/components/marketingSolutions/MarketingSolutions";
import Presentation from "@/components/presentation/Presentation";
import MissionVision from "@/components/missionVision/MissionVision";
import Team from "@/components/team/Team";
import Footer from "@/components/footer/Footer";
import NextInnovation from "@/components/nextInnovation/NextInnovation";
import Packages from "@/components/packages/Packages";
export default function Home() {
  return (
    <>
      <Banner />
      <MarketingSolutions />
      <Presentation />
      <MissionVision />
      <NextInnovation />
      <Team />
      <Packages />
      <Footer />
    </>
  );
}
