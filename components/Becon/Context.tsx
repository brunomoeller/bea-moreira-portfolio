import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export const contextEvent = new Event("becon-context-visible");

export default function Context({}: Props) {
  const t = useTranslations("becon.context");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(contextEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="context" className="absolute translate-y-[-50vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          {t("paragraphs.1")}
        </FadedParagraph>
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
