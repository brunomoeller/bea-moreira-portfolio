import React, { useEffect } from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const introductionVisibleEvent = new Event("becon-introduction-visible");

export default function Introduction({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(introductionVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="introduction" className="absolute translate-y-[-70vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Introduction</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          Becon is a technological startup that has a chatbot platform as a
          service to help companies to have more control and agility in their
          services and also to sell more. The platform has several automation
          features and integrations.
        </FadedParagraph>
      </div>
    </section>
  );
}
