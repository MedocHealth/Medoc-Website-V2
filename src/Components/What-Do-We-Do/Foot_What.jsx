import React from "react";
import "./Footer.css";

const Footer_What_Do_We_Do = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-gray-600 rounded-xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center md:space-x-10 w-[97.5%] mt-20">
      {/* iPhone Image Section */}
      <div className="image-section relative flex justify-center">
        <img
          src="src\Components\What-Do-We-Do\iPhone 15.svg" // Update the path to your actual image
          alt="iPhone Illustration"
          className="max-w-[300px] md:max-w-[400px] object-contain transition-transform duration-300 transform hover:scale-105 shadow-lg"
        />
        <img
          src="src\Components\What-Do-We-Do\Ellipse 543.svg" // Update the path to your actual image
          alt="Shadow"
          className="absolute bottom-[-20px] left-0 right-0 w-[150px] md:w-[200px] mx-auto opacity-60"
        />
      </div>

      {/* Text Section */}
      <div className="text-section text-center md:text-left space-y-4">
        <h1 className="Foot-What-Heading font-semibold text-[40px] md:text-[60px] text-white">
          Medoc Health
        </h1>
        <p className="Foot-What-para font-normal text-[16px] md:text-[20px] text-white leading-normal">
          It's the perfect time to join the Medoc ecosystem.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {/* App Store Button */}
          <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Apple Logo.svg" // Update the path to your actual image
              alt="App Store"
              className="h-8 md:h-11 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="span-font font-normal text-[14px] md:text-[16px] text-white">
                Download on the
              </span>
              <p className="p-font font-semibold text-[18px] md:text-[22px] text-white m-0">
                App Store
              </p>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Google Play.svg" // Update the path to your actual image
              alt="Google Play"
              className="h-8 md:h-11 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="font-poppins font-normal text-[14px] md:text-[16px] text-white">
                Get it on
              </span>
              <p className="font-poppins font-semibold text-[18px] md:text-[22px] text-white m-0">
                Google Play
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer_What_Do_We_Do;
