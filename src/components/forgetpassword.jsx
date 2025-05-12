import React from 'react'
import { Link } from "react-router-dom";

function forgetpassword() {
  return (
    <section className="flex flex-col justify-center items-center py-16">
      <div className="flex items-center py-10 px-6 bg-stone-100 rounded-2xl flex-col min-w-sm">
        <div className=" w-full">
          <h1 className="font-bold text-[1.5rem]">Forgot Password?</h1>
          <p className="text-center py-3">Enter your email to reset password</p>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
          />
        </div>
        <div className="w-full">
          <button className="bg-black w-full text-white py-1.5 rounded-md mt-5 signup-btn">
            <Link to="/otpverification">Continue</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default forgetpassword