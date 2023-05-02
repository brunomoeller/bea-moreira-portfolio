import Image from "next/image";
import React, { useEffect } from "react";
import diagram from "@/public/images/there4you/t4y-userflow.svg";
import { FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";
type Props = {};

export const userflowEvent = new Event("t4y-userflow-visible");

export default function Userflow({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(userflowEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <span id="userflow" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        User flow diagram
      </FadedH3>

      <Image className="w-full h-full" src={diagram} alt="userflow diagram" />
    </section>
  );
}
