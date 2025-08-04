import { useMemo } from "react";
// import Lottie from "lottie-react";
import penAnimation from "@/public/penAnimation.json";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import {
  LeftToRightSubtitle,
  LeftToRightTitle,
} from "../Framer/MotionComponents";


type Props = {};

export default function Hero({}: Props) {
  const t = useTranslations("home.hero");


  const Lottie = useMemo(
    () => dynamic(() => import("lottie-react"), { ssr: false }),
    []
  );

  return (
    <section
      className={`col-span-12 grid grid-cols-12 items-center mt-16 font-quicksand`}
    >
      <div className="col-span-12 items-start lg:col-span-5 flex flex-col gap-y-16 md:justify-center">
        <LeftToRightTitle className="text-start xl:text-5xl md:text-start text-4xl text-darker-white font-bold text-clip whitespace-pre-line">
          {t("title")}
        </LeftToRightTitle>
        <div className="self-center sm:w-[80%] items-start flex flex-col gap-8 lg:w-[90%] lg:self-start">
          <LeftToRightSubtitle className="text-start lg:text-start text-base text-darker-white leading-8 font-poppins">
          {t("headline_1")}
        </LeftToRightSubtitle>
        <LeftToRightSubtitle className="text-start lg:text-start text-base text-darker-white leading-8 font-poppins">
          {t("headline_2")}
        </LeftToRightSubtitle>
        </div>
        
      </div>
      <div
        className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-center justify-center"
      >
        <Lottie className="h-56 w-56" animationData={penAnimation} />
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