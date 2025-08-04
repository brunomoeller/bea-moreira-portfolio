import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import introduction from "@/public/images/there4you/Introduction.webp";
import connect from "@/public/images/there4you/Connect.webp";
import home from "@/public/images/there4you/Home.webp";
import letsPractice from "@/public/images/lets-practice/letspractice.webp";
import redirectIcon from "@/public/icons/redirectIcon.svg";
import { FadedDiv } from "../Framer/MotionComponents";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import cart1 from "@/public/images/becon/cart-1.webp";
import cart2 from '@/public/images/becon/cart-2.webp';
import cart3 from '@/public/images/becon/cart-3.webp';

type Props = {};

export default function Projects({}: Props) {
  const t = useTranslations("home.redirectLinks");
  const t2 = useTranslations("home.projectsPhrases");

  const carouselImages = [introduction, connect, home];
  const cartImages = [cart1, cart2, cart3];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCartIndex, setCurrentCartIndex] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const cartCarouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleCartScroll = () => {
      if (!cartCarouselRef.current) return;
      const scrollLeft = cartCarouselRef.current.scrollLeft;
      const slideWidth = cartCarouselRef.current.offsetWidth * 0.8;
      const index = Math.round(scrollLeft / slideWidth);
      setCurrentCartIndex(index);
    };

    const node = cartCarouselRef.current;
    if (!node) return;
    node.addEventListener("scroll", handleCartScroll, { passive: true });
    return () => node.removeEventListener("scroll", handleCartScroll);
  }, []);

  return (
    <main className="col-span-12 grid grid-cols-2 gap-y-6 gap-x-4 mt-24 font-poppins">
      {/* Let's Practice */}
      <Link
        href="/letspractice"
        className="group order-5 col-span-2 flex items-start justify-center 
        mt-6 pt-24 px-12 md:px-20 h-104 rounded-3xl 
        bg-gradient-to-b from-linear-purple-1 to-linear-purple-2 
        overflow-hidden"
      >
        <div>
        <Image
          className="h-auto w-101 rounded-2xl md:roundex-3xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={letsPractice}
          alt="lets practice"
        />
        </div>
      </Link>

      {/* Becon - Cart Carousel */}
      <FadedDiv className="group order-1 col-span-2 relative h-104 mt-6 rounded-3xl bg-gradient-to-b from-linear-blue-1 to-linear-blue-2">
        {/* Scrollable Flex Row for Cart Images */}
        <span id="projects" className="absolute -top-[18vh]"></span>
        <div
          
          ref={cartCarouselRef}
          className="
            flex h-full
            px-[10vw] space-x-8
            overflow-x-auto snap-x snap-mandatory scrollbar-hide
            sm:justify-center sm:overflow-x-visible sm:snap-none
            items-center
          "
        >
          {cartImages.map((img, idx) => (
            <Link
              key={idx}
              href="/becon"
              className="
                flex-shrink-0 w-[80vw] sm:w-auto
                flex items-center justify-center
                snap-center sm:snap-none
              "
            >
              <Image 
                className="h-101 w-auto transform transition-transform duration-300 ease-in-out group-hover:scale-105" 
                src={img} 
                alt="cart abandonment" 
              />
            </Link>
          ))}
        </div>

        {/* Dots for Cart Carousel - only on mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-2 sm:hidden">
          {cartImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentCartIndex === idx ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </FadedDiv>

      {/* Let's Practice Text */}
      <div className="order-6 sm:justify-self-auto flex flex-col items-start col-span-2 justify-self-center gap-x-4 gap-y-2">
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
        className="order-2 sm:justify-self-auto flex flex-col items-start col-span-2 justify-self-center gap-x-4 gap-y-2"
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

      {/* There4You Carousel Container */}
      <FadedDiv className="group order-3 col-span-2 relative h-104 mt-14 rounded-3xl bg-gradient-to-b from-linear-pink-1 via-linear-pink-2 to-Linear-pink-3">
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
                className="h-101 w-auto rounded-2xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
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
      <div className="order-4 col-span-2 flex flex-col items-start justify-self-center sm:justify-self-start gap-x-4 gap-y-2">
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