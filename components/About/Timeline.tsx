import React from "react";
import {
  FadedDiv,
  FadedH3,
  FadedH4,
  FadedTitle,
} from "../Framer/MotionComponents";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export default function Timeline({}: Props) {
  const t = useTranslations("about.timeline");

  return (
    <section className="justify-self-start grid grid-cols-1 gap-y-14 text-darker-white overflow-hidden font-quicksand">
      <FadedTitle className="text-xl xl:text-2xl font-bold font-poppins">
        {t("title")}
      </FadedTitle>
      <div className="grid grid-cols-timeline items-center justify-items-start gap-x-2 xl:gap-x-6 z-1">
        <FadedH4 className="timeline-year mt-0 relative font-poppins">
          2012
          <FadedDiv className="absolute border border-[#323232] top-full h-[500vh] w-px block right-1/2"></FadedDiv>
        </FadedH4>
        <FadedH3 className="timeline-description">
        {t("2012")}
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-start justify-items-start gap-x-2 xl:gap-x-6 z-2">
        <FadedH4 className="timeline-year z-2 font-poppins">2018</FadedH4>
        <FadedH3 className="timeline-description">
        {t("2018")}
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-start justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 font-poppins">2019</FadedH4>
        <FadedH3 className="timeline-description">
        {t("2019")}
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-start justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 font-poppins">2021</FadedH4>
        <FadedH3 className="timeline-description">
        {t("2021")}
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-center justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 mt-0 font-poppins">2022</FadedH4>
        <FadedH3 className="timeline-description">
        {t("2022")}
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-center justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 mt-0 font-poppins">2023</FadedH4>
        <FadedH3 className="timeline-description"> {t("2023")}</FadedH3>
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
