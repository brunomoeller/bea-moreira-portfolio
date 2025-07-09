import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import lowFidelity from "@/public/images/there4you/wireframe-low-fidelity.webp";
import connect from "@/public/images/there4you/t4y-high-fidelity-1.webp";
import emergencyContacts from "@/public/images/there4you/t4y-high-fidelity-2.webp";
import socialMedia from "@/public/images/there4you/t4y-high-fidelity-3.webp";
import sosMessage from "@/public/images/there4you/t4y-high-fidelity-4.webp";
import t4yHome from "@/public/images/there4you/t4y-high-fidelity-5.webp";
import community from "@/public/images/there4you/t4y-high-fidelity-6.webp";
import statistics from "@/public/images/there4you/t4y-high-fidelity-7.webp";
import highFidelity from "@/public/images/there4you/t4y-high-fidelity-8.webp";
import { FadedDiv, FadedH3, FadedH4 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export const wireframesEvent = new Event("t4y-wireframes-visible");
export const prototypeEvent = new Event("t4y-prototype-visible");

export default function Wireframes({}: Props) {
  const t = useTranslations("there4you.wireframes");
  const t2 = useTranslations("there4you.prototype");

  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  const [prototypeRef, isVideoVisible] = useInView({
    threshold: 0.1,
  });

  const [highWireframes, isHighWireframesVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(wireframesEvent);
    }

    if (isVideoVisible) {
      dispatchEvent(prototypeEvent);
    }

    if (isHighWireframesVisible) {
      dispatchEvent(prototypeEvent);
    }
  }, [isVisible, isVideoVisible, isHighWireframesVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="wireframes" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        {t("title")}
      </FadedH3>
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
      {t("subtitles.1")}
      </FadedH4>
      <Image
        className="w-full h-full"
        src={lowFidelity}
        alt="low fidelity wireframes"
      />
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
      {t("subtitles.2")}
      </FadedH4>
      <div className="grid grid-cols-1 gap-y-12 gap-x-4 w-full md:w-auto md:grid-cols-highWireframe md:gap-x-9 md:gap-y-16 items-center justify-self-center">
        <Image
          className="h-500 w-auto md:h-auto md:translate-x-10 justify-self-center md:justify-self-auto order-1"
          src={connect}
          alt="connect bracelet"
        />
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center items-center justify-items-center md:justify-items-start
        border-2 border-dashed border-[#FAD3FF] md:h-52 md:w-100 md:max-w-100 p-4 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-2 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">
          {t("baloons.1.title")}
          </h5>
          <p className="text-sm md:text-base font-medium">
          {t("baloons.1.description")}
          </p>
        </FadedDiv>
        <Image
          className="h-500 w-auto md:h-auto order-3 md:order-1 justify-self-center md:justify-self-auto"
          src={emergencyContacts}
          alt="Emergency Contacts"
        />
        <Image
          className="h-500 w-auto md:h-auto order-4 md:order-1 justify-self-center md:justify-self-auto"
          src={socialMedia}
          alt="Social Media"
        />
        <Image
          className="h-500 w-auto md:h-auto order-5 md:order-1 justify-self-center md:justify-self-auto"
          src={sosMessage}
          alt="SOS Message"
        />
        <Image
          className="h-500 w-auto md:h-auto md:translate-x-10 order-6 md:order-1 justify-self-center md:justify-self-auto"
          src={t4yHome}
          alt="Home"
        />
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center items-center justify-items-center md:justify-items-start 
        border-2 border-dashed border-[#FAD3FF] md:h-56 md:w-100 md:max-w-100 p-4 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-7 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">{t("baloons.2.title")}</h5>
          <p className="text-sm md:text-base font-medium">
          {t("baloons.2.description")}
          </p>
        </FadedDiv>
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center md:justify-self-start 
        items-center border-2 border-dashed border-[#FAD3FF] md:h-56 md:w-100 md:max-w-100 p-4 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-9 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">{t("baloons.3.title")}</h5>
          <p className="text-sm md:text-base font-medium">
          {t("baloons.3.description")}
          </p>
        </FadedDiv>
        <Image
          className="h-500 w-auto md:h-auto md:-translate-x-20 order-8 justify-self-center md:order-1"
          src={community}
          alt="Community"
        />
        <Image
          className="h-500 w-auto md:h-auto md:translate-x-10 order-10 justify-self-center md:justify-self-auto md:order-1"
          src={statistics}
          alt="Statistics"
        />
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center items-center border-2 
        border-dashed border-[#FAD3FF] p-4 md:h-30 md:w-101 md:max-w-100 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-11 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">{t("baloons.4.title")}</h5>
          <p className="text-sm md:text-base font-medium">
          {t("baloons.4.description")}
          </p>
        </FadedDiv>
      </div>
      <div className="grid grid-cols-1 gap-2 md:gap-8 w-15 h-100 lg:w-auto lg:h-auto relative">
        <span id="prototype" className="absolute translate-y-[-10vh]" />
        <FadedH3 className="text-2xl md:text-3xl font-semibold justify-self-center">
          {t2("title")}
        </FadedH3>
        <motion.video
          ref={prototypeRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-full object-cover md:object-contain"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://res.cloudinary.com/dqxorrqje/video/upload/v1679091241/Prototype2_dtxyua.mp4"
            type="video/mp4"
          />
        </motion.video>
      </div>
      <Image
        ref={highWireframes}
        className="w-full h-auto md:mt-36 mt-20"
        src={highFidelity}
        alt="High fidelity wireframes"
      />
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
