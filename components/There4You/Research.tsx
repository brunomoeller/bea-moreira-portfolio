import researchGraph1 from "@/public/images/there4you/researchGraph1.svg";
import researchGraph2 from "@/public/images/there4you/researchGraph2.svg";
import researchGraph3 from "@/public/images/there4you/researchGraph3.svg";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export const researchEvent = new Event("t4y-research-visible");

export default function Research({}: Props) {
  const t = useTranslations("there4you.research");

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(researchEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="research" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="text-lg md:text-xl">
        <FadedParagraph>
          {t("paragraphs.1")}
        </FadedParagraph>
      </div>
      <div className="text-lg md:text-xl">
        <FadedParagraph>
        {t("paragraphs.2")}
        </FadedParagraph>
      </div>
      <FadedDiv className="grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center p-10 pb-16 gap-y-10 lg:gap-y-20 lg:gap-x-24 text-sm md:text-base text-center lg:py-20 lg:px-20 bg-[#FDEFFF] rounded-3xl">
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-4 lg:gap-y-6">
          <p className="text-[#1B1B1B] font-medium">
          {t("questions.1")}
          </p>
          <div className="relative text-xs text-[#6C6C6C] font-medium">
            <Image src={researchGraph1} alt="Research Graph 1" />
            <span className="absolute top-5 -right-8">37,5%</span>
            <span className="absolute bottom-5 -left-8">62,5%</span>
            <div className="absolute top-16 -right-14 lg:top-24 lg:-right-16">
              <div className="grid grid-cols-2 lg:grid-cols-graphCaption items-center justify-items-center gap-2.5">
                <div className="bg-[#D014E9] w-2 h-2 rounded-full" />
                <span>{t("yes")}</span>
                <div className="bg-[#F4A2FF] w-2 h-2 rounded-full" />
                <span>{t("no")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-4 lg:gap-y-6">
          <p className="text-[#1B1B1B] font-medium">
          {t("questions.2")}
          </p>
          <div className="relative text-xs text-[#6C6C6C] font-medium">
            <Image src={researchGraph2} alt="Research Graph 2" />
            <span className="absolute top-5 -right-8">14,3%</span>
            <span className="absolute bottom-5 -left-8">85,7%</span>
            <div className="absolute top-16 -right-14 lg:top-24 lg:-right-16">
              <div className="grid grid-cols-2 lg:grid-cols-graphCaption items-center justify-items-center gap-2.5">
                <div className="bg-[#D014E9] w-2 h-2 rounded-full" />
                <span>{t("yes")}</span>
                <div className="bg-[#F4A2FF] w-2 h-2 rounded-full" />
                <span>{t("no")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 items-center justify-items-center gap-y-4 lg:gap-y-6">
          <p className="text-[#1B1B1B] font-medium">
          {t("questions.3")}
          </p>
          <div className="relative text-xs text-[#6C6C6C] font-medium">
            <Image
              className="rotate-[40deg]"
              src={researchGraph3}
              alt="Research Graph 2"
            />
            <span className="absolute top-5 -left-6">3,1%</span>
            <span className="absolute top-16 -left-10">9,4%</span>
            <span className="absolute -bottom-8 right-16">87,5%</span>
            <div className="absolute top-14 -right-16 lg:-right-28">
              <div className="grid grid-cols-graphCaption items-center justify-items-start gap-y-2.5 gap-x-1">
                <div className="bg-[#D014E9] w-2 h-2 rounded-full" />
                <span>{t("yes")}</span>
                <div className="bg-[#F4A2FF] w-2 h-2 rounded-full" />
                <span>{t("no")}</span>
                <div className="bg-[#FBCAB4] w-2 h-2 rounded-full" />
                <span className="w-10 lg:w-auto">{t("idk")}</span>
              </div>
            </div>
          </div>
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
