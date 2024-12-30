import Link from "next/link";
import React, { useEffect } from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import Role from "./Role";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const introductionEvent = new Event("t4y-introduction-visible");

export default function Introduction({}: Props) {
  const t = useTranslations("there4you.introduction");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(introductionEvent);
    }
  }, [isVisible]);

  return (
    <section className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative">
      <span
        ref={ref}
        id="introduction"
        className="absolute translate-y-[-52vh]"
      />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          <strong>Upkey</strong> {t("paragraphs.1")}
          <strong>IE Business School</strong> {t("paragraphs.2")}
        </FadedParagraph>
        <FadedParagraph>
          {t("paragraphs.3")} &quot;
          <strong>There4You</strong>&quot;{t("paragraphs.4")} 
          <strong>{t("paragraphs.5")}</strong>
        </FadedParagraph>
        <FadedParagraph>
          <strong>{t("paragraphs.6")}</strong> {t("paragraphs.7")}  
          <strong>{t("paragraphs.8")}</strong> {t("paragraphs.9")}
        </FadedParagraph>
        <Link
          target="_blank"
          className="flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all w-64 h-12 rounded-full bg-[#D014E9] justify-self-center"
          href="https://www.linkedin.com/feed/update/urn:li:activity:6823742017542217728/"
        >
          {t("redirectButton")}
        </Link>

        <Role />
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