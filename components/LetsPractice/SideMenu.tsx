import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function SideMenu({}: Props) {
  const [pos, setPos] = useState("introduction");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      try {
        let scrolled =
          document.querySelector<HTMLBodyElement>("html")?.scrollTop;
        if (scrolled) {
          if (scrolled >= 0 && scrolled < 1090) {
            setPos("introduction");
          } else if (scrolled >= 1090 && scrolled < 1410) {
            setPos("role");
          } else if (scrolled >= 1410 && scrolled < 1715) {
            setPos("problems");
          } else if (scrolled >= 1715 && scrolled < 2140) {
            setPos("goals");
          } else if (scrolled >= 2140 && scrolled < 2595) {
            setPos("competitors");
          } else if (scrolled >= 2595 && scrolled < 3310) {
            setPos("empathy-map");
          } else if (scrolled >= 3310 && scrolled < 5100) {
            setPos("persona");
          } else if (scrolled >= 5100 && scrolled < 6000) {
            setPos("journey-map");
          } else if (scrolled >= 6000 && scrolled < 6500) {
            setPos("userflow");
          } else if (scrolled >= 6500 && scrolled < 12000) {
            setPos("wireframes");
          } else if (scrolled >= 12000) {
            setPos("style-guide");
          }
        }
      } catch {}
    });
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="sticky left-0 top-1/3 text-[#ADADAD] font-poppins"
    >
      <ul className="grid grid-cols-1 gap-y-2 list-none">
        <li
          id="nav-introduction"
          className={`${pos === "introduction" ? "nav-active" : ""}`}
        >
          <Link href="#introduction">Introduction</Link>
        </li>
        <li id="nav-role" className={`${pos === "role" ? "nav-active" : ""}`}>
          <Link href="#role">My role</Link>
        </li>
        <li
          id="nav-problems"
          className={`${pos === "problems" ? "nav-active" : ""}`}
        >
          <Link href="#problems">Problems</Link>
        </li>
        <li id="nav-goals" className={`${pos === "goals" ? "nav-active" : ""}`}>
          <Link href="#goals">Goals</Link>
        </li>
        <li
          id="nav-competitors"
          className={`${pos === "competitors" ? "nav-active" : ""}`}
        >
          <Link href="#competitors">Competitive analysis</Link>
        </li>
        <li
          id="nav-empathy-map"
          className={`${pos === "empathy-map" ? "nav-active" : ""}`}
        >
          <Link href="#empathy-map">User empathy map</Link>
        </li>
        <li
          id="nav-persona"
          className={`${pos === "persona" ? "nav-active" : ""}`}
        >
          <Link href="#persona">User persona</Link>
        </li>
        <li
          id="nav-journey"
          className={`${pos === "journey-map" ? "nav-active" : ""}`}
        >
          <Link href="#journey-map">User journey map</Link>
        </li>
        <li
          id="nav-userflow"
          className={`${pos === "userflow" ? "nav-active" : ""}`}
        >
          <Link href="#userflow">User flow diagram</Link>
        </li>
        <li
          id="nav-wireframes"
          className={`${pos === "wireframes" ? "nav-active" : ""}`}
        >
          <Link href="#wireframes">Wireframes</Link>
        </li>
        <li
          id="nav-style-guide"
          className={`${pos === "style-guide" ? "nav-active" : ""}`}
        >
          <Link href="#style-guide">Style guide</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
