import React, { useEffect } from "react";
import { FadedDiv, FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const competitorsEvent = new Event("t4y-competitors-visible");

export default function Competitors({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(competitorsEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="competitors" className="absolute translate-y-[-25vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Competitors</FadedH3>
      <FadedParagraph className="text-lg md:text-xl font-medium">
        Competitor analysis summary.
      </FadedParagraph>
      <FadedDiv className="grid lg:grid-cols-7 items-center justify-items-center gap-y-4 gap-x-4 lg:gap-x-0 lg:gap-y-8 text-sm py-10 px-10 lg:py-14 lg:px-0 bg-[#FAD3FF] rounded-3xl">
        <h4 className="md:col-span-2 self-end text-[#2C2C2C] font-bold uppercase">
          Company
        </h4>
        <span className="hidden lg:col-span-5 lg:inline-block"></span>
        <h5 className="lg:col-span-2 text-[#1B1B1B] font-bold">Vigilant</h5>
        <div className="lg:col-span-4 justify-self-start bg-[#FAF8F8] lg:h-32 py-4 px-8 rounded-md">
          <p className="text-[#1B1B1B] font-medium">
            Only sells alarm products with no app technology attached; it does
            not have a specific audience and has little digital presence.
          </p>
        </div>
        <h5 className="lg:col-span-2 text-[#1B1B1B] font-bold">Safelet</h5>
        <div className="lg:col-span-4 justify-self-start bg-[#FAF8F8] lg:h-32 py-4 px-8 rounded-md">
          <p className="text-[#1B1B1B] font-medium">
            It has a bracelet and an app with technology similar to ours, but
            the product has only one function button and a few functionalities
            in the app. In addition, the site and app have an unprofessional
            design. It has little digital presence.
          </p>
        </div>
      </FadedDiv>
    </section>
  );
}
