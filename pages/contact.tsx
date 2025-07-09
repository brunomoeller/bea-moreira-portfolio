import React from "react";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Timeline from "@/components/About/Timeline";
import { quicksand, poppins } from "@/utils/fonts";
import Popup from "@/components/Global/Popup";
import Form from "@/components/Contact/Form";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";

type Props = {
  locale: string;
};

export default function Contact({ locale }: Props) {
  const t = useTranslations("home.hero");

  return (
    <>
    <Head>
        <title>Beatriz Moreira | Contact</title>
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
      <main
        className={`main-container ${quicksand.variable} ${poppins.variable}`}
      >
        <Header />
        <div className="form-container">
          <Form locale={locale} />
        </div>
        <Footer />
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
