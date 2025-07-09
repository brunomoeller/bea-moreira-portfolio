import React, { useEffect } from "react";
import Image from "next/image";
import { quicksand } from "@/utils/fonts";
import beconHero from "@/public/images/becon/hero-presentation.webp";
import beconLogo from "@/public/images/becon/becon-logo.svg";
import figmaIcon from "@/public/icons/figmaIcon.svg";
import beconMobile from "@/public/images/becon/becon-mobile.webp";
import {
  FadedDiv,
  FadedH3,
  LeftToRightTitle,
} from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { introductionVisibleEvent } from "./Introduction";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export default function Hero({}: Props) {
  const t = useTranslations("becon");

  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(introductionVisibleEvent);
    }
  }, [isVisible]);

  return (
  <div className="min-h-104 sm:min-h-104 lg:min-h-max relative col-span-12 grid lg:grid-cols-letsPracticeHero gap-y-20 lg:gap-y-0 justify-items-center items-center gap-x-8 w-full lg:h-[85vh] pt-16 px-4 lg:px-0 lg:pt-0 lg:pl-14 overflow-hidden bg-[#6E4FC1] rounded-3xl">
    
    {/* Conteúdo principal com z-index maior */}
    <div className="absolute top-12 grid grid-cols-1 lg:-mt-32 lg:relative z-30">
      <div className="grid grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-4 items-center justify-items-center lg:justify-items-start">
        <FadedDiv
          className={`col-span-2 flex items-center justify-items-center lg:justify-items-start `}
        >
          <Image
            className="h-20 lg:h-auto lg:-translate-x-5"
            src={beconLogo}
            alt="Logo Becon"
          />
        </FadedDiv>
        <div
          ref={ref}
          className="col-span-2 grid grid-cols-1 text-xl md:text-3xl text-white"
        >
          <LeftToRightTitle className="font-semibold">
            {t("tech")}
          </LeftToRightTitle>
        </div>
        <div className="md:justify-self-start col-span-2 md:col-span-1 w-44 md:w-auto">
          <FadedH3 className="text-sm md:text-xl text-white font-medium border border-white rounded-full px-8 py-2">
          {t("type")}
          </FadedH3>
        </div>
        <FadedDiv className="md:justify-self-start col-span-2 md:col-span-1 w-44 md:w-auto">
          <div className="flex gap-x-2 items-center justify-center text-sm lg:text-xl text-white font-medium border border-white rounded-full px-8 py-2">
            <h3 className="text-sm md:text-xl text-white font-medium">{t("madeWith")}:</h3>
            <Image className="h-4 lg:h-auto" src={figmaIcon} alt="Figma" />
          </div>
        </FadedDiv>
      </div>
    </div>
    
    {/* beconHero – Responsivo com z-index menor */}
    <div className="absolute bottom-[-5%] sm:bottom-[-7%] z-10 w-full md:h-auto flex justify-center lg:justify-end lg:bottom-0">
      <Image
        src={beconHero}
        alt="becon desktop view"
        className="
          w-auto 
          h-full 
          sm:h-[24rem] 
          md:h-[28rem] 
          lg:h-[32rem] 
          object-contain 
          lg:relative 
          lg:right-[-20%] 
          lg:bottom-[-5%]
        "
        priority
      />
    </div>

    {/* beconMobile – Só no desktop com z-index menor */}
    <div className="hidden lg:block absolute right-[40%] bottom-[-14%] z-20">
      <Image
        src={beconMobile}
        alt="becon mobile view"
        className="w-auto h-[26rem] object-contain"
        priority
      />
    </div>
  </div>
);
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
