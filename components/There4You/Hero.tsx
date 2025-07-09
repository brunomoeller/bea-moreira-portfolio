import figmaIcon from "@/public/icons/figmaIcon.svg";
import photoshopIcon from "@/public/icons/photoshopIcon.svg";
import bracelet from "@/public/images/there4you/bracelet.svg";
import t4y3d from "@/public/images/there4you/t4y3d.svg";
import { quicksand } from "@/utils/fonts";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import {
  FadedDiv,
  FadedSpan,
  LeftToRightSubtitle,
  LeftToRightTitle,
} from "../Framer/MotionComponents";
import { introductionEvent } from "./Introduction";

type Props = {
  locale: string;
};

export default function Hero({ locale }: Props) {
  const t = useTranslations("there4you");


  const [ref, isVisible] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(introductionEvent);
    }
  }, [isVisible]);

  const conditionalWidthClass = locale === "en" ? "sm:w-5/6" : "sm:w-full";

  return (
    <FadedDiv
      className={`col-span-12 grid grid-cols-2 gap-y-12 xl:gap-y-0 justify-items-center items-center xl:gap-x-32 w-full xl:h-[85vh] xl:px-10 px-5 py-10 xl:py-0 overflow-hidden bg-t4y ${quicksand.variable} font-quicksand rounded-3xl`}
    >
      <div className="grid grid-cols-3 col-span-2 xl:col-span-1 justify-items-center xl:grid-cols-1 xl:self-start xl:justify-self-start xl:mt-14">
        <Image
          className="md:h-101 hidden md:inline opacity-[70%] -rotate-[65deg] mix-blend-overlay order-2 xl:order-1 xl:rotate-0 justify-self-start mt-8 xl:mt-auto"
          src={bracelet}
          alt="bracelet"
        />
        <div
          ref={ref}
          className="grid grid-cols-2 col-span-2 xl:col-span-1 xl:ml-20 xl:-mt-20 order-1"
        >
          <LeftToRightTitle
            className={`self-start col-span-2 text-4xl md:text-5xl text-[#D014E9] font-semibold drop-shadow-[0_7px_19px_rgba(199,33,214,0.25)] z-2`}
          >
            {t("title")}
          </LeftToRightTitle>
          <LeftToRightSubtitle className="col-span-2 md:text-2xl text-[#171717] font-normal mt-5 lg:w-[33rem] w-72">
            {t("description")}
          </LeftToRightSubtitle>
          <div className="flex mt-8 z-3 w-48 md:w-full">
            <FadedSpan className="sm:w-5/6 sm:h-12 flex items-center justify-center px-3 py-2 text-sm xl:text-xl text-[#171717] font-medium border border-[#6C6C6C33]/20 xl:px-8 xl:py-2 rounded-full">
              {t("type")}
            </FadedSpan>
          </div>
          <div className="ml-10 md:ml-0 flex mt-8 z-3 w-48 md:w-full">
            <FadedSpan className={`text-[#171717] ${conditionalWidthClass} sm:h-12 flex items-center justify-center px-3 py-2 sm:px-6 sm:py-4 text-sm xl:text-xl gap-x-2 xl:gap-x-4 border border-[#6C6C6C33]/20 xl:px-8 xl:py-2 rounded-full`}>
              <h4 className="inline-block text-[#171717] font-medium">{t("specs")}</h4>
              <Image src={figmaIcon} alt="Figma" />
              <Image src={photoshopIcon} alt="Photoshop" />
            </FadedSpan>
          </div>
        </div>
      </div>
      <Image
        className="justify-self-center z-1 col-span-full xl:col-span-1 xl:justify-self-end"
        src={t4y3d}
        alt="there for you 3d mobile"
      />
    </FadedDiv>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      locale
    }
  };
}
