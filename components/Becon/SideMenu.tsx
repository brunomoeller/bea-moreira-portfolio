import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { introductionVisibleEvent } from "./Introduction";
import { roleEvent } from "./Role";
import { problemsVisibleEvent } from "./Problems";
import { solutionVisibleEvent } from "./Solution";
import { personaEvent } from "./Persona";
import { userflowEvent } from "./Userflow";
import { beforeAndAfterVisibleEvent } from "./BeforeAndAfter";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {};

export default function SideMenu({}: Props) {
  const t = useTranslations("sideMenu.becon");

  const [pos, setPos] = useState("introduction");

  useEffect(() => {
    self.addEventListener("becon-introduction-visible", (e) => {
      if (e) {
        setPos("introduction");
      }
    });
    self.addEventListener("becon-role-visible", (e) => {
      if (e) {
        setPos("role");
      }
    });
    self.addEventListener("becon-problems-visible", (e) => {
      if (e) {
        setPos("problems");
      }
    });
    self.addEventListener("becon-solution-visible", (e) => {
      if (e) {
        setPos("solution");
      }
    });
    self.addEventListener("becon-persona-visible", (e) => {
      if (e) {
        setPos("persona");
      }
    });
    self.addEventListener("becon-userflow-visible", (e) => {
      if (e) {
        setPos("userflow");
      }
    });
    self.addEventListener("becon-beforeAndAfter-visible", (e) => {
      if (e) {
        setPos("before-and-after");
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
                self.dispatchEvent(introductionVisibleEvent);
              }, 1000);
            }}
            href="#introduction"
          >
            {t("1")}
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
            {t("2")}
          </Link>
        </li>
        <li
          id="nav-problems"
          className={`${pos === "problems" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(problemsVisibleEvent);
              }, 1000);
            }}
            href="#problems"
          >
            {t("3")}
          </Link>
        </li>
        <li
          id="nav-solution"
          className={`${pos === "solution" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(solutionVisibleEvent);
              }, 1000);
            }}
            href="#solution"
          >
            {t("4")}
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
            {t("5")}
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
            {t("6")}
          </Link>
        </li>
        <li
          id="nav-before-and-after"
          className={`${pos === "before-and-after" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(beforeAndAfterVisibleEvent);
              }, 1000);
            }}
            href="#before-and-after"
          >
            {t("7")}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}