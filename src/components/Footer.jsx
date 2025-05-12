import React from "react";
import logos from "../assets/nijadronelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="">
      <div className=" w-full bg-black text-white px-20 pt-20">
        <div className="">
          <div className="mb-2">
            <img src={logos} alt="My Logo" className="h-13 w-30 block " />
          </div>
          <div>
            <p className="text-lg font-medium">See the World from Above</p>
            <p className="text-lg font-medium">
              Capturing Heights, Delivering Insights
            </p>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-center  gap-20">
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="/offerings" className="hover:text-white">
                  Learn
                </a>
              </li>
              <li>
                <a href="/newsroom" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Drone Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-2">Drone Services</h4>
            <ul className="space-y-1">
              <li>
                <a href="/aerial-photography" className="hover:text-white">
                  Aerial Photography
                </a>
              </li>
              <li>
                <a href="/drone-mapping" className="hover:text-white">
                  Drone Mapping & Surveying
                </a>
              </li>
              <li>
                <a href="/inspection" className="hover:text-white">
                  Inspection Services
                </a>
              </li>
              <li>
                <a href="/agriculture" className="hover:text-white">
                  Agriculture Services
                </a>
              </li>

              <li>
                <a href="/construction" className="hover:text-white">
                  Construction Monitoring
                </a>
              </li>
              <li>
                <a href="/environmental" className="hover:text-white">
                  Environmental Monitoring
                </a>
              </li>
              <li>
                <a href="/oil-gas" className="hover:text-white">
                  Oil & Gas Inspections
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="">
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="location grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:justify-between md:justify-start sm:justify-start pt-10">
          <div className="flex gap-32 mt-10 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-lg text-white"
              />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-lg text-white"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-lg text-white"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-lg text-white"
              />
            </a>
          </div>

          <div className="flex flex-row lg:justify-end lg:items-center md:justify-start sm:justify-start gap-15 mt-10">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faLocationCrosshairs}
                className="text-xl"
              />
              Lagos
            </div>
            <div className="flex items-center gap-2">
              Abuja
              <FontAwesomeIcon
                icon={faLocationCrosshairs}
                className="text-xl"
              />
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pt-10">
          © {new Date().getFullYear()} Your Drone Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
