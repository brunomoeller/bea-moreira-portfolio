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
          } else if (scrolled >= 1090 && scrolled < 1570) {
            setPos("role");
          } else if (scrolled >= 1570 && scrolled < 1850) {
            setPos("methodology");
          } else if (scrolled >= 1850 && scrolled < 2460) {
            setPos("problems");
          } else if (scrolled >= 2460 && scrolled < 3300) {
            setPos("solution");
          } else if (scrolled >= 3300 && scrolled < 4060) {
            setPos("competitors");
          } else if (scrolled >= 4060 && scrolled < 5200) {
            setPos("research");
          } else if (scrolled >= 5200 && scrolled < 6200) {
            setPos("empathy-map");
          } else if (scrolled >= 6200 && scrolled < 6940) {
            setPos("persona");
          } else if (scrolled >= 6940 && scrolled < 8000) {
            setPos("userflow");
          } else if (scrolled >= 8000 && scrolled < 12200) {
            setPos("wireframes");
          } else if (scrolled >= 12200 && scrolled < 14300) {
            setPos("prototype");
          } else if (scrolled >= 14300) {
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
          <Link href="#role">My role and team</Link>
        </li>
        <li
          id="nav-methodology"
          className={`${pos === "methodology" ? "nav-active" : ""}`}
        >
          <Link href="#methodology">Methodology</Link>
        </li>
        <li
          id="nav-problems"
          className={`${pos === "problems" ? "nav-active" : ""}`}
        >
          <Link href="#problems">Problems</Link>
        </li>
        <li
          id="nav-solution"
          className={`${pos === "solution" ? "nav-active" : ""}`}
        >
          <Link href="#solution">Solution</Link>
        </li>
        <li
          id="nav-competitors"
          className={`${pos === "competitors" ? "nav-active" : ""}`}
        >
          <Link href="#competitors">Competitive analysis</Link>
        </li>
        <li
          id="nav-research"
          className={`${pos === "research" ? "nav-active" : ""}`}
        >
          <Link href="#research">Research</Link>
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
          id="nav-prototype"
          className={`${pos === "prototype" ? "nav-active" : ""}`}
        >
          <Link href="#prototype">Prototype</Link>
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
