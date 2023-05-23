import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Head from "next/head";
import { quicksand, poppins } from "@/utils/fonts";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/icons/loading.json";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

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
          content="Hello! I'm Beatriz, a creative designer with a keen eye for
          detail and a commitment to delivering solutions that are both
          functional and visually appealing."
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.25"
        />
        <meta name="color-scheme" content="light only"></meta>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {isLoading ? (
        <div className="grid grid-cols-1 items-center justify-items-center h-[100vh] w-[100vw]">
          <Lottie
            className="h-32 w-32 transition-all delay-300"
            animationData={loadingAnimation}
          />
        </div>
      ) : (
        <div
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
