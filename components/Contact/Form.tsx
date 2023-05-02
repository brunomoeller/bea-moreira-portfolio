import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  from_name: string;
  from_email: string;
  message: string;
  services: string | null;
};

function Form({}: Props) {
  const [isNameFilled, setNameFilled] = useState(false);
  const [isEmailFilled, setEmailFilled] = useState(false);
  const [isMessageFilled, setMessageFilled] = useState(false);

  const [services, setServices] = useState<string[]>([]);

  const { register, handleSubmit, reset } = useForm<Inputs>();

  function handleCheckbox(e: EventTarget & HTMLInputElement) {
    if (e.checked) {
      setServices([...services, e.name]);
    } else {
      setServices(services.filter((item) => item !== item));
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    formData.services = services.join(", ");
    
    const id = toast.loading("Sending...");
    reset();
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          toast.update(id, {
            render: "Sent!",
            type: "success",
            isLoading: false,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.update(id, {
            render: "Sent!",
            type: "error",
            isLoading: false,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  return (
    <>
      <section
        id="form"
        className="w-full md:w-[50vw] col-span-full grid grid-cols-1 gap-y-8 text-darker-white font-quicksand justify-self-center"
      >
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 border rounded-3xl gap-y-14 p-10"
        >
          <h1 className="font-bold text-3xl xl:text-5xl">Get in Touch!</h1>
          <div className="grid grid-cols-1 gap-y-10">
            <div className="grid grid-cols-1 gap-y-4">
              <label className="font-semibold text-lg xl:text-xl">
                Your name
              </label>
              <input
                {...register("from_name")}
                className={`w-full border border-[#686868] bg-transparent px-4 py-2 rounded placeholder:text-[#686868] ${
                  isNameFilled ? "invalid:border-red-600" : ""
                }`}
                type="text"
                placeholder="Your name"
                required
                onChange={(e) => {
                  e.target.value ? setNameFilled(true) : setNameFilled(false);
                }}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              <label className="font-semibold text-lg xl:text-xl">
                Your email
              </label>
              <input
                {...register("from_email")}
                className={`w-full border border-[#686868] bg-transparent px-4 py-2 rounded placeholder:text-[#686868] ${
                  isEmailFilled ? "invalid:border-red-600" : ""
                }`}
                type="email"
                placeholder="Your email"
                required
                onChange={(e) => {
                  e.target.value ? setEmailFilled(true) : setEmailFilled(false);
                }}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              <label className="font-semibold text-lg xl:text-xl">
                Message
              </label>
              <textarea
                {...register("message")}
                className={`h-24 w-full border border-[#686868] bg-transparent px-4 py-2 rounded placeholder:text-[#686868] ${
                  isMessageFilled ? "invalid:border-red-600" : ""
                }`}
                placeholder="Write your message here. At least 50 characters long"
                required
                minLength={50}
                onChange={(e) => {
                  e.target.value
                    ? setMessageFilled(true)
                    : setMessageFilled(false);
                }}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-4 md:justify-items-center">
              <label className="font-semibold text-lg xl:text-xl">
                Services
              </label>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center gap-x-2">
                  <input
                    className="accent-[#5DB05B]"
                    id="ux-design"
                    name="UX Design"
                    type="checkbox"
                    onChange={(e) => {
                      handleCheckbox(e.target);
                    }}
                  />
                  <label htmlFor="ux-design">UX Design</label>
                </div>
                <div className="flex items-center gap-x-2 w-36">
                  <input
                    className="accent-[#5DB05B]"
                    id="visual-identity"
                    name="Visual Identity"
                    type="checkbox"
                    onChange={(e) => {
                      handleCheckbox(e.target);
                    }}
                  />
                  <label htmlFor="visual-identity">Visual identity</label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    className="accent-[#5DB05B]"
                    id="ui-design"
                    name="UI Design"
                    type="checkbox"
                    onChange={(e) => {
                      handleCheckbox(e.target);
                    }}
                  />
                  <label htmlFor="ui-design">UI Design</label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    className="accent-[#5DB05B]"
                    id="development"
                    name="Development"
                    type="checkbox"
                    onChange={(e) => {
                      handleCheckbox(e.target);
                    }}
                  />
                  <label htmlFor="development">Development</label>
                </div>
              </div>
              <button
                className="mt-4 w-full bg-white text-dark-bg-color font-bold p-1 justify-self-center self-center rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </motion.form>
      </section>
    </>
  );
}

export default Form;
