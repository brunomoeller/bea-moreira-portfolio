import React, { useEffect } from "react";
import { FadedH3, FadedParagraph } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const roleEvent = new Event("t4y-role-visible");

function Role({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      dispatchEvent(roleEvent);
    }
  }, [isVisible]);

  return (
    <>
      <FadedH3 className="text-3xl md:text-4xl font-bold">
        My role and team
      </FadedH3>
      <div
        ref={ref}
        className="grid grid-cols-1 gap-y-4 md:gap-y-8 text-lg md:text-xl relative"
      >
        <span id="role" className="absolute translate-y-[-52vh]" />
        <FadedParagraph>
          <strong>My role:</strong> Founder / Designer
        </FadedParagraph>
        <FadedParagraph>
          <strong>Team / Founders:</strong> Me (Beatriz Moreira); Beatriz
          Fonseca; Iris Nascimento and Giovanna Savazo
        </FadedParagraph>
      </div>
    </>
  );
}

export default Role;
