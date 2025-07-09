import HamburguerIcon from "@/public/icons/hamburguer.svg";
import Logo from "@/public/icons/logo.png";
import { quicksand } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type Props = {};

export default function Header({}: Props) {
  const t = useTranslations("menu");
  const language = t("language")

  const [popupHidden] = useState(true);

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

  function hideOrShowPopup() {
    let popup: Element = document.querySelector("#popup")!;
    if (popup?.className.includes("hidden")) {
      popup.classList.remove("hidden");
      popup.classList.add("grid");
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else if (popup?.className.includes("grid")) {
      popup.classList.remove("grid");
      popup.classList.add("hidden");
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
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
    <>
      <Popup hidden={popupHidden} />
      <header
        className={`h-28 md:h-36
      flex items-center justify-between
      sticky top-0 z-50
      col-span-12 bg-dark-bg-color
       ${quicksand.variable} font-quicksand`}
      >
        <Link href="/">
          <Image
            className="h-16 w-auto md:h-24"
            src={Logo}
            alt="Beatriz Moreira"
          />
        </Link>
        <nav className="flex items-center justify-center gap-7 list-none">
          <li className="hidden md:inline md:w-24">
            <Link className="menu-link" href="/#about">
              {t("about")}
            </Link>
          </li>
          <li className="hidden md:inline md:w-24">
            <Link className="menu-link" href="/#projects">
              {t("projects")}
            </Link>
          </li>
          <li className="hidden md:inline md:w-24">
            <Link className="menu-link" href="/#services">
              {t("services")}
            </Link>
          </li>
          <li className="hidden md:inline md:w-24">
          <div id="dropdown" className="dropdown">
            <button className="dropbtn text-base" onClick={toggleDropdown}>{language}</button>
            <div className={`dropdown-content ${isDropdownVisible ? "show" : ""} text-base`}>
              <a href="/en">{t("english")}</a>
              <a href="/pt-br">{t("portuguese")}</a>
            </div>
          </div>
          </li>
          <Link href="/contact" className="hidden md:contact-button">
            <li>{t("contact")}</li>
          </Link>
          <div>
            <Image
              onClick={hideOrShowPopup}
              className="md:hidden"
              src={HamburguerIcon}
              alt="dropdown menu"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    }
  };
}
