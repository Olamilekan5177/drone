import React from 'react'
import { Link } from "react-router-dom";

const otpverification = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16">
      <div className="flex items-center py-10 px-6 bg-stone-100 rounded-2xl flex-col min-w-sm">
        <div className=" w-full">
          <h1 className="font-bold text-[1.5rem]">OTP Verification</h1>
          <p className="text-center py-3">
            Check your email to see verification code
          </p>
          <div className="flex justify-center items-center space-x-2">
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
    </section>
  );
}

export default otpverification