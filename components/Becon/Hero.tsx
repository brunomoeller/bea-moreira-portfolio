import beconLogo from "@/public/images/becon/becon-logo.png";
import beconHero from "@/public/images/becon/hero-presentation.webp";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import {
  FadedDiv,
  FadedH3,
  LeftToRightTitle,
} from "../Framer/MotionComponents";
import { introductionVisibleEvent } from "./General";

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
  <div className="min-h-80 sm:min-h-104 lg:min-h-max relative col-span-12 grid lg:grid-cols-letsPracticeHero gap-y-20 lg:gap-y-0 justify-items-start items-center gap-x-8 w-full lg:h-[85vh] sm:pt-16 px-4 lg:px-0 lg:pt-0 lg:pl-28 overflow-hidden bg-[#774CC4] rounded-3xl">
    
    {/* Conteúdo principal com z-index maior */}
    <div className="relative mt-0 lg:top-12 grid grid-cols-1 lg:-mt-32 lg:relative z-30 w-full items-center px-8 lg:px-0">
      <div className="grid grid-cols-1 gap-y-4 lg:gap-y-8 gap-x-4 items-center justify-items-center md:justify-items-start">
        <FadedDiv
          className="col-span-1 flex items-center justify-items-center lg:justify-items-start sm:w-auto"
        >
          <Image
            className="h-14 md:h-20 w-auto"
            src={beconLogo}
            alt="Logo Becon"
          />
        </FadedDiv>
        <div
          ref={ref}
          className="col-span-2 grid grid-cols-1 text-xl md:text-3xl text-white"
        >
          <LeftToRightTitle className="font-semibold font-poppins text-lg sm:text-xl md:text-3xl">
            {t("tech")}
          </LeftToRightTitle>
        </div>
        <div className="md:justify-self-start col-span-2 md:col-span-2 w-52 md:w-auto flex items-center justify-items-center">
         <FadedH3 className="w-auto px-8 h-12 text-sm md:text-xl text-white font-light border-[0.5px] border-white rounded-full flex items-center justify-center text-center">
          {t("type")}
        </FadedH3>
      </div>
        {/* <FadedDiv className="md:justify-self-start col-span-2 md:col-span-1 w-44 md:w-auto">
          <div className="flex gap-x-2 items-center justify-center text-sm lg:text-xl text-white font-medium border border-white rounded-full px-8 py-2">
            <h3 className="text-sm md:text-xl text-white font-medium">{t("madeWith")}:</h3>
            <Image className="h-4 lg:h-auto" src={figmaIcon} alt="Figma" />
          </div>
        </FadedDiv> */}
      </div>
    </div>
    
    {/* beconHero – Responsivo com z-index menor */}
    <div className="absolute bottom-[-5%] sm:bottom-[-20%] md:bottom-[-5%] z-10 w-full md:flex justify-center lg:justify-end hidden">
      <Image
        src={beconHero}
        alt="becon desktop view"
        className="
          right-[-45%]
          sm:h-[42rem] 
          md:h-[36rem] 
          lg:h-[42rem]
          2xl:h-[42rem] 
          object-contain 
          relative
          lg:relative 
          sm:right-[-45%]
          md:right-[-45%] 
          md:bottom-[-5%]
        "
        priority
      />
    </div>

    
    {/* <div className="hidden lg:block absolute right-[40%] bottom-[-14%] z-20">
      <Image
        src={beconMobile}
        alt="becon mobile view"
        className="w-auto h-[26rem] object-contain"
        priority
      />
    </div> */}
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
