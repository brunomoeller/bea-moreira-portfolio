import React from "react";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";

type Props = {};

export default function Problems({}: Props) {
  return (
    <section
      id="problems"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold">Problems</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 leading-10 pl-4 md:pl-12">
          <FadedListItem>
            Lack of a visual identity and brand guidmotion.elines, which
            resulted in little presence and attractiveness in a very competitive
            market
          </FadedListItem>
          <FadedListItem>
            Landing Page visual inconsistency and disorganization
          </FadedListItem>
          <FadedListItem>
            Lack of prominence in the startup&apos;s value proposition within
            the Landing Page
          </FadedListItem>
        </ul>
      </div>
    </section>
  );
}
