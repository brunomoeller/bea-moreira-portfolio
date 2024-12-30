import React, { useEffect } from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const roleEvent = new Event("t4y-role-visible");

function Role({}: Props) {
  const t = useTranslations("there4you.myRole");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(roleEvent);
    }
  }, [isVisible]);

  return (
    <>
      <FadedH3 className="text-3xl md:text-4xl font-bold">
        {t("title")}
      </FadedH3>
      <div
        ref={ref}
        className="grid grid-cols-1 gap-y-4 md:gap-y-8 text-lg md:text-xl relative"
      >
        <span id="role" className="absolute translate-y-[-52vh]" />
        <FadedParagraph>
          <strong>{t("items.role.1")}</strong> {t("items.role.2")}
        </FadedParagraph>
        <FadedParagraph>
          <strong>{t("items.team.1")}</strong> {t("items.team.2")}
        </FadedParagraph>
      </div>
    </>
  );
}


export default Role;

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}

