import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Competitors from "@/components/There4You/Competitors";
import EmpathyMap from "@/components/There4You/EmpathyMap";
import Hero from "@/components/There4You/Hero";
import Introduction from "@/components/There4You/Introduction";
import Methodology from "@/components/There4You/Methodology";
import Persona from "@/components/There4You/Persona";
import Problems from "@/components/There4You/Problems";
import Research from "@/components/There4You/Research";
import SideMenu from "@/components/There4You/SideMenu";
import Solution from "@/components/There4You/Solution";
import StyleGuide from "@/components/There4You/StyleGuide";
import Userflow from "@/components/There4You/Userflow";
import Wireframes from "@/components/There4You/Wireframes";
import loadingAnimation from "@/public/icons/loading.json";
import { poppins, quicksand } from "@/utils/fonts";
// import Lottie from "lottie-react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

type Props = {
  locale: string;
};

export default function There4you({ locale }: Props) {
    const t = useTranslations("there4you");
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
        <title>Beatriz Moreira | There4You</title>
        <meta
          name="description"
          content={t("description") + t("introduction.paragraphs.1") + t("introduction.paragraphs.2") + t("introduction.paragraphs.3") + t("introduction.paragraphs.4") + t("introduction.paragraphs.5") + t("introduction.paragraphs.6") + t("introduction.paragraphs.7") + t("introduction.paragraphs.8") + t("introduction.paragraphs.9")}
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
          <Hero locale={locale} />
          <div className="side-menu-container">
            <SideMenu />
          </div>
          <div className="sections-container">
            <Introduction />
            <Methodology />
            <Problems />
            <Solution />
            <Competitors />
            <Research />
            <EmpathyMap />
            <Persona />
            <Userflow />
            <Wireframes />
            <StyleGuide />
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
      messages: (await import(`../messages/${locale}.json`)).default,
      locale
    }
  };
}