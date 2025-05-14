import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify"; // Added for error notifications
import sign from "../assets/signpic.jpg";
import logo2 from "../assets/logo2.png";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../index.css"; // Dedicated CSS to match Login.jsx

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organizationName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      // Simulate backend response with 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const simulatedResponse = {
        token: "fake-token-for-testing",
        email: formData.email,
      };
      localStorage.setItem("token", simulatedResponse.token);
      navigate("/Home");
    } catch (error) {
      toast.error("Error during sign-up");
      console.error("Error during sign-up:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const token = credentialResponse.access_token;
      try {
        const simulatedResponse = {
          token: "fake-token-for-testing",
          email: "googleuser@example.com",
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (simulatedResponse.token) {
          localStorage.setItem("token", simulatedResponse.token);
          navigate("/Home");
        } else {
          toast.error("Google sign-up failed: No token received");
          console.error("No token received from simulated response");
        }
      } catch (error) {
        toast.error("Error during Google sign-up");
        console.error("Error logging in with Google:", error);
      }
    },
    onError: () => {
      toast.error("Google Sign-Up Failed");
      console.log("Google Sign-Up Failed");
    },
    flow: "implicit",
    scope: "openid email profile",
  });

  return (
    <section className="flex flex-col justify-center items-center px-11 pb-11 pt-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center lg:gap-0.5 md:gap-10">
        <div className="lg:flex md:flex hidden justify-center items-center lg:w-[100%] md:w-[110%]">
          <img
            src={sign}
            alt="Signup illustration"
            className="h-full w-full rounded-2xl"
          />
        </div>

        <div className="flex flex-col items-center justify-center pt-10">
          <div className="flex items-center justify-center py-10 md:py-0 sm:bg-stone-100 bg-stone-100 md:bg-transparent lg:bg-transparent rounded-2xl flex-col min-w-sm lg:-mt-20">
            <div className="w-full flex justify-start">
              <div className="w-[40%] rounded-2xl lg:flex md:flex sm:hidden hidden">
                <img src={logo2} alt="Company Logo" className="h-full w-full" />
              </div>
            </div>

            <div className="space-y-2 w-full">
              <div className="space-y-0.5 pl-7">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:items-center lg:flex lg:items-center justify-between">
                  <div className="">
                    <h1 className="font-bold sm:text-[2.5rem] text-[1.8rem]">
                      Kick Off Now
                    </h1>
                    <p>Please fill in this form to create an account!</p>
                  </div>
                  <div className="w-[80%] h-[80%] justify-self-end rounded-2xl md:hidden lg:hidden">
                    <img
                      src={logo2}
                      alt="Company Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[0.1rem] bg-neutral-400 w-full block md:hidden"></div>
            </div>

            <div className="div2 pt-4">
              <form className="px-7" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <input
                      type="text"
                      id="organizationName"
                      placeholder="Enter organization name"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <div>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Mobile number"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-full mt-5">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full sm:text-sm border-2 py-1.5 pr-10 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-black text-sm"
                    />
                  </span>
                </div>
                <div className="relative w-full mt-5">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full sm:text-sm border-2 py-1.5 pr-10 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                      className="text-black text-sm"
                    />
                  </span>
                </div>
                <button
                  type="submit"
                  className="bg-black w-full text-white py-1.5 px-4 rounded-md mt-5 signup-btn transition duration-200 ease-in-out hover:bg-gray-800"
                >
                  Sign Up
                </button>
                <div className="w-full mt-5">
                              <button
                                onClick={() => googleLogin()}
                                className="google-login-btn"
                                aria-label="Google"
                              >
                                <FontAwesomeIcon
                                  icon={faGoogle}
                                  className="google-logo"
                                  title="Sign in with Google"
                                />
                                <span className="google-text">Google</span>
                              </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-2.5">
            <p>
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 hover:underline pl-1.5"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
