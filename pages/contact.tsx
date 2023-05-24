import React from "react";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Timeline from "@/components/About/Timeline";
import { quicksand, poppins } from "@/utils/fonts";
import Popup from "@/components/Global/Popup";
import Form from "@/components/Contact/Form";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

type Props = {};

export default function contact({}: Props) {
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
          <Form />
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
