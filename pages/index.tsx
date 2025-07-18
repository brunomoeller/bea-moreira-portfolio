import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import loadingAnimation from "@/public/icons/loading.json";
import { poppins, quicksand } from "@/utils/fonts";
// import Lottie from "lottie-react";
import { GetStaticPropsContext } from "next";
import { useTimeZone, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";



export default function Home() {
  const timeZone = useTimeZone();
  const t = useTranslations("home.hero");
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
        <title>Beatriz Moreira | Portfolio</title>
        <meta
          name="description"
          content={t("headline_1") + t("headline_2")}
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
              <div id="about"
          className={`scroll-smooth px-10 sm:px-5 md:px-4 w-full grid grid-cols-mainLayout gap-x-4 justify-center pb-24 md:pb-32 ${quicksand.variable} ${poppins.variable}
        
        `}
        >
          <Header />
          <Hero />
          <Projects />
          <Services />
          <Footer />
        </div>
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
