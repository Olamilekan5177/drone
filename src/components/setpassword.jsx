import React from 'react'
import { Link } from "react-router-dom";

const setpassword = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16">
      <div className="flex items-center py-10 px-10 bg-stone-100 rounded-2xl flex-col min-w-sm">
        <div className=" flex flex-col w-f">
          <h1 className="font-bold text-[1.5rem]">Set Password</h1>
          <p className="text-center py-3">
            For addittional security set a password
          </p>

          <input
            type="text"
            placeholder="Enter New Password"
            className="sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2 mb-4"
          />
          <input
            type="text"
            placeholder="Confirm New Password"
            className="sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
          />

          <button className="bg-black text-white py-1.5 rounded-md mt-5 signup-btn">
            <Link to="/Home">Continue</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default setpassword