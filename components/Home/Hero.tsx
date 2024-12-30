import React from "react";
import Lottie from "lottie-react";
import penAnimation from "@/public/penAnimation.json";
import {
  LeftToRightSubtitle,
  LeftToRightTitle,
} from "../Framer/MotionComponents";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export default function Hero({}: Props) {
  const t = useTranslations("home.hero");

  return (
    <section
      className={`col-span-12 grid grid-cols-12 items-center mt-16 font-quicksand`}
    >
      <div className="col-span-12 items-center lg:col-span-5 flex flex-col gap-y-6">
        <LeftToRightTitle className="xl:text-5xl md:text-start text-start text-4xl text-darker-white font-bold">
          {t("title")}
        </LeftToRightTitle>

        <LeftToRightSubtitle className="text-start lg:text-start text-base text-darker-white leading-8 font-poppins">
          {t("headline")}
        </LeftToRightSubtitle>
      </div>
      <div
        id="projects"
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