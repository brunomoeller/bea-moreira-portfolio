import React from "react";
import Image from "next/image";
import heartIcon from "@/public/icons/heartIcon.svg";
import researchIcon from "@/public/icons/researchIcon.svg";
import ideaIcon from "@/public/icons/ideaIcon.svg";
import toolsIcon from "@/public/icons/toolsIcon.svg";
import checklistIcon from "@/public/icons/checklistIcon.svg";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export default function Methodology({}: Props) {
  return (
    <section
      id="methodology"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold">Methodology</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          The project was designed following the{" "}
          <strong>design thinking</strong> methodology
        </FadedParagraph>
      </div>
      <FadedDiv className="grid md:grid-cols-5 relative items-center md:items-start px-10 py-5 gap-y-12 md:gap-y-0 md:p-11 bg-[#FDEFFF] rounded-3xl overflow-hidden">
        <div className="hidden md:inline-block absolute -left-100 top-[4.6rem]  border border-dashed border-[#D014E9]/20 min-w-[200vw] h-0 z-0" />
        <div className="methodology-step">
          <div className="heart-icon-container">
            <Image
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-1"
              src={heartIcon}
              alt="Heart Icon"
            />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">Empathize</h5>
            <p className="step-paragraph">
              Seek to understand the needs and wants of the user
            </p>
            <p className="step-paragraph">Observation and interviews</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={researchIcon} alt="Research Icon" />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">Define</h5>
            <p className="step-paragraph">Clear problem statement</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={ideaIcon} alt="Idea Icon" />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">Ideate</h5>
            <p className="step-paragraph">Potential solutions</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={toolsIcon} alt="Tools Icon" />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">Prototype</h5>
            <p className="step-paragraph">Sketeches, models</p>
            <p className="step-paragraph">Mockups</p>
            <p className="step-paragraph">Digital prototype</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={checklistIcon} alt="Checklist Icon" />
          </div>
          <div className="step-text-container">
            <div className="grid grid-cols-1 items-center justify-items-center">
              <h5 className="step-title">Test</h5>
              <span className="text-sm md:text-base text-[#1B1B1B] font-medium">
                (Future step)
              </span>
            </div>
            <p className="step-paragraph md:mt-3">What works?</p>
          </div>
        </div>
      </FadedDiv>
    </section>
  );
}
