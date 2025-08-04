import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import Result from "../Global/Result";

type Props = {};

export const introductionVisibleEvent = new Event("becon-introduction-visible");

export default function General({}: Props) {
  const t = useTranslations("becon.introduction")

  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(introductionVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="introduction" className="absolute translate-y-[-70vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          {t("paragraphs.1")}
        </FadedParagraph>
        <FadedParagraph>
          <b>{t("paragraphs.2")}</b> {t("paragraphs.3")}
        </FadedParagraph>
        <FadedParagraph>
          <b>{t("paragraphs.4")}</b> {t("paragraphs.5")}
        </FadedParagraph>
        <FadedParagraph>
          <b>{t("paragraphs.6")}</b> {t("paragraphs.7")}
        </FadedParagraph>
        <FadedParagraph>
          <b>{t("paragraphs.8")}</b> {t("paragraphs.9")}
        </FadedParagraph>
      </div>
      <div className="flex flex-col gap-y-6 md:flex-row gap-x-6">
        <Result content={t("results.1")} />
        <Result content={t("results.2")} />
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
