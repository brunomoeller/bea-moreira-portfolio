import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import introduction from "@/public/images/there4you/t4y1.webp";
import connect from "@/public/images/there4you/t4y2.webp";
import home from "@/public/images/there4you/t4y3.webp";
import letsPractice from "@/public/images/lets-practice/letspractice.webp";
import becon from "@/public/images/becon/becon-mobile.webp";
import redirectIcon from "@/public/icons/redirectIcon.svg";
import { FadedDiv } from "../Framer/MotionComponents";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export default function Projects({}: Props) {
  const t = useTranslations("home.redirectLinks");
  const t2 = useTranslations("home.projectsPhrases");

  const carouselImages = [introduction, connect, home];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const slideWidth = carouselRef.current.offsetWidth * 0.8;
    const index = Math.round(scrollLeft / slideWidth);
    setCurrentIndex(index);
  };

  const node = carouselRef.current;
  if (!node) return;
  node.addEventListener("scroll", handleScroll, { passive: true });
  return () => node.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="col-span-12 grid grid-cols-2 gap-y-6 gap-x-4 mt-24 font-poppins">
      {/* Let's Practice */}
      <Link
        href="/letspractice"
        className="order-3 sm:order-1 col-span-2 sm:col-span-1 flex items-start justify-center 
        mt-6 pt-24 px-12 md:px-20 h-104 rounded-3xl 
        bg-gradient-to-b from-linear-purple-1 to-linear-purple-2 
        overflow-hidden"
      >
        <Image
          className="h-auto w-101 rounded-2xl md:roundex-3xl"
          src={letsPractice}
          alt="lets practice"
        />
      </Link>

      {/* Becon */}
      <Link
        href="/becon"
        className="order-5 sm:order-1 col-span-2 sm:col-span-1 flex justify-center items-center 
        mt-6 h-104 rounded-3xl 
        bg-gradient-to-b from-linear-blue-1 to-linear-blue-2"
      >
        <Image className="h-101 w-auto" src={becon} alt="becon login page" />
      </Link>

      {/* Let's Practice Text */}
      <div className="order-4 sm:order-1 sm:col-span-1 sm:justify-self-auto flex flex-col items-start col-span-2 justify-self-center gap-x-4 gap-y-2">
        <div className="flex items-center col-span-2 justify-self-center gap-x-4">
          <Link
            className="text-base md:text-xl text-darker-white font-medium"
            href="/letspractice"
          >
            {t("letsPractice")}
          </Link>
          <Image className="h-3 w-3" src={redirectIcon} alt="go to" />
        </div>
        <h1 className="font-quicksand font-bold text-darker-white text-3xl md:w-[60%] leading-9">
          {t2("letsPractice")}
        </h1>
      </div>

      {/* Becon Text */}
      <div
        className="order-6 sm:order-1 sm:col-span-1 sm:justify-self-auto flex flex-col items-start col-span-2 justify-self-center gap-x-4 gap-y-2"
      >
        <div className="flex items-center col-span-2 justify-self-center gap-x-4">
          <Link
            className="text-base md:text-xl text-darker-white font-medium"
            href="/becon"
          >
            {t("becon")}
          </Link>
          <Image className="h-3 w-3" src={redirectIcon} alt="go to" />
        </div>
        <h1 className="font-quicksand font-bold text-darker-white text-3xl md:w-[70%] leading-9">
          {t2("becon")}
        </h1>
      </div>

      {/* Carousel Container */}
<FadedDiv className="order-1 col-span-2 relative h-100 mt-14 rounded-3xl bg-gradient-to-b from-linear-pink-1 via-linear-pink-2 to-Linear-pink-3">
  {/* Scrollable Flex Row */}
  <div
  ref={carouselRef}
  className="
    flex h-full
    px-[10vw] space-x-8
    overflow-x-auto snap-x snap-mandatory scrollbar-hide
    sm:justify-center sm:overflow-x-visible sm:snap-none
  "
>
  {carouselImages.map((img, idx) => (
    <Link
      key={idx}
      href="/there4you"
      className="
        flex-shrink-0 w-[80vw] sm:w-auto
        flex items-center justify-center
        snap-center sm:snap-none
      "
    >
      <Image
        quality={100}
        className="h-[22rem] w-auto rounded-2xl"
        src={img}
        alt={`t4y-${idx}`}
      />
    </Link>
  ))}
</div>

  {/* Dots stay fixed at bottom center, only on mobile */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-2 sm:hidden">
    {carouselImages.map((_, idx) => (
      <span
        key={idx}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          currentIndex === idx ? "bg-white" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</FadedDiv>




      {/* There4You Text */}
      <div className="order-2 sm:order-1 col-span-2 flex flex-col items-start justify-self-center sm:justify-self-start gap-x-4 gap-y-2">
        <div className="flex items-center col-span-2 justify-self-center gap-x-4">
          <Link
            className="text-base md:text-xl text-darker-white font-medium"
            href="/there4you"
          >
            {t("there4you")}
          </Link>
          <Image className="h-3 w-3" src={redirectIcon} alt="go to" />
        </div>
        <h1 className="font-quicksand font-bold text-darker-white text-3xl leading-9">
          {t2("there4you")}
        </h1>
      </div>
    </main>
    
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
