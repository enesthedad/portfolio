import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_xhrv50s", "template_x0ysemj", formState, "S36Oh9uKklgTvKBIg")
      .then((res) => console.log("Success", res.status, res.message))
      .catch((err) => console.log("Failed", err));
  };
  return (
    <div
      id="connect"
      className="relative flex flex-col w-full gap-10 px-3 py-5 bg-white lg:py-20 lg:justify-center lg:flex-row lg:items-center"
    >
      <div className="p-4 font-semibold md:absolute w-full md:right-10 md:top-10 md:w-fit lg:relative lg:w-[450px] md:items-end items-start lg:left-5 lg:items-start lg:top-0 relative top-0 lg:text-[22px] lg:p-10 lg:gap-6 h-max bg-emerald-800 rounded-lg  contact-list text-stone-200 text-[11px] left flex flex-col gap-3">
        <div className="">
          <a
            href="mailto:robinthelevi@gmail.com"
            className="flex flex-row items-center gap-2"
          >
            <i className="fa-regular fa-envelope"></i>
            <p>robinthelevi@gmail.com</p>
          </a>
        </div>
        <div className="">
          <a
            href="https://github.com/settings"
            className="flex flex-row items-center gap-2"
          >
            <i className="fa-brands fa-x-twitter"></i>
            <p>@enesthedad</p>
          </a>
        </div>
        <div className="">
          <a href="/" className="flex flex-row items-center gap-2">
            <i className="fa-brands fa-github"></i>
            <p>enesthedad</p>
          </a>
        </div>

        <div className="">
          <a
            href="https://enesthedad.medium.com/"
            className="flex flex-row items-center gap-2"
          >
            <i className="fa-brands fa-medium"></i>
            <p>enesthedad</p>
          </a>
        </div>
        <div className="">
          <a
            href="https://dev.to/enesthedad"
            className="flex flex-row items-center gap-2"
          >
            <i className="fa-brands fa-dev"></i>
            <p>enesthedad</p>
          </a>
        </div>
      </div>
      <div className="p-4 lg:max-w-xl right bg-[#c1ddce]  md:w-full lg:px-10 lg:py-5 flex flex-col items-start rounded-lg mb-10">
        <div className="flex flex-col w-full lg:m-0 md:ml-20 md:max-w-md ">
          <h4 className="text-[15px] md:text-[18px] font-semibold lg:text-[24px] lg:h-full">
            I'd love to hear your feedbacks{" "}
          </h4>
          <h5 className=" tracking-wider text-stone-700 text-[12px] md:text-[14px] lg:text-[20px] mb-2 ">
            Leave a message and i'll response you ASAP
          </h5>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-3 md:w-3/4 md:m-0 lg:gap-6"
          >
            <div className="text-[10px] md:text-[14px] flex md:flex-col w-full lg:text-[16px] flex-row md:items-start items-center justify-start gap-3 md:gap-2">
              <label htmlFor="name" className="font-semibold tracking-widest ">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formState.name}
                required
                className="px-2 py-1 lg:py-2 lg:px-4 w-full lg:w-[450px] md:w-full rounded-md"
              />
            </div>
            <div className="text-[10px] w-full md:text-[14px] flex md:flex-col lg:text-[16px] flex-row md:items-start items-center justify-start gap-3 md:gap-2">
              <label htmlFor="email" className="font-semibold tracking-widest ">
                email
              </label>
              <input
                className="px-2 py-2 w-full lg:w-[450px] md:w-full rounded-md"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                id="email"
              />
            </div>
            <div className="text-[10px] md:text-[14px] flex flex-col  lg:text-[16px] items-start justify-start gap-3 md:gap-2">
              <label
                htmlFor="message"
                className="font-semibold tracking-widest"
              >
                your message
              </label>
              <textarea
                rows={5}
                className="px-2 py-2 lg:w-[450px] w-full md:w-full rounded-md"
                name="message"
                id="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              aria-label="send your message"
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 font-semibold text-[12px] text-white rounded-md bg-emerald-800"
            >
              send your message
            </button>
          </form>
        </div>
      </div>
      <AnchorLink href="#home">
        <button
          aria-label="go up"
          className="absolute w-10 h-10 bottom-4 right-4 bg-emerald-500 text-white rounded-full text-[20px]"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </AnchorLink>
    </div>
  );
};

export default Contact;
