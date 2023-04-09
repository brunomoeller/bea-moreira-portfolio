import React from "react";
import Image from "next/image";
import figmaIcon from "@/public/icons/figmaIcon.svg";
import { quicksand } from "@/utils/fonts";
import letsPracticeHero from "@/public/images/lets-practice/letspractice-hero.png";
import {
  FadedDiv,
  FadedH3,
  LeftToRightSubtitle,
  LeftToRightTitle,
} from "../Framer/MotionComponents";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className={`col-span-12 grid grid-cols-1 xl:grid-cols-letsPracticeHero justify-items-center items-center gap-y-10 xl:gap-y-0 xl:gap-x-8 w-full lg:h-[85vh] px-5 pt-10 xl:px-14 xl:pt-16 overflow-hidden bg-letsPractice ${quicksand.variable} font-quicksand rounded-3xl`}
    >
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2 gap-y-5 xl:gap-y-8 gap-x-4 xl:gap-x-0 items-center xl:items-start">
          <FadedDiv className="xl:col-span-2 py-3 px-1 xl:py-0 xl:px-0 flex items-center justify-center border border-[#6C6C6C] xl:h-14 xl:w-48 rounded-full order-3 xl:-order-1">
            <h3 className="text-[0.7rem] lg:text-xl text-[#6C6C6C] font-medium font-quicksand">
              Landing page
            </h3>
          </FadedDiv>
          <div className="col-span-2 grid grid-cols-1 gap-y-2 text-xl lg:text-5xl text-[#303030]">
            <LeftToRightTitle className="font-semibold">
              Let&apos;s Practice
            </LeftToRightTitle>
            <LeftToRightSubtitle className="">
              English teaching startup
            </LeftToRightSubtitle>
          </div>
          <FadedH3 className="col-span-2 text-lg lg:text-3xl text-[#6C6C6C] font-semibold">
            UX/UI Case study
          </FadedH3>
          <FadedDiv className="xl:col-span-2">
            <div className="flex gap-x-2 bg-white items-center justify-center text-[0.7rem] py-3 pl-2 xl:py-0 xl:px-0 lg:text-xl text-[#6C6C6C] font-medium font-quicksand xl:w-64 xl:h-14 rounded-full">
              <p>Made with Figma</p>
              <Image className="h-4 lg:auto" src={figmaIcon} alt="Figma" />
            </div>
          </FadedDiv>
        </div>
      </div>
      <Image
        className="justify-self-end self-end z-1"
        src={letsPracticeHero}
        alt="lets practice website"
      />
    </div>
  );
}
