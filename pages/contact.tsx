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

type Props = {
  locale: string;
};

export default function contact({ locale }: Props) {
  return (
    <>
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
