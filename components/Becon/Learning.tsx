import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";
import Link from "next/link";

type Props = {};

export const learningVisibleEvent = new Event("becon-learning-visible");

export default function Learning({}: Props) {
  const t = useTranslations("becon.learning");

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(learningVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="learnings" className="absolute translate-y-[-50vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("title")}</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 w-[85%] list-disc gap-y-4 md:gap-y-8 text-lg md:text-xl leading-10 pl-4 md:pl-6">
          <FadedListItem>
            {t("paragraphs.1")}
          </FadedListItem>
          <FadedListItem>
            {t("paragraphs.2")}
          </FadedListItem>
        </ul>
      </div>
      <div className="mt-16 flex flex-col gap-y-8">
        <h4 className="italic">
            {t("paragraphs.3")}
        </h4>
        <div className="flex flex-col overflow-clip">
            <h4 className="font-bold">
            {t("paragraphs.4")}
            </h4>
            <Link href={t("paragraphs.5")} className="underline italic">
                {t("paragraphs.5")}
            </Link>
        </div>
        <div className="overflow-clip">

        <Link href={t("paragraphs.6")} className="underline italic">
            {t("paragraphs.6")}
        </Link>
        </div>
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