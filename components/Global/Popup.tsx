import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { quicksand } from "@/utils/fonts";
import Link from "next/link";

type Props = {
  hidden: boolean;
};

function Popup({ hidden }: Props) {
  function hidePopup() {
    let popup: Element = document.querySelector("#popup")!;
    popup.classList.remove("grid");
    const scrollY = document.body.style.top;
    popup.classList.add("hidden");

    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0.5, scale: 0, y: -500, x: 500 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        id="popup"
        className={`${ 
          hidden ? "hidden" : "grid"
        } absolute top-0 right-0 z-[1000] h-screen w-screen grid-cols-1 justify-items-center items-center bg-[rgba(29,26,26)] ${
          quicksand.variable
        }`}
      >
        <ul className="-mt-10 flex flex-col items-start justify-center gap-y-20 font-quicksand text-4xl text-darker-white font-semibold">
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="/#projects">
              Projects
            </Link>
          </li>
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="/#services">
              Services
            </Link>
          </li>
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="/about">
              About
            </Link>
          </li>
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Popup;
