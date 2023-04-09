import React from "react";
import { FadedDiv, FadedH3, FadedH4 } from "../Framer/MotionComponents";

type Props = {};

export default function EmpathyMap({}: Props) {
  return (
    <section
      id="empathy-map"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        User empathy map
      </FadedH3>
      <div className="grid xl:grid-cols-empathyMap gap-x-10 gap-y-6 lg:gap-x-20 lg:gap-y-12">
        <div className="grid grid-cols-2 gap-x-9 gap-y-8">
          <FadedH4 className="col-span-2 t4y-empathy-card-title">Says</FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
            That place is very dangerous, I&apos;m not going alone
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
            There are many unknown men over there, let&apos;s change the route
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
            I&apos;m leaving work a little late, can you pick me up?
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#EABFFF]">
            Can you walk me to the bus stop, friend?
          </FadedDiv>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 lg:gap-x-9 lg:gap-y-8">
          <FadedH4 className="col-span-2 xl:col-span-3 t4y-empathy-card-title">
            Thinks
          </FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
            How can I escape if they harass me here?
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
            How will I call for help quickly if something suspicious happens?
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
            I need to try to leave early before it gets later and dangerous.
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
            It is very difficult to be a woman
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
            If I go out alone I might get harassed
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFB7EF]">
            I can&apos;t stand feeling scared anymore
          </FadedDiv>
        </div>
        <div className="grid grid-cols-2 gap-x-9 gap-y-8">
          <FadedH4 className="col-span-2 t4y-empathy-card-title">Does</FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
            Share Uber location with people
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
            Avoid going near unknown men when alone
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
            Always try to find a company to go somewhere, especially at night
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#FFAD75]">
            Avoid going places out of fear
          </FadedDiv>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8">
          <FadedH4 className="col-span-2 lg:col-span-3 t4y-empathy-card-title">
            Feels
          </FadedH4>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">Unsafe</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">Fear</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">Dread</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">
            Insomnia
          </FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">Worry</FadedDiv>
          <FadedDiv className="t4y-empathy-card bg-[#B9DDF6]">Anxiety</FadedDiv>
        </div>
      </div>
    </section>
  );
}
