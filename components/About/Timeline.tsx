import React from "react";
import {
  FadedDiv,
  FadedH3,
  FadedH4,
  FadedTitle,
} from "../Framer/MotionComponents";

type Props = {};

export default function Timeline({}: Props) {
  return (
    <section className="justify-self-start grid grid-cols-1 gap-y-14 text-darker-white overflow-hidden font-quicksand">
      <FadedTitle className="text-xl xl:text-2xl font-bold font-poppins">
        Timeline
      </FadedTitle>
      <div className="grid grid-cols-timeline items-center justify-items-start gap-x-2 xl:gap-x-6 z-1">
        <FadedH4 className="timeline-year mt-0 relative font-poppins">
          2012
          <FadedDiv className="absolute border border-[#323232] top-full h-[500vh] w-px block right-1/2"></FadedDiv>
        </FadedH4>
        <FadedH3 className="timeline-description">
          I started to venture into the digital design just as a hobby
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-start justify-items-start gap-x-2 xl:gap-x-6 z-2">
        <FadedH4 className="timeline-year z-2 font-poppins">2018</FadedH4>
        <FadedH3 className="timeline-description">
          I was studying pharmacy at the university (I know, nothing to do)
          until I joined the Junior company of the course in which I started to
          work voluntarily with marketing and design (it was amazing),
          that&apos;s when I realized that I was in the wrong course
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-start justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 font-poppins">2019</FadedH4>
        <FadedH3 className="timeline-description">
          Year of many changes. I switched my bachelor&apos;s course to social
          communication with a major in advertising. I started working at a
          junior advertising agency. I started working as a freelance designer.
          I created my own e-commerce. I participated in my first Startup Weeknd
          and more…
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-start justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 font-poppins">2021</FadedH4>
        <FadedH3 className="timeline-description">
          I had experience as a volunteer designer at a startup, where I started
          to delve deeper into UX / UI Design. I participated in an
          international internship with a great project competition and my team
          won first place among more than 700 participants.
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-center justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 mt-0 font-poppins">2022</FadedH4>
        <FadedH3 className="timeline-description">
          Started working at a technology startup, being the principal UX/UI
          designer.
        </FadedH3>
      </div>
      <div className="grid grid-cols-timeline items-center justify-items-start gap-x-2 xl:gap-x-6">
        <FadedH4 className="timeline-year z-2 mt-0 font-poppins">2023</FadedH4>
        <FadedH3 className="timeline-description">In progress...</FadedH3>
      </div>
    </section>
  );
}
