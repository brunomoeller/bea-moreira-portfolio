import Footer from "@/components/Global/Footer";
import React from "react";
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

type Props = {};

export default function letspractice({}: Props) {
  return (
    <>
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
    </>
  );
}
