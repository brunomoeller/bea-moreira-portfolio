import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import cart1 from "../../public/images/becon/cart-1.webp";
import cart2 from "../../public/images/becon/cart-2.webp";
import cart3 from "../../public/images/becon/cart-3.webp";
import { FadedDiv, FadedH3 } from "../Framer/MotionComponents";

type Props = {};

export const introductionVisibleEvent = new Event("becon-introduction-visible");

export default function Recovery({}: Props) {
  const t = useTranslations("becon.introduction")

  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      self.dispatchEvent(introductionVisibleEvent);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="hidden col-span-8 md:grid grid-cols-1 gap-y-8 text-darker-white font-quicksand relative"
    >
      
      <FadedH3 className="text-3xl md:text-4xl font-bold">{t("recovery.title")}</FadedH3>
      <FadedDiv
        className="grid grid-cols-1 bg-[#E9E3F9] 
                  justify-items-center items-center text-lg md:text-xl 
                  text-[#1B1B1B] rounded-3xl py-8"
      >
        <div className="flex flex-row gap-x-8">
        <Image className="h-96 w-auto" src={cart1} alt="cart1" />
        <Image className="h-96 w-auto" src={cart2} alt="cart2" />
        <Image className="h-96 w-auto" src={cart3} alt="cart3" />
        </div>
      </FadedDiv>
    </div>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
