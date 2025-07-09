import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export default function Services({}: Props) {
  const t = useTranslations("home.services");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      id="services"
      className="col-span-12 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 items-center justify-center mt-48 lg:mt-72 font-quicksand snap-center snap-always"
    >
      <div className="lg:row-span-6 grid items-center justify-center">
        <h2 className="text-3xl lg:text-5xl text-darker-white font-bold">
          {t("title")}
        </h2>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">{t("categories.1")}</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">{t("categories.2")}</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">{t("categories.3")}</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">{t("categories.4")}</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">{t("categories.5")}</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36">
        <h3 className="service-title">{t("categories.6")}</h3>
      </div>
    </motion.section>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}