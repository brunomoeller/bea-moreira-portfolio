import React, { useEffect } from "react";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const goalsEvent = new Event("lp-goals-visible");

export default function Goals({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(goalsEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="goals" className="absolute translate-y-[-40vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Goals</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 leading-10 pl-4 md:pl-12">
          <FadedListItem>
            Create a visual identity and style guide for the brand
          </FadedListItem>
          <FadedListItem>Enhance brand perceptiomotion.n</FadedListItem>
          <FadedListItem>
            Highlight the benefits and competitive advantages of the Startup on
            the Landing Page
          </FadedListItem>
          <FadedListItem>
            Create a website navigation flow that is simple and effective for
            capturing leads
          </FadedListItem>
        </ul>
      </div>
    </section>
  );
}
