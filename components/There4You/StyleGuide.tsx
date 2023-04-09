import React from "react";
import Image from "next/image";
import styleGuide from "@/public/images/there4you/style-guide.png";
import { FadedH3 } from "../Framer/MotionComponents";

type Props = {};

export default function StyleGuide({}: Props) {
  return (
    <section
      id="style-guide"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand mt-16 md:mt-32"
    >
      <FadedH3 className="text-2xl md:text-3xl font-medium justify-self-center">
        Style guide
      </FadedH3>
      <Image src={styleGuide} alt="Style guide" />
    </section>
  );
}
