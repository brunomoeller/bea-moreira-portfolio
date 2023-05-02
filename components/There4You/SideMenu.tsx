import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { introductionEvent } from "./Introduction";
import { roleEvent } from "./Role";
import { methodologyEvent } from "./Methodology";
import { problemsEvent } from "./Problems";
import { solutionEvent } from "./Solution";
import { competitorsEvent } from "./Competitors";
import { researchEvent } from "./Research";
import { empathyMapEvent } from "./EmpathyMap";
import { personaEvent } from "./Persona";
import { userflowEvent } from "./Userflow";
import { prototypeEvent, wireframesEvent } from "./Wireframes";
import { styleGuideEvent } from "./StyleGuide";

type Props = {};

export default function SideMenu({}: Props) {
  const [pos, setPos] = useState("introduction");

  useEffect(() => {
    self.addEventListener("t4y-introduction-visible", (e) => {
      if (e) {
        setPos("introduction");
      }
    });

    self.addEventListener("t4y-role-visible", (e) => {
      if (e) {
        setPos("role");
      }
    });

    self.addEventListener("t4y-methodology-visible", (e) => {
      if (e) {
        setPos("methodology");
      }
    });

    self.addEventListener("t4y-problems-visible", (e) => {
      if (e) {
        setPos("problems");
      }
    });
    self.addEventListener("t4y-solution-visible", (e) => {
      if (e) {
        setPos("solution");
      }
    });

    self.addEventListener("t4y-competitors-visible", (e) => {
      if (e) {
        setPos("competitors");
      }
    });
    self.addEventListener("t4y-research-visible", (e) => {
      if (e) {
        setPos("research");
      }
    });
    self.addEventListener("t4y-empathy-visible", (e) => {
      if (e) {
        setPos("empathy-map");
      }
    });
    self.addEventListener("t4y-persona-visible", (e) => {
      if (e) {
        setPos("persona");
      }
    });
    self.addEventListener("t4y-userflow-visible", (e) => {
      if (e) {
        setPos("userflow");
      }
    });
    self.addEventListener("t4y-wireframes-visible", (e) => {
      if (e) {
        setPos("wireframes");
      }
    });
    self.addEventListener("t4y-prototype-visible", (e) => {
      if (e) {
        setPos("prototype");
      }
    });
    self.addEventListener("t4y-style-visible", (e) => {
      if (e) {
        setPos("style-guide");
      }
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
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(introductionEvent);
              }, 1000);
            }}
            href="#introduction"
          >
            Introduction
          </Link>
        </li>
        <li id="nav-role" className={`${pos === "role" ? "nav-active" : ""}`}>
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(roleEvent);
              }, 1000);
            }}
            href="#role"
          >
            My role and team
          </Link>
        </li>
        <li
          id="nav-methodology"
          className={`${pos === "methodology" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(methodologyEvent);
              }, 1000);
            }}
            href="#methodology"
          >
            Methodology
          </Link>
        </li>
        <li
          id="nav-problems"
          className={`${pos === "problems" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(problemsEvent);
              }, 1000);
            }}
            href="#problems"
          >
            Problems
          </Link>
        </li>
        <li
          id="nav-solution"
          className={`${pos === "solution" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(solutionEvent);
              }, 1000);
            }}
            href="#solution"
          >
            Solution
          </Link>
        </li>
        <li
          id="nav-competitors"
          className={`${pos === "competitors" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(competitorsEvent);
              }, 1000);
            }}
            href="#competitors"
          >
            Competitive analysis
          </Link>
        </li>
        <li
          id="nav-research"
          className={`${pos === "research" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(researchEvent);
              }, 1000);
            }}
            href="#research"
          >
            Research
          </Link>
        </li>
        <li
          id="nav-empathy-map"
          className={`${pos === "empathy-map" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(empathyMapEvent);
              }, 1000);
            }}
            href="#empathy-map"
          >
            User empathy map
          </Link>
        </li>
        <li
          id="nav-persona"
          className={`${pos === "persona" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(personaEvent);
              }, 1000);
            }}
            href="#persona"
          >
            User persona
          </Link>
        </li>
        <li
          id="nav-userflow"
          className={`${pos === "userflow" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(userflowEvent);
              }, 1000);
            }}
            href="#userflow"
          >
            User flow diagram
          </Link>
        </li>
        <li
          id="nav-wireframes"
          className={`${pos === "wireframes" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(wireframesEvent);
              }, 1000);
            }}
            href="#wireframes"
          >
            Wireframes
          </Link>
        </li>
        <li
          id="nav-prototype"
          className={`${pos === "prototype" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(prototypeEvent);
              }, 1000);
            }}
            href="#prototype"
          >
            Prototype
          </Link>
        </li>
        <li
          id="nav-style-guide"
          className={`${pos === "style-guide" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(styleGuideEvent);
              }, 1000);
            }}
            href="#style-guide"
          >
            Style guide
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
