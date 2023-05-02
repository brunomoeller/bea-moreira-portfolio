import React, { useEffect } from "react";
import Image from "next/image";
import styleGuide from "@/public/images/there4you/style-guide.png";
import { FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const styleGuideEvent = new Event("t4y-style-visible");

export default function StyleGuide({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(styleGuideEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand mt-16 md:mt-32 relative"
    >
      <span id="style-guide" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-2xl md:text-3xl font-medium justify-self-center">
        Style guide
      </FadedH3>
      <Image src={styleGuide} alt="Style guide" />
    </section>
  );
}
