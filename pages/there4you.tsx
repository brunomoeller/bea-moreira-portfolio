import Footer from "@/components/Global/Footer";
import React, { useEffect, useState } from "react";
import Hero from "@/components/There4You/Hero";
import Introduction from "@/components/There4You/Introduction";
import Methodology from "@/components/There4You/Methodology";
import Problems from "@/components/There4You/Problems";
import Solution from "@/components/There4You/Solution";
import Competitors from "@/components/There4You/Competitors";
import Research from "@/components/There4You/Research";
import EmpathyMap from "@/components/There4You/EmpathyMap";
import { quicksand, poppins } from "@/utils/fonts";
import Persona from "@/components/There4You/Persona";
import Userflow from "@/components/There4You/Userflow";
import Wireframes from "@/components/There4You/Wireframes";
import StyleGuide from "@/components/There4You/StyleGuide";
import SideMenu from "@/components/There4You/SideMenu";
import Header from "@/components/Global/Header";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/icons/loading.json";
import Script from "next/script";

type Props = {};

export default function There4you({}: Props) {
  const [isLoading, setLoading] = useState(true);

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
            <Methodology />
            <Problems />
            <Solution />
            <Competitors />
            <Research />
            <EmpathyMap />
            <Persona />
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
