import React, { useEffect } from "react";
import Image from "next/image";
import styleGuide from "@/public/images/lets-practice/letspractice-style-guide.svg";
import { FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const styleEvent = new Event("lp-style-visible");

export default function StyleGuide({}: Props) {
  const t = useTranslations("letsPractice.styleGuide");

  const [ref, isVisible] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(styleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand md:mt-32 relative"
    >
      <span id="style-guide" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-2xl md:text-3xl font-medium justify-self-center">
        {t("title")}
      </FadedH3>
      <Image className="w-full h-full" src={styleGuide} alt="Style guide" />
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
