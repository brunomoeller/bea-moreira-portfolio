import Footer from "@/components/Global/Footer";
import React from "react";
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
import Popup from "@/components/Global/Popup";

type Props = {};

export default function becon({}: Props) {
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
          <Solution />
          <Persona />
          <Userflow />
          <BeforeAndAfter />
        </div>
        <Footer />
      </main>
    </>
  );
}
