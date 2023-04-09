import Image from "next/image";
import React from "react";
import Link from "next/link";
import introduction from "@/public/images/there4you/t4y-introduction.png";
import connect from "@/public/images/there4you/t4y-connect.png";
import home from "@/public/images/there4you/t4y-home.png";
import letsPractice from "@/public/images/lets-practice/letspractice.png";
import becon from "@/public/images/becon/becon-login-mobile.png";
import redirectIcon from "@/public/icons/redirectIcon.svg";
import { FadedDiv } from "../Framer/MotionComponents";

type Props = {};

export default function Projects({}: Props) {
  return (
    <main className="col-span-12 grid grid-cols-2 gap-y-6 gap-x-4 mt-24 font-poppins">
      <FadedDiv
        className="order-1 md:justify-center sm:flex sm:overflow-x-hidden col-span-2 grid grid-cols-t4yScroll items-center justify-items-start 
        h-100 rounded-3xl 
        bg-gradient-to-b from-linear-pink-1 via-linear-pink-2 to-Linear-pink-3 overflow-x-scroll scrollbar-hide overflow-y-hidden snap-x snap-mandatory"
      >
        <div className="w-[80vw] flex relative items-center justify-center snap-center snap-always sm:w-auto">
          <Image className="h-96 w-auto" src={introduction} alt="t4y sign in" />
          <div className="grid grid-cols-3 gap-x-1 absolute bottom-0 sm:hidden">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="w-2 h-2 bg-white/50 rounded-full" />
            <span className="w-2 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
        <div className="w-[80vw] flex relative items-center justify-center snap-center snap-always sm:w-auto">
          <Image
            className="h-96 w-auto sm:translate-y-4"
            src={connect}
            alt="t4y connect"
          />
          <div className="grid grid-cols-3 gap-x-1 absolute bottom-0 sm:hidden">
            <span className="w-2 h-2 bg-white/50 rounded-full" />
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="w-2 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
        <div className="w-[80vw] flex relative items-center justify-center snap-center snap-always sm:w-auto">
          <Image className="h-96 w-auto" src={home} alt="t4y home" />
          <div className="grid grid-cols-3 gap-x-1 absolute bottom-0 sm:hidden">
            <span className="w-2 h-2 bg-white/50 rounded-full" />
            <span className="w-2 h-2 bg-white/50 rounded-full" />
            <span className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
      </FadedDiv>
      <div className="order-2 sm:order-1 col-span-2 flex items-center justify-self-center sm:justify-self-start gap-x-4">
        <Link
          className="text-base md:text-xl text-darker-white font-medium"
          href="/there4you"
        >
          Product design / Mobile App
        </Link>
        <Image className="h-3 w-3" src={redirectIcon} alt="go to" />
      </div>
      <div
        className="order-3 sm:order-1 col-span-2 sm:col-span-1 flex items-start justify-center 
        mt-6 pt-20 h-104 rounded-3xl 
        bg-gradient-to-b from-linear-purple-1 to-linear-purple-2 
        overflow-hidden"
      >
        <Image src={letsPractice} alt="lets practice" />
      </div>
      <div
        className="order-5 sm:order-1 col-span-2 sm:col-span-1 flex justify-center items-center 
        mt-6 h-104 rounded-3xl 
        bg-gradient-to-b from-linear-blue-1 to-linear-blue-2"
      >
        <Image className="h-96 w-auto" src={becon} alt="becon login page" />
      </div>
      <div className="order-4 sm:order-1 sm:col-span-1 sm:justify-self-auto flex items-center col-span-2 justify-self-center gap-x-4">
        <Link
          className="text-base md:text-xl text-darker-white font-medium"
          href="/letspractice"
        >
          Landing page
        </Link>
        <Image className="h-3 w-3" src={redirectIcon} alt="go to" />
      </div>
      <div
        id="services"
        className="order-6 sm:order-1 sm:col-span-1 sm:justify-self-auto flex items-center col-span-2 justify-self-center gap-x-4"
      >
        <Link
          className="text-base md:text-xl text-darker-white font-medium"
          href="/becon"
        >
          Login page (Web and Mobile)
        </Link>
        <Image className="h-3 w-3" src={redirectIcon} alt="go to" />
      </div>
    </main>
  );
}
