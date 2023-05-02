import React, { useEffect } from "react";
import {
  FadedH3,
  FadedListItem,
  FadedParagraph,
} from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const problemsVisibleEvent = new Event("becon-problems-visible");

export default function Problems({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(problemsVisibleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="problems" className="absolute translate-y-[-40vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">
        Problems & challenges
      </FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          When I joined the startup team, it was in a process of changes related
          to its growth. The company was changing its visual identity to present
          itself as more modern and reliable and needed these attributes to be
          part of the platform&apos;s interfaces, such as the login page. That
          is:
        </FadedParagraph>
        <ul className="grid grid-cols-1 list-disc text-lg md:text-xl gap-y-4 md:gap-y-8 leading-10 pl-4 md:pl-12">
          <FadedListItem>
            Visually unprofessional login interface, as it is not very modern
            and does not match the new visual identity of the brand
          </FadedListItem>
        </ul>
        <p>
          The platform has customizable interfaces according to the two main
          brand colors of each company/client. Therefore, the challenge of
          creating an interface that is adaptable and coherent for this
          situation arises.
        </p>
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 text-lg md:text-xl leading-10 pl-4 md:pl-12">
          <FadedListItem>
            The interface needs to be customizable, adaptable and have good
            readability, legibility and visual consistency for different
            situations
          </FadedListItem>
        </ul>
      </div>
    </section>
  );
}
