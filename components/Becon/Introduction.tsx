import React from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export default function Introduction({}: Props) {
  return (
    <section
      id="introduction"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
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
