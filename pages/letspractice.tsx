import Footer from "@/components/Global/Footer";
import React, { useEffect, useState } from "react";
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
import Lottie from "lottie-react";
import loadingAnimation from "@/public/icons/loading.json";

type Props = {};

export default function LetsPractice({}: Props) {
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
