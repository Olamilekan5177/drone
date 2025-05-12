import React from "react";
import videoFile from "../assets/my-video.mp4";
import flying from "../assets/flyingdrone.avif";
import fly from "../assets/third3.png";
import fly2 from "../assets/secounddrone.png";
import fly4 from "../assets/drone4.png";
import fly5 from "../assets/dji-drone.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className="lg:p-15 md:p-10 sm:p-4">
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:w-full md:w-full sm:w-sm  mt-4 justify-center items-center self-center ">
            <h1 className="lg:text-5xl md:text-4xl text-4xl font-medium pb-7  ">
              Fly anywhere with <span className="block mt-2">Dronesxy</span>
            </h1>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                  />
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className=" w-full sm:text-sm focus:outline-none"
                >
                  Organization Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="organizationName"
                    placeholder="Enter organization name"
                    className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                    />
                  </div>
                </div>

                {/* Phone Number */}

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                      className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                    />
                  </div>
                </div>
              </div>
              {/* Contact Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="address"
                    placeholder="Enter your contact address"
                    required
                    className="w-full sm:text-sm border-2 py-1.5 border-gray-200 rounded-md bg-gray-200 focus:outline-none focus:ring-0 pl-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:gap-15 md:gap-7 sm:gap-4 mt-2.5 justify-center items-center">
            <button className="py-2 px-7 bg-black rounded-lg font-medium text-white">
              Proceed
            </button>
            <div className="mb-1">
              <p>Sign in to view your recent activity</p>
              <div className="w-[16rem] h-0.5 bg-gray-400"></div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start md:justify-start sm:justify-center sm:items-center sm:self-center lg:items-start lg:self-start md:items-start md:self-start lg:mt-0 md:mt-0 sm:mt-7 ">
          <video
            className="lg:w-[35rem] lg:h-[38rem] md:w-md md:h-[38rem] sm:h-[30rem]  sm:w-[25rem] flex sm:justify-center object-cover rounded-lg" // Added height here
            autoPlay // Makes the video play automatically
            loop // Makes the video loop automatically
            muted // Prevents audio from autoplaying in some browsers
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <section className="2 flex flex-col mt-20">
        <div className="sm:text-center md:text-start lg:text-start">
          <p className="font-bold text-3xl mb-0  ">Drone Activities</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 justify-center  items-center  gap-4">
          <div className="bg-gray-300 flex flex-row h-[9rem] items-center w-[23rem] px-6.5 rounded-lg mt-8">
            <div className="">
              <p className="pb-3 font-medium">Commercial</p>
              <p>Used for mapping,real estate, inspections and filmmaking.</p>
            </div>
            <div>
              <img src={fly} alt="" className="w-40 h-28" />
            </div>
          </div>

          <div className="bg-gray-300 flex flex-row h-[9rem] items-center w-[23rem] px-6.5 rounded-lg mt-8">
            <div className="">
              <p className="pb-3 font-medium">Agricultural</p>
              <p>
                Used for Crop health monitoring, Precision spraying and seeding
              </p>
            </div>
            <div className="flex justify-center items-center w-52 h-24 -mr-7">
              <img src={fly2} alt="" className="" />
            </div>
          </div>
          <div className="bg-gray-300 flex flex-row h-[9rem] items-center w-[23rem] px-6.5 rounded-lg mt-8">
            <div className="">
              <p className="pb-3 font-medium">Industrial</p>
              <p>Used for Surveying & Mapping, Asset Inspection.</p>
            </div>
            <div>
              <img src={fly4} alt="" className="w-40 h-24" />
            </div>
          </div>
        </div>
      </section>

      <section className="3">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 mt-20">
          <div className="flex items-center justify-center">
            <img
              src={flying}
              alt="Description"
              className="lg:w-[35rem] md:h-[32rem] md:w-[35rem] sm:w-[30rem] rounded-xl h-auto lg:block md:block sm:hidden "
            />
          </div>
          <div className="flex flex-col justify-center  md:items-start sm:items-start p-10">
            <p className="pb-4 font-medium text-4xl lg:pl-10 md:pl-10 sm:pl-0">
              Ready to master drone <br /> flying?
            </p>
            <p className="text-xl lg:pl-10 md:pl-10 sm:pl-0  sm:min-w-96">
              Take control of the skies with expert training. Learn safety,
              navigation, photography, and more. &nbsp;
            </p>
            <div className="flex lg:gap-11 md:gap-7 sm:gap-4 mt-2.5 justify-center items-center pl-10">
              <button
                onClick={() =>
                  window.open(
                    "https://geoinfoacademy.com/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="text-[1rem] text-white border-2 px-4 py-2 bg-black border-black mt-2 rounded-lg"
              >
                <p className="font-sm"> Get access</p>
              </button>
              <div className="mt-2">
                <Link to="/login" className="text-black hover:underline">
                  <p>Already have an account? Sign in</p>
                </Link>
                <div className="w-[16rem] h-0.5 bg-gray-400"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-5">
            <img
              src={flying}
              alt="Description"
              className="w-[30rem] min-h-[25rem] rounded-xl h-auto lg:hidden md:hidden sm:block"
            />
          </div>
        </div>
      </section>
      <section className="4">
        <div className="grid lg:grid-cols-2 lg:mt-20 md:grid-cols-2 md:mt-20 sm:mt-0">
          <div className="flex flex-col justify-center items-start lg:p-10 md:p-10 p-10 pt-0">
            <p className="pb-4 font-medium text-4xl lg:pr-10 md:pr-10 sm:pl-0">
              Buy High-Performance Drones
            </p>

            <p className="text-xl lg:pr-10 md:pr-10 sm:pl-0 sm:min-w-96">
              Take your aerial experience to the next level with our top-quality
              drones. Explore models with advanced GPS, 4K cameras, obstacle
              avoidance, and long flight times.
              <br />
            </p>
            <div className="flex lg:gap-10 md:gap-7 sm:gap-4 mt-2.5 justify-center items-center">
              <button
                onClick={() =>
                  window.open(
                    "https://geoinfostore.com/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="text-[1rem] text-white border-2 px-4 py-2 bg-black border-black mt-2 rounded-lg"
              >
                Get access
              </button>
              <div className="mt-2">
                <Link to="/login" className="text-black hover:underline">
                  <p>Already have an account? Sign in</p>
                </Link>
                <div className="w-[16rem] h-0.5 bg-gray-400"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={fly5}
              alt="Description"
              className="lg:w-[35rem] lg:h-[30rem] md:h-[27rem] sm:h-[27rem] md:w-[35rem] sm:w-[33rem] lg:mb-0 md:mb-0 sm:mb-7 rounded-xl"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
