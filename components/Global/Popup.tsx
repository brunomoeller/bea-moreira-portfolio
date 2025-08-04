import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { quicksand } from "@/utils/fonts";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type Props = {
  hidden: boolean;
};

function Popup({ hidden }: Props) {
  const t = useTranslations("menu");
  const language = t("language")
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown")) {
      setIsDropdownVisible(false);
    }
  };

  function hidePopup() {

    let popup: Element = document.querySelector("#popup")!;
    popup.classList.remove("grid");
    const scrollY = document.body.style.top;
    popup.classList.add("hidden");

    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  useEffect(() => {
    if (isDropdownVisible) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownVisible]);

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
        <button
            onClick={hidePopup}
            className="absolute top-5 right-5 bg-[#272323] text-white text-2xl rounded-full px-4 py-2 hover:bg-red-600"
          >
            ✕
          </button>
        <ul className="-mt-10 flex flex-col items-start justify-center gap-y-20 font-quicksand text-4xl text-darker-white font-semibold">
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="/#projects">
              {t("projects")}
            </Link>
          </li>
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="https://www.linkedin.com/in/msbeatriz/" target="_blank" rel="noopener noreferrer">
            {t("linkedin")}
            </Link>
          </li>
          <li className="px-4 py-1 border-l-4 rounded-sm">
            <Link onClick={hidePopup} href="mailto:beatrizmoreira.pd@gmail.com">
            {t("contact")}
            </Link>
          </li>
          <li className="px-4 py-1 border-l-4 rounded-sm">
          <div id="dropdown" className="dropdown">
            <button className="dropbtn text-4xl" onClick={toggleDropdown}>{language}</button>
            <div className={`dropdown-content ${isDropdownVisible ? "show" : ""} text-2xl`}>
              <a href="/en">{t("english")}</a>
              <a href="/pt-br">{t("portuguese")}</a>
            </div>
          </div>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Popup;

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
