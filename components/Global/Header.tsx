import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/icons/logo.png";
import HamburguerIcon from "@/public/icons/hamburguer.svg";
import { quicksand } from "@/utils/fonts";
import Popup from "./Popup";

type Props = {};

export default function Header({}: Props) {
  const [popupHidden] = useState(true);

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
            <Link className="menu-link" href="/#projects">
              Projects
            </Link>
          </li>
          <li className="hidden md:inline md:w-24">
            <Link className="menu-link" href="/#services">
              Services
            </Link>
          </li>
          <li className="hidden md:inline md:w-24">
            <Link className="menu-link" href="/about">
              About
            </Link>
          </li>
          <Link href="/contact" className="hidden md:contact-button">
            <Link href="/contact">Contact</Link>
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
