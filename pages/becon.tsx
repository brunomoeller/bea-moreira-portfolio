import Footer from "@/components/Global/Footer";
import React, { useEffect, useMemo, useState } from "react";
import Hero from "@/components/Becon/Hero";
import Introduction from "@/components/Becon/Introduction";
import Problems from "@/components/Becon/Problems";
import { quicksand, poppins } from "@/utils/fonts";
import Persona from "@/components/Becon/Persona";
import Userflow from "@/components/Becon/Userflow";
import SideMenu from "@/components/Becon/SideMenu";
import Role from "@/components/Becon/Role";
import Solution from "@/components/Becon/Solution";
import BeforeAndAfter from "@/components/Becon/BeforeAndAfter";
import Header from "@/components/Global/Header";
// import Lottie from "lottie-react";
import loadingAnimation from "@/public/icons/loading.json";
import Script from "next/script";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

type Props = {};

export default function Becon({}: Props) {

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
            <Solution />
            <Persona />
            <Userflow />
            <BeforeAndAfter />
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
