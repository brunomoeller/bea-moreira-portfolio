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

type Props = {};

export const approachVisibleEvent = new Event("becon-approach-visible");

export default function Approach({}: Props) {
  const t = useTranslations("becon.approach");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(approachVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="approach" className="absolute translate-y-[-40vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">
        {t("title")}
      </FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          {t("paragraphs.1")}
        </FadedParagraph>
        <div className="grid grid-cols-1 text-lg md:text-xl gap-y-4 md:gap-y-8 leading-10">
          <FadedH4>
          {t("paragraphs.2")}
          </FadedH4>
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