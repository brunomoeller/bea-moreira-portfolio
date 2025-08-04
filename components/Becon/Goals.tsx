import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";

type Props = {};

export const goalsVisibleEvent = new Event("becon-goals-visible");

export default function Goals({}: Props) {
  const t = useTranslations("becon.goals");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(goalsVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="goals" className="absolute translate-y-[-50vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 text-lg md:text-xl leading-10 pl-4 md:pl-6">
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