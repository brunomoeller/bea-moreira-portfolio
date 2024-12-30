import React, { useEffect } from "react";
import Image from "next/image";
import heartIcon from "@/public/icons/heartIcon.svg";
import researchIcon from "@/public/icons/researchIcon.svg";
import ideaIcon from "@/public/icons/ideaIcon.svg";
import toolsIcon from "@/public/icons/toolsIcon.svg";
import checklistIcon from "@/public/icons/checklistIcon.svg";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const methodologyEvent = new Event("t4y-methodology-visible");

export default function Methodology({}: Props) {
  const t = useTranslations("there4you.methodology");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(methodologyEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="methodology" className="absolute translate-y-[-30vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
            {t("subtitle")}
          <strong>{t("strong")}</strong> {t("continuation")}
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
            <h5 className="step-title">{t("stages.empathize.title")}</h5>
            <p className="step-paragraph">
            {t("stages.empathize.items.1")}
            </p>
            <p className="step-paragraph">{t("stages.empathize.items.2")}</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={researchIcon} alt="Research Icon" />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">{t("stages.define.title")}</h5>
            <p className="step-paragraph">{t("stages.define.items.1")}</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={ideaIcon} alt="Idea Icon" />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">{t("stages.ideate.title")}</h5>
            <p className="step-paragraph">{t("stages.ideate.items.1")}</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={toolsIcon} alt="Tools Icon" />
          </div>
          <div className="step-text-container">
            <h5 className="step-title">{t("stages.prototype.title")}</h5>
            <p className="step-paragraph">{t("stages.prototype.items.1")}</p>
            <p className="step-paragraph">{t("stages.prototype.items.2")}</p>
            <p className="step-paragraph">{t("stages.prototype.items.3")}</p>
          </div>
        </div>
        <div className="methodology-step">
          <div className="methodology-icon-container">
            <Image src={checklistIcon} alt="Checklist Icon" />
          </div>
          <div className="step-text-container">
            <div className="grid grid-cols-1 items-center justify-items-center">
              <h5 className="step-title">{t("stages.test.title")}</h5>
              <span className="text-sm md:text-base text-[#1B1B1B] font-medium">
              {t("stages.test.items.1")}
              </span>
            </div>
            <p className="step-paragraph md:mt-3">{t("stages.test.items.2")}</p>
          </div>
        </div>
      </FadedDiv>
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
