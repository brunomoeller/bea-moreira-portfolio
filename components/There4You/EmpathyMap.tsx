import React, { useEffect } from "react";
import { FadedDiv, FadedH3, FadedH4 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const empathyMapEvent = new Event("t4y-empathy-visible");

export default function EmpathyMap({}: Props) {
  const t = useTranslations("there4you.userEmpathyMap");

  const [ref, isVisible] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(empathyMapEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="empathy-map" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        {t("title")}
      </FadedH3>
      <div className="grid xl:grid-cols-empathyMap gap-x-10 gap-y-6 lg:gap-x-20 lg:gap-y-12">
        <div className="grid grid-cols-2 gap-x-9 gap-y-8">
          <FadedH4 className="col-span-2 t4y-empathy-card-title">{t("sections.1.title")}</FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
          {t("sections.1.items.1")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
          {t("sections.1.items.2")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
          {t("sections.1.items.3")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
          {t("sections.1.items.4")}
          </FadedDiv>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 lg:gap-x-9 lg:gap-y-8">
          <FadedH4 className="col-span-2 xl:col-span-3 t4y-empathy-card-title">
          {t("sections.2.title")}
          </FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
          {t("sections.2.items.1")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
          {t("sections.2.items.2")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
          {t("sections.2.items.3")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
          {t("sections.2.items.4")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
          {t("sections.2.items.5")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
          {t("sections.2.items.6")}
          </FadedDiv>
        </div>
        <div className="grid grid-cols-2 gap-x-9 gap-y-8">
          <FadedH4 className="col-span-2 t4y-empathy-card-title">{t("sections.3.title")}</FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
          {t("sections.3.items.1")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
          {t("sections.3.items.2")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
          {t("sections.3.items.3")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
          {t("sections.3.items.4")}
          </FadedDiv>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8">
          <FadedH4 className="col-span-2 lg:col-span-3 t4y-empathy-card-title">
          {t("sections.4.title")}
          </FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">{t("sections.4.items.1")}</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">{t("sections.4.items.2")}</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">{t("sections.4.items.3")}</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">
          {t("sections.4.items.4")}
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">{t("sections.4.items.5")}</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">{t("sections.4.items.6")}</FadedDiv>
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