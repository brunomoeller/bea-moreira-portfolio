import Image from "next/image";
import React from "react";
import researchGraph1 from "@/public/images/there4you/researchGraph1.svg";
import researchGraph2 from "@/public/images/there4you/researchGraph2.svg";
import researchGraph3 from "@/public/images/there4you/researchGraph3.svg";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export default function Research({}: Props) {
  return (
    <section
      id="research"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold">Research</FadedH3>
      <div className="text-lg md:text-xl">
        <FadedParagraph>
          The global self-defense products market size is expected to reach USD
          3.6 billion by 2025. Expanding at a CAGR of 5.9% over the forecast
          period (According to a report by Grand View Research, Inc)..
        </FadedParagraph>
      </div>
      <div className="text-lg md:text-xl">
        <FadedParagraph>
          We did research with people around the world (32 women) and discovered
          that 62.5% have experienced harassment in their lifetime and that
          85.7% did not have any self-defense device with them at the moment.
          Finally, we proposed a gadget with the same functions as THERE4YOU and
          87.5% of the people were interested and determined on buying it.
        </FadedParagraph>
      </div>
      <FadedDiv className="grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center p-10 pb-16 gap-y-10 lg:gap-y-20 lg:gap-x-24 text-sm md:text-base text-center lg:py-20 lg:px-20 bg-[#FDEFFF] rounded-3xl">
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-4 lg:gap-y-6">
          <p className="text-[#1B1B1B] font-medium">
            Have you experienced any type of harassment and/or abuse?
          </p>
          <div className="relative text-xs text-[#6C6C6C] font-medium">
            <Image src={researchGraph1} alt="Research Graph 1" />
            <span className="absolute top-5 -right-8">37,5%</span>
            <span className="absolute bottom-5 -left-8">62,5%</span>
            <div className="absolute top-16 -right-14 lg:top-24 lg:-right-16">
              <div className="grid grid-cols-2 lg:grid-cols-graphCaption items-center justify-items-center gap-2.5">
                <div className="bg-[#D014E9] w-2 h-2 rounded-full" />
                <span>Yes</span>
                <div className="bg-[#F4A2FF] w-2 h-2 rounded-full" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-4 lg:gap-y-6">
          <p className="text-[#1B1B1B] font-medium">
            If yes, did you have anything to defend yourself with at the moment?
          </p>
          <div className="relative text-xs text-[#6C6C6C] font-medium">
            <Image src={researchGraph2} alt="Research Graph 2" />
            <span className="absolute top-5 -right-8">14,3%</span>
            <span className="absolute bottom-5 -left-8">85,7%</span>
            <div className="absolute top-16 -right-14 lg:top-24 lg:-right-16">
              <div className="grid grid-cols-2 lg:grid-cols-graphCaption items-center justify-items-center gap-2.5">
                <div className="bg-[#D014E9] w-2 h-2 rounded-full" />
                <span>Yes</span>
                <div className="bg-[#F4A2FF] w-2 h-2 rounded-full" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 items-center justify-items-center gap-y-4 lg:gap-y-6">
          <p className="text-[#1B1B1B] font-medium">
            If yes, did you have anything to defend yourself with at the moment?
          </p>
          <div className="relative text-xs text-[#6C6C6C] font-medium">
            <Image
              className="rotate-[40deg]"
              src={researchGraph3}
              alt="Research Graph 2"
            />
            <span className="absolute top-5 -left-6">3,1%</span>
            <span className="absolute top-16 -left-10">9,4%</span>
            <span className="absolute -bottom-8 right-16">87,5%</span>
            <div className="absolute top-14 -right-16 lg:-right-28">
              <div className="grid grid-cols-graphCaption items-center justify-items-start gap-y-2.5 gap-x-1">
                <div className="bg-[#D014E9] w-2 h-2 rounded-full" />
                <span>Yes</span>
                <div className="bg-[#F4A2FF] w-2 h-2 rounded-full" />
                <span>No</span>
                <div className="bg-[#FBCAB4] w-2 h-2 rounded-full" />
                <span className="w-10 lg:w-auto">I don&apos;t know</span>
              </div>
            </div>
          </div>
        </div>
      </FadedDiv>
    </section>
  );
}
