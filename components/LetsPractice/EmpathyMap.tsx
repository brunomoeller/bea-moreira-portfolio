import Image from "next/image";
import React from "react";
import empathyMap from "@/public/images/lets-practice/letspractice-empathy-map.png";
import cardsIcon from "@/public/icons/cardsIcon.svg";
import lugIcon from "@/public/icons/lugIcon.svg";
import moneyIcon from "@/public/icons/moneyIcon.svg";
import sickIcon from "@/public/icons/sickIcon.svg";
import routineIcon from "@/public/icons/routineIcon.svg";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export default function EmpathyMap({}: Props) {
  return (
    <section
      id="empathy-map"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold">Empathy map</FadedH3>
      <FadedParagraph className="text-lg md:text-xl font-medium">
        Through an interview involving 9 Participants (team people and target
        audience), some conclusions related to the English class emerged...
      </FadedParagraph>
      <FadedDiv className="grid grid-cols-1 items-start justify-items-center bg-[#F1EAFF] rounded-3xl overflow-hidden">
        <Image src={empathyMap} alt="Let's practice empathy map" />
      </FadedDiv>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph className="font-bold">
          Usually these people...
        </FadedParagraph>
        <div className="grid grid-cols-lpEmpathyMap items-center gap-4 font-medium">
          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={cardsIcon} alt="cards icon" />
          </FadedDiv>
          <FadedParagraph>
            Prefer to study with playful teaching methods
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={lugIcon} alt="cards icon" />
          </FadedDiv>
          <FadedParagraph>
            Seek to learn English for professional qualification.
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={moneyIcon} alt="money icon" />
          </FadedDiv>
          <FadedParagraph>
            Think that English classes are expensive
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={sickIcon} alt="sick icon" />
          </FadedDiv>
          <FadedParagraph>
            Have difficulty concentrating in class
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={routineIcon} alt="routine icon" />
          </FadedDiv>
          <FadedParagraph>
            Have difficulty following a study routine
          </FadedParagraph>
        </div>
      </div>
    </section>
  );
}
