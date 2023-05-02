import React, { useEffect } from "react";
import Image from "next/image";
import braceletFade from "@/public/images/there4you/bracelet-fade.svg";
import coloredBracelet from "@/public/images/there4you/colored-bracelet.svg";
import { FadedDiv, FadedH3, ScaledDiv } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const solutionEvent = new Event("t4y-solution-visible");

export default function Solution({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(solutionEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="solution" className="absolute translate-y-[-25vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Solution</FadedH3>
      <div className="grid grid-cols-1 gap-y-12 text-lg md:text-xl">
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <h4 className="font-bold">Product</h4>
          <p className="font-medium">
            Security bracelet against harassment connected with an app that
            makes calling for help more agile.
          </p>
        </FadedDiv>
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <h4 className="font-bold">How it works?</h4>
          <p className="font-medium">
            The device has a USB port (to recharge its battery)
          </p>
          <p className="font-medium">
            Connection with the cell phone via bluetooth and functionalities via
            the app.
          </p>
        </FadedDiv>
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <p className="font-medium">
            The bracelet has 4 buttons, one for on and off and 3 with the
            following features:
          </p>
        </FadedDiv>
        <FadedDiv className="grid grid-cols-1 gap-y-2">
          <ol className="list-decimal pl-4 md:pl-8 grid grid-cols-1 gap-y-2">
            <li>
              Sound, emits an alarm (loud and unpleasant sound to scare the
              aggressor)
            </li>
            <li>Activate the nearest police station + tracking</li>
            <li>
              Sends a SOS message to selected contacts and social networks with
              location tracking
            </li>
          </ol>
        </FadedDiv>
        <ScaledDiv className="grid grid-cols-2 items-center justify-items-center py-20 rounded-3xl bg-[#FAD3FF]">
          <Image
            className="justify-self-end translate-x-16 -translate-y-10 mix-blend-overlay"
            src={braceletFade}
            alt="t4y bracelet"
          />
          <Image
            className="justify-self-start -translate-x-16 translate-y-10"
            src={coloredBracelet}
            alt="t4y colored bracelet"
          />
        </ScaledDiv>
      </div>
    </section>
  );
}
