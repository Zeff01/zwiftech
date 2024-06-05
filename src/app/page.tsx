"use client";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import {
  Microsoft,
  IBM,
  Ebay,
  Amazon,
  Dropbox,
  Facebook,
  Github,
  LinkedIn,
  Twitter,
} from "@/components/icons/Icons";
import Button from "@/components/button/Button";
import GroupImages from "@/components/groupImages/GroupImages";
import BasicCard from "@/components/basicCard/BasicCard";
import CardWithImage from "@/components/basicCard/CardWithImage";
import TeamCard from "@/components/teamCard/TeamCard";

import { imagesData, basicCardData, cardWithImageData, teamCardData } from "@/lib/data";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const m = document.querySelector("main");
    if (m) {
      const s = getComputedStyle(m);
      console.log(s.fontFamily);
    }
  }, []);

  return (
    <main className="flex w-full min-h-screen flex-col items-center">
      <section className="flex flex-col items-center gap-y-6 py-24">
        <h1 className="text-6xl text-center max-w-[850px]">
          Elevate Your <span className="font-semibold text-custom-purple">Business</span> with{" "}
          <span className="font-semibold">Next-Generation Technology Solutions</span>
        </h1>
        <h2 className="text-xl text-center max-w-[675px]">
          We believe in empowering businesses with cutting-edge technology solutions tailored to
          your unique needs
        </h2>
        <h2 className="text-xl text-center text-custom-purple font-semibold">
          Meet the Leaders of ZwiftTech
        </h2>
        <GroupImages imagesData={imagesData} />
        <Button>Get Started</Button>
        <div className="flex flex-row">
          <div className="flex flex-col items-center w-[150px]">
            <p className="text-3xl font-semibold">100+</p>
            <p className="font-semibold">Partnership</p>
          </div>
          <div className="flex flex-col items-center w-[150px] border-x-2 border-custom-black">
            <p className="text-3xl font-semibold">83</p>
            <p className="font-semibold">Businesses</p>
          </div>
          <div className="flex flex-col items-center w-[150px]">
            <p className="text-3xl font-semibold">4289</p>
            <p className="font-semibold">Product</p>
          </div>
        </div>
        <Button variant="icon">
          <FaArrowDown className="text-custom-yellow text-xl" />
        </Button>
        <h3 className="font-bold text-custom-gray text-xl">Trusted by Job Holders from</h3>
        <div className="flex flex-row items-center gap-x-6">
          <Microsoft />
          <IBM />
          <Ebay />
          <Amazon />
          <Dropbox />
        </div>
      </section>
      <section className="flex flex-col items-center gap-y-12 py-20">
        <h2 className="font-bold text-xl">What We Offer</h2>
        <h1 className="font-bold  text-3xl text-custom-purple">Our Marketing Solutions</h1>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {basicCardData.map((d, i) => (
            <BasicCard key={i} {...d} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-10 py-20">
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl">Dummy Data</p>
          <p className="font-bold text-4xl text-custom-purple">
            Lorem Ipsum is a simply Dummy Data
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {cardWithImageData.map((d, i) => (
            <CardWithImage key={i} {...d} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-24 py-20">
        <div className="flex flex-row">
          <div className="basis-5/12 flex flex-col justify-between">
            <p className="font-[500] text-3xl">Mission</p>
            <p className="text-lg">Lorem Ipsum is simply dummy</p>
          </div>
          <div className="basis-6/12 flex flex-col gap-y-6">
            <p className="font-[500] text-3xl">
              Empowering Businesses Through Innovative Technology
            </p>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg">
                At Tech Innovators, our mission is to empower businesses by providing cutting-edge
                technology solutions that drive growth, efficiency, and security.{" "}
              </p>
              <p className="text-lg">
                We are committed to delivering exceptional value through our expert services and
                innovative products, helping our clients navigate the complexities of the digital
                landscape with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-5/12 flex flex-col justify-between">
            <p className="font-[500] text-3xl">Vision</p>
            <p className="text-lg">Lorem Ipsum is simply dummy</p>
          </div>
          <div className="basis-6/12 flex flex-col gap-y-6">
            <p className="font-[500] text-3xl">Leading the Future of Technological Advancement</p>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg">
                Our vision is to be a global leader in technological innovation, setting new
                standards for excellence in the industry. We aspire to create a future where
                businesses of all sizes can leverage the power of advanced technology to achieve
                their goals and transform their operations.
              </p>
              <p className="text-lg">
                By fostering a culture of continuous learning and innovation, we aim to shape the
                future of technology and drive meaningful progress for our clients and communities
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-6 py-20">
        <div className="flex flex-row items-center gap-x-4">
          <div className="w-[400px] flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-xl">Dummy Data</p>
              <p className="font-bold text-4xl text-custom-purple">Your Next Innovation.</p>
            </div>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="h-[250px] flex-grow flex flex-row items-center justify-center bg-custom-purple rounded-2xl shadow-lg">
            <p className="text-white text-6xl">WE HELP YOU </p>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/3c19/dfd9/eda487f6e23400665049729b914cd061?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o~MvD1KoMmOGOVvbiyi-wrTcqbo2M18iv0eVYCrYUioj4PS02XBFUCikJeqOZ4BoJTf78OyDnc2e-nfKqhEpc-9apxYZKbOTUko1Ae~Iw0c4Pkt2bQgQHhYL7Wbkq~ZnN3p81x4oDDZpnDMYStVuCDnZcdvGkxCQ9~uwtc1Iq4HVJxR3dkaNM-3D2~FFcqzJm9rxQaHM7ET3gbSKE5QtGKssauICZIww7yp1SB7ynjyti3aTBVjwIjOYKVqwAQvVE4BXM4ApiZS~uH3DeK-qD8OJ3DZ9OFtD2sO2NuEDKA~MuWINHr966idf87BchHZievU2qnjfRTYQU2oNnMkTmw__"
            }
            width={1300}
            height={500}
            alt="Group of Umbrellas"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="bg-custom-white flex flex-row justify-center items-center gap-x-10 rounded-2xl shadow-sm">
          <p className="text-[128px] text-custom-purple font-[900]">TRANSFORM</p>
          <div className="flex flex-col items-center text-6xl">
            <p className="font-liu">YOUR</p>
            <p className="font-[900] font-lexend">BRAND</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-12">
        <div className="flex flex-col items-center gap-y-4">
          <p className="text-xl font-bold">Our Passionate team of creative professionals</p>
          <p className="font-bold text-4xl text-custom-purple">ZwiftTech’s Team</p>
          <p className="text-lg max-w-[700px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {teamCardData.map((d, i) => (
            <TeamCard key={i} {...d} />
          ))}
        </div>
        <div className="py-16">
          <h2 className="font-bold text-4xl text-custom-purple">Connect With Us</h2>
          <div className="flex flex-row justify-between items-center gap-x-16">
            <p className="text-lg max-w-[700px]">
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
      <footer className="w-full ">
        <div className="flex flex-row py-16 border-t border-b border-gray-300">
          <div className="w-[300px] flex flex-col gap-y-2">
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/de1f/4ce8/781ecf0623ef81158eb27a8e275d1b81?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5mLxkHK650GsA3mKD35G3gw23RMIBYP-Tu1vAYpX4N85uONXB9o1nAiCgA7UQ8WMZ8bj2ZAW7qK3fMOxEiRQn5OHQzCG8qL4FpaT6JsM7hg4MgUh~xGnIXFKANhK5JczAEJ8axuChOPxtolNUT18sNWbe6L-NVAHjSF74SS93AcABN9M1RwYTOQYX9czEunQtRzpaU6hIfTh3ST2kXzGKTA0yIHCPOKMOucZdcULZ4rq9rQ8dIiVDG~xO9yVyLp~1Lr9JV9l5-G~-2x9F5RMxPNXMOA~rlwgL5vwamO4DJRuuXhyqs9vW0jqcGEJZaaWbrXWOsvnzl~rLkw0jkuXA__"
              }
              width={100}
              height={27}
              alt="ZwiftTech logo"
            />
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry
            </p>
          </div>
          <div className="flex flex-row flex-grow justify-around text-lg">
            <div>
              <p className="font-semibold">Product</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div>
              <p className="font-semibold">Partnerships</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between pt-6 pb-12">
          <p className="text-custom-gray text-lg">© 2024 Tech Innovators. All rights reserved.</p>
          <div className="flex flex-row gap-x-6">
            <Facebook />
            <Github />
            <LinkedIn />
            <Twitter />
          </div>
        </div>
      </footer>
    </main>
  );
}
