import Footer from "@/components/Global/Footer";
import React, { useEffect, useMemo, useState } from "react";
import Hero from "@/components/LetsPractice/Hero";
import Introduction from "@/components/LetsPractice/Introduction";
import Problems from "@/components/LetsPractice/Problems";
import Competitors from "@/components/LetsPractice/Competitors";
import EmpathyMap from "@/components/LetsPractice/EmpathyMap";

import { quicksand, poppins } from "@/utils/fonts";
import Persona from "@/components/LetsPractice/Persona";
import Userflow from "@/components/LetsPractice/Userflow";
import Wireframes from "@/components/LetsPractice/Wireframes";
import StyleGuide from "@/components/LetsPractice/StyleGuide";
import SideMenu from "@/components/LetsPractice/SideMenu";
import Role from "@/components/LetsPractice/Role";
import Goals from "@/components/LetsPractice/Goals";
import UserJourneyMap from "@/components/LetsPractice/UserJourneyMap";
import Header from "@/components/Global/Header";
// import Lottie from "lottie-react";
import loadingAnimation from "@/public/icons/loading.json";
import Script from "next/script";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Head from "next/head";

type Props = {};

export default function LetsPractice({}: Props) {
const t = useTranslations("letsPractice");
  const [isLoading, setLoading] = useState(true);
  const Lottie = useMemo(
    () => dynamic(() => import("lottie-react"), { ssr: false }),
    []
  );

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
    <Head>
        <title>Beatriz Moreira | Let&apos;s Practice</title>
        <meta
          name="description"
          content={t("introduction.paragraphs.1") + t("myRole.paragraphs.1")}
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.25"
        />
        <meta name="color-scheme" content="light only"></meta>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-51DXXN4Q2P"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-51DXXN4Q2P');`
        }
      </Script>
      {isLoading ? (
        <div className="grid grid-cols-1 items-center justify-items-center h-[100vh] w-[100vw]">
          <Lottie
            className="h-32 w-32 transition-all delay-300"
            animationData={loadingAnimation}
          />
        </div>
      ) : (
        <main
          className={`main-container ${quicksand.variable} ${poppins.variable}`}
        >
          <Header />
          <Hero />
          <div className="side-menu-container">
            <SideMenu />
          </div>
          <div className="sections-container">
            <Introduction />
            <Role />
            <Problems />
            <Goals />
            <Competitors />
            <EmpathyMap />
            <Persona />
            <UserJourneyMap />
            <Userflow />
            <Wireframes />
            <StyleGuide />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}
