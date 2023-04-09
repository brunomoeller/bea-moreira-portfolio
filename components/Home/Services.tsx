import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Services({}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      id="services"
      className="col-span-12 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 items-center justify-center mt-48 lg:mt-72 font-quicksand snap-center snap-always"
    >
      <div className="lg:row-span-4 grid items-center justify-center">
        <h2 className="text-3xl lg:text-5xl text-darker-white font-bold">
          Services
        </h2>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">UX/UI</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">Web & Mobile App</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start grid items-center justify-items-center w-full h-24 lg:h-36 border-b border-b-[#353535]">
        <h3 className="service-title">Visual identity</h3>
      </div>
      <div className="lg:w-102 lg:justify-items-start justify-items-center grid items-end w-full h-24 lg:h-36">
        <h3 className="service-title">Development</h3>
        <p className="text-base lg:text-xl self-start text-darker-gray">
          In collaboration with expert developers.
        </p>
      </div>
    </motion.section>
  );
}
