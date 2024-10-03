import React from "react";
import iPhone from "./iPhone 15.svg";
import Ellipse from "./Ellipse 543.svg";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./Footer.css";
const Footer_What_Do_We_Do = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-gray-600 rounded-xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center md:space-x-10 w-full mt-20">
      {/* iPhone Image Section */}
      <div className="image-section relative flex justify-center">
        <img
          src={iPhone} // Update the path to your actual image
          alt="iPhone Illustration"
          className="max-w-[300px] object-contain transition-transform duration-300 transform hover:scale-105 shadow-lg"
        />
        <img
          src={Ellipse} // Update the path to your actual image
          alt="Shadow"
          className="absolute bottom-[-20px] left-0 right-0 w-[150px] mx-auto opacity-60"
        />
      </div>

      {/* Text Section */}
      <div className="text-section text-center md:text-left space-y-4">
        <h1 className="Foot-What-Heading text-4xl font-bold text-white mt-4">
          Medoc Health
        </h1>
        <p className="Foot-What-para text-lg text-white">
          It's the perfect time to join the Medoc ecosystem.
        </p>
        <div className="flex flex-col lg:flex-row justify-center md:justify-start lg:space-x-4">
          {/* App Store Button */}
          {/* <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Apple Logo.svg"  // Update the path to your actual image
              alt="App Store"
              className="w-6"
            />
            <span>Download on the App Store</span>
          </button> */}
          {/* Google Play Button */}
          {/* <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Google Play.svg"  // Update the path to your actual image
              alt="Google Play"
              className="w-6"
            />
            <span>Get it on Google Play</span>
          </button> */}
          <a
            href="#"
            className="span-font inline-flex items-center w-fit  bg-black text-white px-4 py-4 rounded-lg mt-4 hover:bg-gray-800 transition-colors"
          >
            <FaApple className="flex w-12 h-12" />
            <div className="flex flex-col justify-start">
              <span className=" flex justify-start">Get it on </span>
              <span className="flex  justify-start font-semibold text-3xl pr-5 lg:px-1 ">
                App Store
              </span>
            </div>
          </a>

          <a
            href="#"
            className="span-font inline-flex items-center w-fit bg-black text-white px-4 py-4 rounded-lg mt-4 hover:bg-gray-800 transition-colors"
          >
            <FaGooglePlay className=" flex w-10 h-10" />
            <div className="flex flex-col justify-start">
              <span className=" flex justify-start">Get it on </span>
              <span className="flex  justify-start font-semibold text-3xl ">
                Google Play
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer_What_Do_We_Do;
