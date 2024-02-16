import React from "react";

const Greeter = () => {
  return (
    <div className="h-full flex items-center w-full bg-white top-0">
      <div className="text relative p-10 w-2/3 flex flex-col justify-around gap-5">
        <div className="flex flex-col gap-5 items-start">
          <div className="text-[65px] flex flex-col w-full items-start tracking-wider font-bold justify-start">
            <h2 className="flex justify-start text-center">i'm enes,</h2>
            <h2> a fullstack developer</h2>
          </div>
          <p className="text-stone-500 text-[18px]">
            i design and develop fullstack apps to turn your dreams into reality
          </p>
          <button className="bg-[#3B2AD4] text-white font-bold px-6 rounded-lg py-4">
            get in touch
          </button>
        </div>
        <div className="footer w-full">
          <hr />
          <div className="flex text-[18px] text-stone-500 p-4 gap-4">
            <p>Let's connect</p>
            <p>
              <i class="fa-solid fa-arrow-right-long"></i>
            </p>
            <a href="">
              <i class="hover:text-[#3B2AD4] fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i class="hover:text-[#3B2AD4] fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="#">
              <i class="hover:text-[#3B2AD4] fa-brands fa-medium"></i>
            </a>
            <a href="#">
              <i class="hover:text-[#3B2AD4] fa-brands fa-dev"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-red-500 h-full">
        <img
          className="w-full h-full overflow-hidden object-cover"
          src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Greeter;
