import React from "react";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";

type Props = {};

export default function Solution({}: Props) {
  return (
    <section
      id="solution"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold">Solution</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 text-lg md:text-xl leading-10 pl-4 md:pl-12">
          <FadedListItem>
            Create a more professional, modern, reliable and customizable
            interface
          </FadedListItem>
        </ul>
      </div>
    </section>
  );
}
