import React from "react";
import helloImg from "../Imgs/undraw_programming_re_kg9v.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Contact = () => {
  return (
    <div
      id="connect"
      className="relative flex flex-col w-full min-h-screen gap-10 px-5 py-4 bg-white lg:flex-row lg:items-center lg:h-screen"
    >
      <div className="p-4 font-semibold lg:w-[450px] lg:text-[22px] lg:p-10 lg:gap-6 h-max bg-emerald-800 rounded-lg  contact-list text-stone-200 text-[16px] left flex flex-col gap-3">
        <div className="">
          <a href="/" className="flex flex-row items-center gap-2">
            <i className="fa-regular fa-envelope"></i>
            <p>robinthelevi@gmail.com</p>
          </a>
        </div>
        <div className="">
          <a href="/" className="flex flex-row items-center gap-2">
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
          <a href="/" className="flex flex-row items-center gap-2">
            <i className="fa-brands fa-linkedin-in"></i>
            <p>Enes Soyturk</p>
          </a>
        </div>
        <div className="">
          <a href="/" className="flex flex-row items-center gap-2">
            <i className="fa-brands fa-medium"></i>
            <p>enesthedad</p>
          </a>
        </div>
        <div className="">
          <a href="/" className="flex flex-row items-center gap-2">
            <i className="fa-brands fa-dev"></i>
            <p>enesthedad</p>
          </a>
        </div>
      </div>
      <div className="p-4  right bg-[#c1ddce] lg:w-full lg:px-10 lg:py-5  rounded-lg mb-10">
        <h2 className="text-[18px] font-semibold lg:text-[24px] lg:h-full">
          I'd love to hear your feedbacks{" "}
        </h2>
        <p className=" tracking-wider text-stone-600 text-[16px] lg:text-[20px] mb-2 ">
          Leave a message and i'll response you ASAP
        </p>
        <form action="" className="flex flex-col gap-3 lg:gap-6">
          <div className="flex flex-col items-start justify-start gap-1">
            <label
              htmlFor="client-name"
              className="font-semibold tracking-widest lg:text-[20px]"
            >
              name
            </label>
            <input
              type="text"
              name="client-name"
              id="client-name"
              className="px-2 py-2 lg:w-[450px]"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-1 ">
            <label
              htmlFor="email"
              className="font-semibold tracking-widest lg:text-[20px]"
            >
              email
            </label>
            <input
              className="px-2 py-2 lg:w-[450px]"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-1 ">
            <label
              htmlFor="client-message"
              className="font-semibold tracking-widest lg:text-[20px]"
            >
              your message
            </label>
            <textarea
              rows={5}
              className="px-2 py-2 lg:w-[450px] rounded-md"
              name="client-message"
              id="client-message"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-[22px] text-white rounded-md bg-emerald-800"
          >
            send your message
          </button>
        </form>
      </div>
      <AnchorLink href="#home">
        <button className="absolute w-10 h-10 bottom-4 right-4 bg-emerald-500 text-white rounded-full text-[20px]">
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </AnchorLink>
    </div>
  );
};

export default Contact;

{
  /* <div className="bg-[#E8E8F2] flex rounded-xl w-full items-center  h-full  p-6">
        <div className="flex flex-col justify-center w-full h-full gap-20">
          <h4 className="text-[20px] flex flex-col align-middle justify-center font-bold p-1">
            Building fullstack apps, sites,{" "}
            <span className="flex items-center gap-2 align-middle text-emerald-500">
              <i class="fa-solid fa-wand-sparkles bg-emerald-500 text-white  text-[15px] p-2 rounded-full"></i>{" "}
              dreams
            </span>
          </h4>
          <p className="text-[16px] text-stone-600">
            a friendly passionate full stack developer in Turkey. I specialize
            in responsive Web Design
          </p>
          <form action="submit" className="w-full p-1">
            <input
              type="text"
              placeholder="E-mail address"
              className="px-2 text-[12px] py-2 w-[150px]"
            />
            <button
              type="submit"
              className="px-2 py-2 text-white text-[12px] bg-emerald-500"
            >
              Connect With Me
            </button>
          </form>
        </div>
      </div> */
}
