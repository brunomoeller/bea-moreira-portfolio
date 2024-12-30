import React, { useEffect } from "react";
import Image from "next/image";
import persona from "@/public/images/there4you/t4y-persona.png";
import { FadedDiv, FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};
export const personaEvent = new Event("t4y-persona-visible");

export default function Persona({}: Props) {
  const t = useTranslations("there4you.userPersona");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(personaEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand md:px-16"
    >
      <span id="persona" className="absolute translate-y-[-25vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        {t("title")}
      </FadedH3>
      <FadedDiv
        className="grid grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-9 bg-[#FAD3FF] 
      px-10 py-10 lg:py-20 lg:px-20 justify-items-start items-center text-lg md:text-xl text-[#1B1B1B] rounded-3xl overflow-hidden"
      >
        <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden  lg:self-auto">
          <Image
            className="w-20 h-20 lg:w-28 lg:h-28 object-cover object-center"
            src={persona}
            alt="Ashley"
          />
        </div>
        <div className="col-span-2 lg:col-span-5 grid grid-cols-1 gap-y-2 lg:ml-10 justify-self-start lg:justify-self-auto">
          <p>
            <strong>{t("name.1")}:</strong> {t("name.2")}
          </p>
          <p>
            <strong>{t("age.1")}:</strong> {t("age.2")}
          </p>
        </div>
        <hr className="col-span-3 lg:col-span-6 border border-t border-top-[#FCFCFC] w-screen -translate-x-20" />
        <div className="col-span-3 lg:col-span-6 grid grid-cols-1 gap-y-6">
          <h4 className="font-bold">{t("subtitle")}</h4>
          <p>
          {t("description")}
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