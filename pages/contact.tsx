import React from "react";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Timeline from "@/components/About/Timeline";
import { quicksand, poppins } from "@/utils/fonts";
import Popup from "@/components/Global/Popup";
import Form from "@/components/Contact/Form";
import { ToastContainer } from "react-toastify";

type Props = {};

export default function contact({}: Props) {
  return (
    <>
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
