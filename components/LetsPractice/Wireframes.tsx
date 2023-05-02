import Image from "next/image";
import React, { useEffect } from "react";
import lowFidelity1 from "@/public/images/lets-practice/letspractice-low-fidelity-1.svg";
import lowFidelity2 from "@/public/images/lets-practice/letspractice-low-fidelity-2.svg";
import highFidelity from "@/public/images/lets-practice/letspractice-high-fidelity.png";
import { FadedDiv, FadedH3, FadedH4 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const wireframesEvent = new Event("lp-wireframes-visible");

export default function Userflow({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(wireframesEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="wireframes" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        Wireframes
      </FadedH3>
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
        Low fidelity
      </FadedH4>
      <FadedDiv className="grid gap-y-12 md:gap-y-0 md:grid-cols-2 items-center justify-items-center md:gap-x-16">
        <Image
          className="w-full h-full"
          src={lowFidelity1}
          alt="low fidelity wireframes"
        />
        <Image
          className="w-full h-full"
          src={lowFidelity2}
          alt="low fidelity wireframes"
        />
      </FadedDiv>
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center mt-16 md:mt-28">
        High fidelity
      </FadedH4>
      <FadedDiv className="rounded-3xl overflow-hidden">
        <Image
          className="w-full h-full"
          src={highFidelity}
          alt="High fidelity"
        />
      </FadedDiv>
    </section>
  );
}
