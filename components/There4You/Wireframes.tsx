import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import lowFidelity from "@/public/images/there4you/wireframe-low-fidelity.png";
import connect from "@/public/images/there4you/t4y-high-fidelity-1.png";
import emergencyContacts from "@/public/images/there4you/t4y-high-fidelity-2.png";
import socialMedia from "@/public/images/there4you/t4y-high-fidelity-3.png";
import sosMessage from "@/public/images/there4you/t4y-high-fidelity-4.png";
import t4yHome from "@/public/images/there4you/t4y-high-fidelity-5.png";
import community from "@/public/images/there4you/t4y-high-fidelity-6.png";
import statistics from "@/public/images/there4you/t4y-high-fidelity-7.png";
import highFidelity from "@/public/images/there4you/high-fidelity-wireframes.png";
import { FadedDiv, FadedH3, FadedH4 } from "../Framer/MotionComponents";

type Props = {};

export default function Userflow({}: Props) {
  return (
    <section
      id="wireframes"
      className="col-span-8 grid grid-cols-1 gap-y-8 text-darker-white font-quicksand"
    >
      <FadedH3 className="text-3xl md:text-4xl font-bold justify-self-center">
        Wireframes
      </FadedH3>
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
        Low fidelity
      </FadedH4>
      <Image
        className="w-full h-full"
        src={lowFidelity}
        alt="low fidelity wireframes"
      />
      <FadedH4 className="text-2xl md:text-3xl font-semibold justify-self-center">
        High fidelity
      </FadedH4>
      <div className="grid grid-cols-1 gap-y-12 gap-x-4 w-full md:w-auto md:grid-cols-highWireframe md:gap-x-9 md:gap-y-16 items-center justify-self-center">
        <Image
          className="md:translate-x-10 justify-self-center md:justify-self-auto order-1"
          src={connect}
          alt="connect bracelet"
        />
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center items-center justify-items-center md:justify-items-start
        border-2 border-dashed border-[#FAD3FF] md:h-52 md:w-100 md:max-w-100 p-4 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-2 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">
            Connection and set up
          </h5>
          <p className="text-sm md:text-base font-medium">
            Connect your bracelet via Bluetooth and set contacts, social media,
            and SOS message to be triggered when you are in danger.
          </p>
        </FadedDiv>
        <Image
          className="order-3 md:order-1 justify-self-center md:justify-self-auto"
          src={emergencyContacts}
          alt="Emergency Contacts"
        />
        <Image
          className="order-4 md:order-1 justify-self-center md:justify-self-auto"
          src={socialMedia}
          alt="Social Media"
        />
        <Image
          className="order-5 md:order-1 justify-self-center md:justify-self-auto"
          src={sosMessage}
          alt="SOS Message"
        />
        <Image
          className="md:translate-x-10 order-6 md:order-1 justify-self-center md:justify-self-auto"
          src={t4yHome}
          alt="Home"
        />
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center items-center justify-items-center md:justify-items-start 
        border-2 border-dashed border-[#FAD3FF] md:h-56 md:w-100 md:max-w-100 p-4 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-7 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">Home</h5>
          <p className="text-sm md:text-base font-medium">
            Map with your location. View reports around you. Locate the nearest
            police stations. Functions of activating the alarm, sharing
            location, and calling the police connected to bracelet buttons.
          </p>
        </FadedDiv>
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center md:justify-self-start 
        items-center border-2 border-dashed border-[#FAD3FF] md:h-56 md:w-100 md:max-w-100 p-4 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-9 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">Community</h5>
          <p className="text-sm md:text-base font-medium">
            Community with reports of harassment complaints to help other
            victims. The data helps build statistics to understand which places
            and times are most dangerous, in order to contribute to policing.
          </p>
        </FadedDiv>
        <Image
          className="md:-translate-x-20 order-8 justify-self-center md:order-1"
          src={community}
          alt="Community"
        />
        <Image
          className="md:translate-x-10 order-10 justify-self-center md:justify-self-auto md:order-1"
          src={statistics}
          alt="Statistics"
        />
        <FadedDiv
          className="md:col-span-2 grid grid-cols-1 gap-y-2 justify-self-center items-center border-2 
        border-dashed border-[#FAD3FF] p-4 md:h-30 md:w-101 md:max-w-100 md:pl-9 md:pr-4 md:py-9 rounded-2xl md:rounded-3xl order-11 md:order-1"
        >
          <h5 className="text-lg md:text-xl font-bold">Statistics</h5>
          <p className="text-sm md:text-base font-medium">
            View which places and times are most dangerous.
          </p>
        </FadedDiv>
      </div>
      <div className="w-15 h-100 lg:w-auto lg:h-auto">
        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="prototype"
          className="w-full h-full object-cover lg:object-contain md:mt-36 mt-10"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://res.cloudinary.com/dqxorrqje/video/upload/v1679091241/Prototype2_dtxyua.mp4"
            type="video/mp4"
          />
        </motion.video>
      </div>
      <Image
        className="w-full h-full md:mt-36 mt-20"
        src={highFidelity}
        alt="High fidelity wireframes"
      />
    </section>
  );
}
