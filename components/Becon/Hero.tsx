import React, { useEffect } from "react";
import Image from "next/image";
import { quicksand } from "@/utils/fonts";
import beconHero from "@/public/images/becon/hero-presentation.png";
import beconLogo from "@/public/images/becon/becon-logo.svg";
import figmaIcon from "@/public/icons/figmaIcon.svg";
import beconMobile from "@/public/images/becon/hero-mobile.png";
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
    <div
      className={`col-span-12 grid lg:grid-cols-letsPracticeHero gap-y-20 lg:gap-y-0 justify-items-center items-center gap-x-8 w-full lg:h-[85vh] pt-16 px-4 lg:px-0 lg:pt-0 lg:pl-14 overflow-hidden bg-[#6E4FC1] ${quicksand.variable} font-quicksand rounded-3xl`}
    >
      <div className="grid grid-cols-1 lg:-mt-32">
        <div className="grid grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-4 items-center">
          <FadedDiv
            className={`col-span-2 flex items-center justify-items-start `}
          >
            <Image
              className="h-20 lg:h-auto -translate-x-8 lg:-translate-x-5"
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
          <div className="justify-self-start">
            <FadedH3 className="text-sm md:text-xl text-white font-medium border border-white rounded-full px-8 py-2">
            {t("type")}
            </FadedH3>
          </div>
          <FadedDiv className="justify-self-start">
            <div className="flex gap-x-2 items-center justify-center text-sm lg:text-xl text-white font-medium border border-white rounded-full px-8 py-2">
              <h3>{t("madeWith")}:</h3>
              <Image className="h-4 lg:h-auto" src={figmaIcon} alt="Figma" />
            </div>
          </FadedDiv>
        </div>
      </div>
      <Image
        className="hidden lg:block justify-self-end self-end object-contain object-center z-1"
        src={beconHero}
        alt="becon login page"
      />
      <Image
        className="block lg:hidden justify-self-end self-end object-contain object-center z-1"
        src={beconMobile}
        alt="becon login page"
      />
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
