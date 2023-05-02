import React, { useEffect } from "react";
import Image from "next/image";
import persona from "@/public/images/lets-practice/letspractice-persona.webp";
import { FadedDiv, FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const personaEvent = new Event("lp-persona-visible");

export default function Persona({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(personaEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand md:px-16 relative"
    >
      <span id="persona" className="absolute translate-y-[-20vh]" />
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        User persona
      </FadedH3>
      <FadedDiv
        className="grid grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-9 bg-[#F1EAFF] 
      px-10 py-10 lg:py-20 lg:px-20 justify-items-center lg:justify-items-start items-center text-lg md:text-xl text-[#1B1B1B] rounded-3xl overflow-hidden"
      >
        <div className="col-span-3 w-28 h-28 lg:col-span-1 rounded-full overflow-hidden">
          <Image
            className="w-28 h-28 object-cover object-center"
            src={persona}
            alt="Yara"
          />
        </div>
        <div className="text-center lg:text-start col-span-3 lg:col-span-5 grid grid-cols-1 gap-y-2 lg:ml-14 xl:ml-4 lg:justify-self-auto">
          <p>
            <strong>Name:</strong> Yara
          </p>
          <p>
            <strong>Age:</strong> 28 years old
          </p>
          <p>
            <strong>Profession:</strong> Marketing Assistant
          </p>
          <p>
            <strong>Marital status:</strong> married
          </p>
        </div>
        <hr className="col-span-3 lg:col-span-6 border border-t border-top-[#FCFCFC] w-screen -translate-x-20" />
        <div className="col-span-3 lg:col-span-6 grid grid-cols-1 gap-y-6">
          <h4 className="font-bold">Pain map</h4>
          <p>
            She has difficulty stopping to study English. Given this, she needs
            to learn as much as possible in a short time.
          </p>

          <p>
            Her job requires a good level of English and she wants to get a
            certificate to increase her job opportunities.
          </p>
          <p>
            She doesn&apos;t have time to take a full course and also finds it
            too expensive.
          </p>

          <p>
            She needs a study method that fits into her routine, and that is
            accessible.
          </p>
          <h4 className="font-bold">Map of pleasure</h4>
          <p>
            Yara wants to get a job at her dream company that requires a good
            level of English.
          </p>
        </div>
      </FadedDiv>
    </section>
  );
}
