import { GetStaticPropsContext } from "next";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useTranslations } from "next-intl";

type Props = {};

export const competitorsEvent = new Event("t4y-competitors-visible");

export default function Competitors({}: Props) {
  const t = useTranslations("there4you.competitors");

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(competitorsEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="competitors" className="absolute translate-y-[-25vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <FadedParagraph className="text-lg md:text-xl font-medium">
      {t("subtitle")}
      </FadedParagraph>
      <FadedDiv className="grid lg:grid-cols-7 items-center justify-items-center gap-y-4 gap-x-4 lg:gap-x-0 lg:gap-y-8 text-sm py-10 px-10 lg:py-14 lg:px-0 bg-[#FAD3FF] rounded-3xl">
        <h4 className="md:col-span-2 self-end text-[#2C2C2C] font-bold uppercase">
        {t("header")}
        </h4>
        <span className="hidden lg:col-span-5 lg:inline-block"></span>
        <h5 className="lg:col-span-2 text-[#1B1B1B] font-bold">{t("companies.1.name")}</h5>
        <div className="lg:col-span-4 justify-self-start bg-[#FAF8F8] lg:h-32 py-4 px-8 rounded-md">
          <p className="text-[#1B1B1B] font-medium">
            {t("companies.1.issue")}
          </p>
        </div>
        <h5 className="lg:col-span-2 text-[#1B1B1B] font-bold">{t("companies.2.name")}</h5>
        <div className="lg:col-span-4 justify-self-start bg-[#FAF8F8] lg:h-32 py-4 px-8 rounded-md">
          <p className="text-[#1B1B1B] font-medium">
          {t("companies.2.issue")}
          </p>
        </div>
      </FadedDiv>
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
