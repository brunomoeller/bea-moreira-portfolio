import Footer from "@/components/Global/Footer";
import React from "react";
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

type Props = {};

export default function there4you({}: Props) {
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
    </>
  );
}
