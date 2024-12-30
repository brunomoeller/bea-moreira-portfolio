import React, { useEffect } from "react";
import Image from "next/image";
import sadEmoji from "@/public/icons/sadEmoji.svg";
import thoughtfulEmoji from "@/public/icons/thoughtEmoji.svg";
import hopefulEmoji from "@/public/icons/hopeEmoji.svg";
import joyfulEmoji from "@/public/icons/joyEmoji.svg";
import { FadedDiv, FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const journeyEvent = new Event("lp-journey-visible");

export default function UserJourneyMap({}: Props) {
  const t = useTranslations("letsPractice.journeyMap");

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(journeyEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-[#590BC2]/30 scrollbar-track-[rgb(222,198,255)] lg:overflow-x-hidden lg:w-auto relative"
    >
      <span id="journey-map" className="absolute translate-y-[-15vh]" />
      <FadedH3 className="sticky left-2 lg:justify-self-center lg:static lg:left-auto text-3xl md:text-4xl font-bold">
        {t("title")}
      </FadedH3>
      <FadedDiv className="p-5 grid grid-cols-6 w-[430vw] lg:w-auto items-start justify-items-center lg:gap-y-2 gap-y-4 lg:gap-x-6 lg:py-14 lg:pr-14 lg:pl-2 bg-[#F1EAFF]">
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#2C2C2C] lg:bg-transparent rounded-md lg:rounded-none w-5/6
          lg:w-auto self-center overflow-x-hidden h-full lg:h-auto snap-center snap-mandatory"
        >
          <h4 className="text-white uppercase text-sm lg:text-[#2C2C2C] font-bold snap-center">
          {t("stagesTitle")}
          </h4>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">{t("columns.1.title")}</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">{t("columns.2.title")}</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">{t("columns.3.title")}</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">{t("columns.4.title")}</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">{t("columns.5.title")}</h5>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
          {t("stages.2")}
          </h5>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.1.items.1")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.2.items.1")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.3.items.1")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.4.items.1")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.5.items.1")}</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-lgmd 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
          {t("stages.3")}
          </h5>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.1.items.2")}</p>
          <p>{t("columns.1.items.3")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.2.items.2")}</p>
          <p>{t("columns.2.items.3")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.3.items.2")}</p>
          <p>{t("columns.3.items.3")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.4.items.2")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.5.items.2")}</p>
          <p>{t("columns.5.items.3")}</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
          {t("stages.4")}
          </h5>
        </div>
        <div className="grid items-center text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.1.items.4")}</p>
          <p>{t("columns.1.items.5")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.2.items.4")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>
          {t("columns.3.items.4")}
          </p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.4.items.3")}</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.5.items.4")}</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
          {t("stages.5")}
          </h5>
        </div>
        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={sadEmoji} alt="Upset" />
          <p className="-translate-y-2">{t("columns.1.items.6")}</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={thoughtfulEmoji} alt="Thoughtful" />
          <p className="-translate-y-2">{t("columns.2.items.5")}</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={hopefulEmoji} alt="Hopeful" />
          <p className="-translate-y-2">{t("columns.3.items.5")}</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={thoughtfulEmoji} alt="Thoughtful" />
          <p className="-translate-y-2">{t("columns.4.items.4")}</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={joyfulEmoji} alt="Joy" />
          <p className="-translate-y-2">{t("columns.5.items.5")}</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
          {t("stages.6")}
          </h5>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.1.items.7")}</p>
          <p>{t("columns.1.items.8")}</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.2.items.6")}</p>
          <p>{t("columns.2.items.7")}</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.3.items.6")}</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.4.items.5")}</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>{t("columns.5.items.6")}</p>
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