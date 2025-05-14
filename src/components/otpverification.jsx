import React from 'react'
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import sign from "../assets/signpic.jpg";

const otpverification = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-16 h-screen ">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-between lg:gap-3 md:gap-0.5 ">
        <div className="lg:flex md:flex hidden justify-center items-center lg:w-[100%] md:w-[110%]">
          <img
            src={sign}
            alt="Login illustration"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="flex items-center justify-center py-10 sm:pt-5 px-14 sm:bg-stone-100 bg-stone-100 md:bg-transparent lg:bg-transparent rounded-2xl flex-col min-w-sm">
                 <div className="w-[60%] mr-auto flex mb-5 lg:-ml-8 md:-ml-6 sm:-ml-9 -ml-5 rounded-2xl">
                   <img
                     src={logo2}
                     alt="Company Logo"
                     className="h-full w-full object-contain"
                   />
                 </div>
          <div className=" w-full">
            <h1 className="font-bold text-[1.5rem]">OTP Verification</h1>
            <p className="text-start py-3">
              Check your email to see verification code
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="border-2 py-1 px-3 rounded-md">1</div>
              <div className="border-2 py-1 px-3 rounded-md">3</div>
              <div className="border-2 py-1 px-3 rounded-md">2</div>
              <div className="border-2 py-1 px-3 rounded-md">4</div>
            </div>
          </div>
          <div className="w-full">
            <button className="bg-black w-full text-white py-1.5 rounded-md mt-5 signup-btn">
              <Link to="/setpassword">Continue</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default otpverification