import Link from "next/link";
import React, { useEffect } from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
import Role from "./Role";

type Props = {};

export const introductionEvent = new Event("t4y-introduction-visible");

export default function Introduction({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(introductionEvent);
    }
  }, [isVisible]);

  return (
    <section className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative">
      <span
        ref={ref}
        id="introduction"
        className="absolute translate-y-[-52vh]"
      />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Introduction</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          <strong>Upkey</strong> (Education and career development software
          service from Chicago) in partnership with{" "}
          <strong>IE Business School</strong> (Business School for
          Entrepreneurship in Europe) created an entrepreneurship project
          competition. It was less than one week to create a business idea.
        </FadedParagraph>
        <FadedParagraph>
          My team of 4 girls, developed a Startup idea called &quot;
          <strong>There4You</strong>&quot;, a technological, discreet, and
          creative bracelet that{" "}
          <strong>helps women against sexual harassment.</strong>
        </FadedParagraph>
        <FadedParagraph>
          <strong>Over 700 students</strong> competed to develop a Startup idea
          and <strong>the winners were us.</strong> Overall, I&apos;m proud of
          this project, it was challenging and we created a business idea that
          would impact the lives of many women around the world.
        </FadedParagraph>
        <Link
          target="_blank"
          className="flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all w-64 h-12 rounded-full bg-[#D014E9] justify-self-center"
          href="https://www.linkedin.com/feed/update/urn:li:activity:6823742017542217728/"
        >
          Check on LinkedIn
        </Link>

        <Role />
      </div>
    </section>
  );
}
