import React, { useEffect } from "react";
import Image from "next/image";
import braceletFade from "@/public/images/there4you/bracelet-fade.svg";
import coloredBracelet from "@/public/images/there4you/colored-bracelet.svg";
import { FadedDiv, FadedH3, ScaledDiv } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const solutionEvent = new Event("t4y-solution-visible");

export default function Solution({}: Props) {
  const t = useTranslations("there4you.solution");

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(solutionEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="solution" className="absolute translate-y-[-25vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-12 text-lg md:text-xl">
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <h4 className="font-bold">{t("subtitle")}</h4>
          <p className="font-medium">
          {t("description")}
          </p>
        </FadedDiv>
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <h4 className="font-bold">{t("howItWorks.title")}</h4>
          <p className="font-medium">
          {t("howItWorks.items.1")}
          </p>
          <p className="font-medium">
          {t("howItWorks.items.2")}
          </p>
        </FadedDiv>
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <p className="font-medium">
          {t("howItWorks.items.3")}
          </p>
        </FadedDiv>
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <ol className="list-decimal pl-4 md:pl-8 grid grid-cols-1 gap-y-2">
            <li>
            {t("howItWorks.items.4")}
            </li>
            <li>{t("howItWorks.items.5")}</li>
            <li>
            {t("howItWorks.items.6")}
            </li>
          </ol>
        </FadedDiv>
        <ScaledDiv className="grid grid-cols-2 items-center justify-items-center py-20 rounded-3xl bg-[#FAD3FF]">
          <Image
            className="justify-self-end translate-x-16 -translate-y-10 mix-blend-overlay"
            src={braceletFade}
            alt="t4y bracelet"
          />
          <Image
            className="justify-self-start -translate-x-16 translate-y-10"
            src={coloredBracelet}
            alt="t4y colored bracelet"
          />
        </ScaledDiv>
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
