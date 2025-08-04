import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { beforeAndAfterVisibleEvent } from "./BeforeAndAfter";
import { contextEvent } from "./Context";
import { introductionVisibleEvent } from "./General";
import { goalsVisibleEvent } from "./Goals";
import { personaEvent } from "./Persona";
import { problemsVisibleEvent } from "./Problems";
import { userflowEvent } from "./Userflow";
import { approachVisibleEvent } from "./Approach";
import { impactVisibleEvent } from "./Impact";
import { learningVisibleEvent } from "./Learning";

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
    self.addEventListener("becon-context-visible", (e) => {
      if (e) {
        setPos("context");
      }
    });
    self.addEventListener("becon-problems-visible", (e) => {
      if (e) {
        setPos("problems");
      }
    });
    self.addEventListener("becon-goals-visible", (e) => {
      if (e) {
        setPos("goals");
      }
    });
    self.addEventListener("becon-approach-visible", (e) => {
      if (e) {
        setPos("approach");
      }
    });
    self.addEventListener("becon-impact-visible", (e) => {
      if (e) {
        setPos("impact");
      }
    });
    self.addEventListener("becon-learning-visible", (e) => {
      if (e) {
        setPos("learnings");
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
        <li id="nav-role" className={`${pos === "context" ? "nav-active" : ""}`}>
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(contextEvent);
              }, 1000);
            }}
            href="#context"
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
          className={`${pos === "goals" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(goalsVisibleEvent);
              }, 1000);
            }}
            href="#goals"
          >
            {t("4")}
          </Link>
        </li>
        <li
          id="nav-persona"
          className={`${pos === "approach" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(approachVisibleEvent);
              }, 1000);
            }}
            href="#approach"
          >
            {t("5")}
          </Link>
        </li>
        <li
          id="nav-userflow"
          className={`${pos === "impact" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(impactVisibleEvent);
              }, 1000);
            }}
            href="#results"
          >
            {t("6")}
          </Link>
        </li>
        <li
          id="nav-before-and-after"
          className={`${pos === "learnings" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(learningVisibleEvent);
              }, 1000);
            }}
            href="#learnings"
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