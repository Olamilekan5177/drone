import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import sign from "../assets/signpic.jpg";
import logo2 from "../assets/logo2.png";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Load saved credentials on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission default
    try {
      const res = await fetch("https://your-backend-api.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
        navigate("/Home");
      } else {
        toast.error(`Login failed: ${data.error || "Invalid credentials"}`);
        console.error("Login failed:", data);
      }
    } catch (error) {
      toast.error("Error during login");
      console.error("Error during login:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const token = credentialResponse.id_token || credentialResponse.access_token;
      if (!token) {
        toast.error("No token received from Google");
        console.error("No token in credentialResponse:", credentialResponse);
        return;
      }
      try {
        const res = await fetch("https://your-backend-api.com/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json();
        if (res.ok && data.token) {
          localStorage.setItem("token", data.token);
          if (rememberMe) {
            localStorage.setItem("email", email || data.email || "");
            localStorage.setItem("password", password || "");
          } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
          }
          navigate("/Home");
        } else {
          toast.error("Google authentication failed: Invalid response");
          console.error("No token received from backend:", data);
        }
      } catch (error) {
        toast.error("Error during Google authentication");
        console.error("Error with Google auth:", error);
      }
    },
    onError: () => {
      toast.error("Google Authentication Failed");
      console.log("Google Authentication Failed");
    },
    flow: "implicit",
    scope: "openid email profile",
  });

  return (
    <section className="flex flex-col justify-center items-center p-16">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-between lg:gap-3 md:gap-0.5">
        {/* <div className="lg:flex md:flex justify-center items-center lg:h-[33rem] lg:w-[33rem] md:h-[33rem] md:w-[33rem]  sm:hidden hidden"> */}
        <div className="lg:flex md:flex hidden justify-center items-center lg:w-[100%] md:w-[110%]">
          <img
            src={sign}
            alt="Login illustration"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="flex items-center py-10 sm:pt-5 px-14 sm:bg-stone-100 bg-stone-100 md:bg-transparent lg:bg-transparent rounded-2xl flex-col min-w-sm">
          {/* <div className="w-14 h-14 mb-5 bg-white border-2 border-black rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-black text-4xl" />
          </div> */}

          <form onSubmit={handleLogin} className="w-full">
            <div className="w-[60%]  justify-self-start mb-5 -ml-7 rounded-2xl ">
              <img
                src={logo2}
                alt="Company Logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Email Input */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faUser} className="text-black text-sm" />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:text-sm border-2 border-gray-200 rounded-md bg-gray-200 py-1.5 pl-8 pr-3 focus:outline-none focus:ring-0"
                required
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
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full sm:text-sm border-2 border-gray-200 rounded-md bg-gray-200 py-1.5 pl-8 pr-10 focus:outline-none focus:ring-0"
                required
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

            {/* Remember Me & Forgot Password */}
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
            <button class="login-button">Login</button>

            {/* Google Login Button */}
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

          {/* Signup Link */}
          <div className="pt-2.5 text-sm">
            <p>
              Don't have an account?
              <Link
                to="/signup"
                className="text-blue-600 hover:underline pl-1.5"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;