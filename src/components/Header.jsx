import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-black text-white h-18 flex items-center">
      <nav>
        <ul className="flex items-center gap-10 pl-7">
          <li>
            <img src={logo} alt="My Logo" className="h-32 w-24" />
          </li>
          <ul className="flex gap-10 pt-3">
            <li>
              <Link to="/Flights" className="hover:text-gray-400">
                Flights
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Become Pilot
              </Link>
            </li>
            
           
          </ul>
          
          <ul className="flex items-center gap-10 pt-3 pl-[36rem]">
            <li>
              <Link to="/Help" className="hover:text-gray-400">
                Help
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-400">
                <button className="text-black bg-white w-[5rem] py-1 rounded-3xl flex items-center justify-center">
                  <p className="">Signup</p>
                </button>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
