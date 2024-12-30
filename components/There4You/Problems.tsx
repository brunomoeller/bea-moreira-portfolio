import React, { useEffect } from "react";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const problemsEvent = new Event("t4y-problems-visible");

export default function Problems({}: Props) {
  const t = useTranslations("there4you.problems");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(problemsEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="problems" className="absolute translate-y-[-30vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 leading-10 pl-4 md:pl-12">
          <FadedListItem>
          {t("items.1")}
          </FadedListItem>
          <FadedListItem>
          {t("items.2")}
          </FadedListItem>
          <FadedListItem>
          {t("items.3")}
          </FadedListItem>
        </ul>
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