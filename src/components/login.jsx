import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sign from "../assets/signpic.jpg";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  // Load saved credentials on mount
  useEffect(() => {
    const savedemail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedemail && savedPassword) {
      setemail(savedemail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    };
  };

  return (
    <section className="flex flex-col justify-center items-center py-16">
      <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 items-center justify-between lg:gap-3 md:gap-0.5">
        <div className=" lg:flex justify-center items-center lg:h-[33rem] lg:w-[33rem] md:hidden  hidden ">
          <img src={sign} alt="" className="h-full w-full rounded-2xl" />
        </div>
        <div className="flex items-center py-10 px-14 sm:bg-stone-100 md:bg-stone-100 lg:bg-transparent rounded-2xl  flex-col min-w-sm">
          <div className="w-14 h-14 mb-5 bg-white border-2 border-black rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-black text-4xl" />
          </div>

          {/* Username Input */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faUser} className="text-black text-sm" />
            </span>
            <input
              type="text"
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full sm:text-sm border-2 border-gray-200 rounded-md bg-gray-200 py-1.5 pl-8 pr-3 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Password Input */}
          <div className="relative w-full mt-5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faLock} className="text-black text-sm" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              autoComplete="off" // Prevents browser autofill/visibility toggle
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full sm:text-sm border-2 border-gray-200 rounded-md bg-gray-200 py-1.5 pl-8 pr-10 focus:outline-none focus:ring-0"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-black text-sm"
              />
            </span>
          </div>

          {/* Remember Me & Forget Password */}
          <div className="w-full flex justify-between items-center mt-5 text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember me</span>
            </label>
            <p className="text-blue-600 cursor-pointer">
              <Link to="/forgetpassword" className="hover:underline">
                Forgot Password?
              </Link>
            </p>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="self-start bg-black text-white py-1.5 px-4 rounded-md mt-5"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
