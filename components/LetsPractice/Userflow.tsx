import Image from "next/image";
import React, { useEffect } from "react";
import diagram from "@/public/images/lets-practice/letspractice-userflow.webp";
import { FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const userflowEvent = new Event("lp-userflow-visible");

export default function Userflow({}: Props) {
  const t = useTranslations("letsPractice.userFlow")

  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(userflowEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="userflow" className="absolute translate-y-[-25vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        {t("title")}
      </FadedH3>

      <Image className="w-full h-full" src={diagram} alt="userflow diagram" />
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
