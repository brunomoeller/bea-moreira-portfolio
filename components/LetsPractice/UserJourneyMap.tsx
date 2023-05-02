import React, { useEffect } from "react";
import Image from "next/image";
import sadEmoji from "@/public/icons/sadEmoji.svg";
import thoughtfulEmoji from "@/public/icons/thoughtEmoji.svg";
import hopefulEmoji from "@/public/icons/hopeEmoji.svg";
import joyfulEmoji from "@/public/icons/joyEmoji.svg";
import { FadedDiv, FadedH3 } from "../Framer/MotionComponents";
import { useInView } from "react-hook-inview";

type Props = {};

export const journeyEvent = new Event("lp-journey-visible");

export default function UserJourneyMap({}: Props) {
  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(journeyEvent);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-[#590BC2]/30 scrollbar-track-[rgb(222,198,255)] lg:overflow-x-hidden lg:w-auto relative"
    >
      <span id="journey-map" className="absolute translate-y-[-15vh]" />
      <FadedH3 className="sticky left-2 lg:justify-self-center lg:static lg:left-auto text-3xl md:text-4xl font-bold">
        User journey map
      </FadedH3>
      <FadedDiv className="p-5 grid grid-cols-6 w-[430vw] lg:w-auto items-start justify-items-center lg:gap-y-2 gap-y-4 lg:gap-x-6 lg:py-14 lg:pr-14 lg:pl-2 bg-[#F1EAFF]">
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#2C2C2C] lg:bg-transparent rounded-md lg:rounded-none w-5/6
          lg:w-auto self-center overflow-x-hidden h-full lg:h-auto snap-center snap-mandatory"
        >
          <h4 className="text-white uppercase text-sm lg:text-[#2C2C2C] font-bold snap-center">
            Stages
          </h4>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">Awareness</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">Consideration</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">Acquisition</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">Service</h5>
        </div>
        <div className="flex items-center justify-center py-2.5 bg-[#2C2C2C] rounded-md w-5/6 lg:w-full">
          <h5 className="text-sm text-white font-bold">Loyalty</h5>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
            Thinking
          </h5>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>User is thinking of improving his English.</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Do more research</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Liked the free trial class and want to do more</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>User is thinking about how to fit the classes into his routine</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>The user realizes that his English is improving</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-lgmd 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
            Doing
          </h5>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Looking ads for english classes</p>
          <p>Search on social media and google</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Looking into several other English courses</p>
          <p>Book test classes</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Picks a basic class package and adds it to the cart</p>
          <p>Goes through the check out process</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Creates a schedule in google calendar</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Purchases an advanced class package</p>
          <p>Refers to friends</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
            Pain points
          </h5>
        </div>
        <div className="grid items-center text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Many options</p>
          <p>Very expensive classes</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Confusing web layouts and very general information</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>
            Checkout page doesn&apos;t support many different payment methods
          </p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Manually set class times in google calendar</p>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>No follow-up about classes satisfaction</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
            Feeling
          </h5>
        </div>
        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={sadEmoji} alt="Upset" />
          <p className="-translate-y-2">Upset</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={thoughtfulEmoji} alt="Thoughtful" />
          <p className="-translate-y-2">Thoughtful</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={hopefulEmoji} alt="Hopeful" />
          <p className="-translate-y-2">Hopeful</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={thoughtfulEmoji} alt="Thoughtful" />
          <p className="-translate-y-2">Thoughtful</p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center text-[#1B1B1B] text-xs font-medium p-1 bg-[#FAF8F8] h-full w-5/6 lg:w-full">
          <Image src={joyfulEmoji} alt="Joy" />
          <p className="-translate-y-2">Joy</p>
        </div>
        <div
          className="flex items-center justify-center lg:items-start lg:justify-start bg-[#FAF8F8] lg:bg-transparent rounded-md 
          lg:rounded-none w-5/6 lg:w-auto h-full lg:h-auto self-center"
        >
          <h5 className="uppercase text-sm text-[#2C2C2C] font-bold text-center">
            Opportunities
          </h5>
        </div>
        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Improve page keywords for search results</p>
          <p>Highlight the competitive price</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Provide specific information</p>
          <p>Personalized information</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Work to support more payment methods</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Automatically and instantly book classes from the website</p>
        </div>

        <div className="grid items-center lg:items-start text-center lg:text-start grid-cols-1 gap-y-4 text-[#1B1B1B] text-xs font-medium p-4 bg-[#FAF8F8] h-full w-5/6 lg:w-auto">
          <p>Send an NPS form to understand the level of user satisfaction</p>
        </div>
      </FadedDiv>
    </section>
  );
}
