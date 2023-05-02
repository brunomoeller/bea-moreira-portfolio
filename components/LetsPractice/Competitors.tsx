import React, { useEffect } from "react";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const competitorsEvent = new Event("lp-competitors-visible");

export default function Competitors({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(competitorsEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="competitors" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Competitors</FadedH3>
      <FadedParagraph className="text-lg md:text-xl font-medium">
        Summary of the Landing Page analysis of some competitors, more focused
        on the navigation and visual experience.
      </FadedParagraph>
      <FadedDiv className="grid grid-cols-4 lg:grid-cols-5 items-center lg:items-start justify-items-center gap-y-6 gap-x-4 px-5 pt-5 pb-10 lg:gap-x-6 lg:py-14 lg:pr-14 lg:pl-2 bg-[#F1EAFF] rounded-3xl">
        <h4 className="text-center lg:text-start py-2.5 lg:py-0 bg-[#2C2C2C] lg:bg-transparent rounded-md lg:rounded-none w-full lg:w-auto text-white col-span-4 lg:col-span-1 lg:self-center uppercase text-sm lg:text-[#2C2C2C] font-bold order-1">
          Company
        </h4>
        <div className="col-span-4 lg:col-span-1 flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-full order-4 lg:order-1">
          <h5 className="text-sm text-white font-bold">Cambly</h5>
        </div>
        <div className="col-span-4 lg:col-span-1 flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-full order-7 lg:order-1">
          <h5 className="text-sm text-white font-bold">English life</h5>
        </div>
        <div className="col-span-4 lg:col-span-1 flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-full order-10 lg:order-1">
          <h5 className="text-sm text-white font-bold">Wise up</h5>
        </div>
        <div className="col-span-4 lg:col-span-1 flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-full order-[13] lg:order-1">
          <h5 className="text-sm text-white font-bold">English boy</h5>
        </div>
        <h5 className="text-[#1B1B1B] p-4 lg:p-0 bg-[#FAF8F8] lg:bg-transparent col-span-2 lg:col-span-1 uppercase text-sm lg:text-[#2C2C2C] font-bold lg:mt-4 order-2 lg:order-1">
          Strengths
        </h5>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-5 lg:order-1">
          <p>It is very popular</p>
          <p>The landing page has a good navigation flow</p>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-8 lg:order-1">
          <p>A Company that has been in the market for over 20 years</p>
          <p>Interface more clean, fast navigation</p>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-11 lg:order-1">
          <p>Well highlighted testimonials;</p>
          <p>Lots of questions in the FAQ</p>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-[14] lg:order-1">
          <p>
            It has features interactive onboarding that is very interesting for
            lead engagement
          </p>
        </div>
        <h5 className="text-[#1B1B1B] p-4 lg:p-0 bg-[#FAF8F8] lg:bg-transparent col-span-2 lg:col-span-1 uppercase text-sm lg:text-[#2C2C2C] font-bold lg:mt-4 order-3 lg:order-1">
          Weaknesses
        </h5>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-6 lg:order-1">
          <p>
            It doesn&apos;t show the price on the page, and a lot of steps need
            to be taken to get a quote
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-9 lg:order-1">
          <p>
            It has very vague information and also doesn&apos;t show prices on
            the page
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-12 lg:order-1">
          <p>There aren&apos;t prices on the page;</p>
          <p>They don&apos;t offer free classes</p>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full order-[15] lg:order-1">
          <p>
            There are too many elements on some pages of the interface, which
            generates a bit of confusion and visual pollution
          </p>
        </div>
      </FadedDiv>
    </section>
  );
}
