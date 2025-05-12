import React from "react";
import checkIcon from "../assets/badge-check.svg"; // 
import { Link } from "react-router-dom";

const PasswordUpdated = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16">
      <div className="flex items-center py-6 px-10 bg-stone-100 rounded-2xl flex-col min-w-sm">
        <div>
          <img
            src={checkIcon}
            alt="Check Icon"
            className="w-40 h-40" // You can adjust size
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[1.5rem]">Password Updated</h1>
          <p className="text-center py-3">
            Your password has been successfully updated.
          </p>
          <button className="bg-black w-full text-white py-1.5 rounded-md mt-5 signup-btn">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PasswordUpdated;
