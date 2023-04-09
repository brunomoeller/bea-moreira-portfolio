import React from "react";
import Link from "next/link";
import behance from "@/public/icons/behance.svg";
import linkedin from "@/public/icons/linkedin.svg";
import Image from "next/image";
import { quicksand, poppins } from "@/utils/fonts";
import { motion } from "framer-motion";

type Props = {};

export default function Footer({}: Props) {
  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`col-span-12 grid grid-cols-4 grid-rows-4 md:grid-rows-5 gap-y-2 md:gap-y-4 items-center justify-items-center md:justify-start mt-60 md:mt-72 md:pb-14 pb-4 border-b border-b-[#2E2D2D] ${quicksand.variable} ${poppins.variable} font-poppins`}
    >
      <div className="grid md:row-span-full col-span-4 md:col-span-2 self-center justify-items-center md:justify-items-start md:self-start gap-y-5">
        <h3 className="text-3xl text-center md:text-5xl md:text-start text-darker-white font-quicksand">
          Let&apos;s work together!
        </h3>
        <Link
          href="/contact"
          className="flex items-center justify-center animate-pulse md:animate-none hover:bg-darker-white hover:text-dark-bg-color transition-all hover:-translate-y-1 hover:scale-110 text-sm md:text-base text-darker-white font-semibold border border-darker-white rounded-full w-32 h-12"
        >
          Contact
        </Link>
      </div>
      <div className="hidden col-span-4 justify-self-center row-start-4 md:row-start-1 md:col-start-3 md:justify-self-end md:col-span-1 md:inline">
        <h4 className="text-lg text-darker-gray uppercase">explore</h4>
      </div>
      <div className="row-start-2 col-start-1 md:col-start-3 md:row-start-auto md:justify-self-end">
        <Link
          className="text-md md:text-lg text-darker-white"
          href="/#projects"
        >
          Projects
        </Link>
      </div>
      <div className="row-start-2 col-start-2 md:col-start-3 md:row-start-auto md:justify-self-end">
        <Link className="text-md md:text-lg text-darker-white" href="/about">
          About
        </Link>
      </div>
      <div className="row-start-2 col-start-3 md:col-start-3 md:row-start-auto md:justify-self-end">
        <Link
          className="text-md md:text-lg text-darker-white"
          href="/#services"
        >
          Services
        </Link>
      </div>
      <div className="row-start-2 col-start-4 md:col-start-3 md:row-start-auto md:justify-self-end">
        <Link className="text-md md:text-lg text-darker-white" href="/contact">
          Contact
        </Link>
      </div>
      <div className="self-start md:self-auto col-span-4 md:col-span-5 md:col-start-4 flex justify-center gap-x-6">
        <Link href="https://www.behance.net/beatrizmoreira3">
          <Image src={behance} alt="behance" />
        </Link>
        <Link href="https://www.linkedin.com/in/msbeatriz/">
          <Image src={linkedin} alt="behance" />
        </Link>
      </div>
    </motion.footer>
  );
}
