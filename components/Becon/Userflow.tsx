import Image from "next/image";
import React from "react";
import diagram from "@/public/images/becon/becon-userflow.png";
import { FadedH3 } from "../Framer/MotionComponents";

type Props = {};

export default function Userflow({}: Props) {
  return (
    <section
      id="userflow"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        User flow diagram
      </FadedH3>

      <Image className="w-full h-full" src={diagram} alt="userflow diagram" />
    </section>
  );
}
