import React, { useEffect } from "react";
import { FadedH3, FadedListItem } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const problemsEvent = new Event("t4y-problems-visible");

export default function Problems({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(problemsEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="problems" className="absolute translate-y-[-30vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">Problems</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <ul className="grid grid-cols-1 list-disc gap-y-4 md:gap-y-8 leading-10 pl-4 md:pl-12">
          <FadedListItem>
            8 out of 10 women have suffered from sexual harassment worldwide
            (According to Stop Street Harassment&apos;s survey with 996 women)
          </FadedListItem>
          <FadedListItem>
            The fear of going out alone is universal and constant
          </FadedListItem>
          <FadedListItem>
            Harassment has many consequences in women&apos;s lives such as
            anxiety, depression and sleep disturbances
          </FadedListItem>
        </ul>
      </div>
    </section>
  );
}
