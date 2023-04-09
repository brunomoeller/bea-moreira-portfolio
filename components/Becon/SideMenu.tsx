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
          } else if (scrolled >= 1090 && scrolled < 1375) {
            setPos("role");
          } else if (scrolled >= 1375 && scrolled < 1610) {
            setPos("problems");
          } else if (scrolled >= 1610 && scrolled < 2200) {
            setPos("solution");
          } else if (scrolled >= 2200 && scrolled < 2800) {
            setPos("persona");
          } else if (scrolled >= 2800 && scrolled < 3300) {
            setPos("userflow");
          } else if (scrolled >= 3300) {
            setPos("before-and-after");
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
          <Link href="#problems">Problems & challenges</Link>
        </li>
        <li
          id="nav-solution"
          className={`${pos === "solution" ? "nav-active" : ""}`}
        >
          <Link href="#solution">Solution</Link>
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
          id="nav-before-and-after"
          className={`${pos === "before-and-after" ? "nav-active" : ""}`}
        >
          <Link href="#before-and-after">Before and after</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
