import Image from "next/image";
import React, { useEffect } from "react";
import empathyMap from "@/public/images/lets-practice/letspractice-empathy-map.png";
import cardsIcon from "@/public/icons/cardsIcon.svg";
import lugIcon from "@/public/icons/lugIcon.svg";
import moneyIcon from "@/public/icons/moneyIcon.svg";
import sickIcon from "@/public/icons/sickIcon.svg";
import routineIcon from "@/public/icons/routineIcon.svg";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const empathyEvent = new Event("lp-empathy-visible");

export default function EmpathyMap({}: Props) {
  const t = useTranslations("letsPractice.userEmpathyMap");

  const [ref, isVisible] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(empathyEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="empathy-map" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <FadedParagraph className="text-lg md:text-xl font-medium">
        {t("subtitle")}
      </FadedParagraph>
      <FadedDiv className="grid grid-cols-1 items-start justify-items-center bg-[#F1EAFF] rounded-3xl overflow-hidden">
        <Image src={empathyMap} alt="Let's practice empathy map" />
      </FadedDiv>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph className="font-bold">
          {t("continuation")}
        </FadedParagraph>
        <div className="grid grid-cols-lpEmpathyMap items-center gap-4 font-medium">
          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={cardsIcon} alt="cards icon" />
          </FadedDiv>
          <FadedParagraph>
            {t("items.1")}
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={lugIcon} alt="cards icon" />
          </FadedDiv>
          <FadedParagraph>
          {t("items.2")}
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={moneyIcon} alt="money icon" />
          </FadedDiv>
          <FadedParagraph>
          {t("items.3")}
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={sickIcon} alt="sick icon" />
          </FadedDiv>
          <FadedParagraph>
            {t("items.4")}
          </FadedParagraph>

          <FadedDiv className="grid items-center justify-items-center w-full h-[4rem] rounded-[1.5rem] bg-[#F1EAFF]">
            <Image src={routineIcon} alt="routine icon" />
          </FadedDiv>
          <FadedParagraph>
          {t("items.5")}
          </FadedParagraph>
        </div>
      </div>
    </section>
  );
}


export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}