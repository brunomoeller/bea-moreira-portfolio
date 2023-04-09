import React from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";

type Props = {};

export default function Role({}: Props) {
  return (
    <section
      id="role"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold">My role</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          <strong>My role:</strong> Designer UX / UI
        </FadedParagraph>
      </div>
    </section>
  );
}
