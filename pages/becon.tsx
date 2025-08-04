import BeforeAndAfter from "@/components/Becon/BeforeAndAfter";
import Context from "@/components/Becon/Context";
import General from "@/components/Becon/General";
import Goals from "@/components/Becon/Goals";
import Hero from "@/components/Becon/Hero";
import Persona from "@/components/Becon/Persona";
import Problems from "@/components/Becon/Problems";
import SideMenu from "@/components/Becon/SideMenu";
import Userflow from "@/components/Becon/Userflow";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import { poppins, quicksand } from "@/utils/fonts";
import { useEffect, useMemo, useState } from "react";
// import Lottie from "lottie-react";
import Recovery from "@/components/Becon/Recovery";
import loadingAnimation from "@/public/icons/loading.json";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import Approach from "@/components/Becon/Approach";
import Impact from "@/components/Becon/Impact";
import Learning from "@/components/Becon/Learning";

type Props = {};

export default function Becon({}: Props) {
  const t = useTranslations("becon");
  const [isLoading, setLoading] = useState(true);
  const Lottie = useMemo(
    () => dynamic(() => import("lottie-react"), { ssr: false }),
    []
  );
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
    <Head>
        <title>Beatriz Moreira | Becon</title>
        <meta
          name="description"
          content={t("introduction.paragraphs.1")}
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.25"
        />
        <meta name="color-scheme" content="light only"></meta>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-51DXXN4Q2P"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-51DXXN4Q2P');`
        }
      </Script>
      {isLoading ? (
        <div className="grid grid-cols-1 items-center justify-items-center h-[100vh] w-[100vw]">
          <Lottie
            className="h-32 w-32 transition-all delay-300"
            animationData={loadingAnimation}
          />
        </div>
      ) : (
        <main
          className={`main-container ${quicksand.variable} ${poppins.variable}`}
        >
          <Header />
          <Hero />
          <div className="side-menu-container">
            <SideMenu />
          </div>
          <div className="sections-container">
            <General />
            <Recovery />
            <Context />
            <Problems />
            <Goals />
            <Approach />
            <Impact />
            <Learning />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}
