import React, { useEffect } from "react";
import {
  FadedH3,
  FadedH4,
  FadedListItem,
  FadedParagraph,
} from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Result from "../Global/Result";

type Props = {};

export const impactVisibleEvent = new Event("becon-impact-visible");

export default function Impact({}: Props) {
  const t = useTranslations("becon.impact");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(impactVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="results" className="absolute translate-y-[-40vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">
        {t("title")}
      </FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <div className="md:w-104 h-auto flex items-center justify-center py-6 px-10 bg-[#1D21BF26] text-white font-poppins text-xl md:text-2xl border rounded-[2rem] border-[#7275FF]">
        <h3 className="text-center md:text-start">
            <strong>{ t("paragraphs.1") }</strong> {t("paragraphs.2")} 
        </h3>
      </div>

      <div className="md:w-101 h-auto flex items-center justify-center py-6 px-10 bg-[#1D21BF26] text-white font-poppins text-xl md:text-2xl border rounded-[2rem] border-[#7275FF]">
        <h3>
            <strong>{ t("paragraphs.3") }</strong> {t("paragraphs.4")} 
        </h3>
      </div>

    

        <div className="grid grid-cols-1 text-lg md:text-xl gap-y-4 md:gap-y-8 leading-10 pl-4">
          <FadedListItem>
          {t("paragraphs.5")}
          </FadedListItem>
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