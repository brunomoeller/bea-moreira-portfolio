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
          Let&apos;s Practice is a brazilian english teaching startup focused on
          business and entrepreneurship. The brand presents itself as
          disruptive, determined, and innovative, valuing its purpose of
          innovating the product “private English classes”, making it more
          attractive, advantageous, and efficient than face-to-face courses and
          other platforms currently available.
        </FadedParagraph>
      </div>
    </section>
  );
}
