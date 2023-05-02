import React, { useEffect } from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const roleEvent = new Event("becon-role-visible");

export default function Role({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(roleEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      <span id="role" className="absolute translate-y-[-50vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold">My role</FadedH3>
      <div className="grid grid-cols-1 gap-y-8 text-lg md:text-xl">
        <FadedParagraph>
          <strong>My role:</strong> Designer UX / UI
        </FadedParagraph>
      </div>
    </section>
  );
}
