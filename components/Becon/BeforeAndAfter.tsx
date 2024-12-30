import Image from "next/image";
import React, { useEffect } from "react";
import beconBefore from "@/public/images/becon/becon-before.png";
import beconAfter from "@/public/images/becon/becon-after.png";
import beconMobile from "@/public/images/becon/becon-mobile.png";
import customColors from "@/public/images/becon/becon-custom-colors.svg";
import customPresentation from "@/public/images/becon/custom-presentation.png";
import {
  FadedH3,
  FadedH4,
  FadedDiv,
  FadedParagraph,
} from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const beforeAndAfterVisibleEvent = new Event(
  "becon-beforeAndAfter-visible"
);

export default function BeforeAndAfter({}: Props) {
  const t = useTranslations("becon.beforeAndAfter")

  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(beforeAndAfterVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="before-and-after" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        {t("title")}
      </FadedH3>
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
      {t("subtitles.1")}
      </FadedH4>
      <FadedDiv className="rounded-3xl overflow-hidden">
        <Image
          className="w-full h-full object-contain object-center"
          src={beconBefore}
          alt="Becon Login Page Before"
        />
      </FadedDiv>
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
      {t("subtitles.2")}
      </FadedH4>
      <FadedDiv className="rounded-3xl overflow-hidden">
        <Image
          className="w-full h-full"
          src={beconAfter}
          alt="Becon Login Page After"
        />
      </FadedDiv>
      <FadedDiv className="justify-self-center self-center h-[46rem] mt-32">
        <Image
          className="h-full object-contain"
          src={beconMobile}
          alt="Becon Mobile"
        />
      </FadedDiv>
      <FadedParagraph className="text-base md:text-xl text-center lg:text-start lg:mt-20 lg:w-3/4 justify-self-center">
      {t("description")}
      </FadedParagraph>
      <FadedDiv className="grid grid-cols-1 items-center justify-items-center py-20 mt-12 md:mt-24 bg-[#EEEEEE] rounded-3xl">
        <Image
          className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]"
          src={customColors}
          alt="Custom colors"
        />
      </FadedDiv>
      <FadedDiv className="rounded-3xl mt-12 md:mt-24">
        <Image src={customPresentation} alt="custom presentation" />
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
