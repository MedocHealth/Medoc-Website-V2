import React from "react";
import Ecosystem from "./Assets/ecosystem.png";
import "./MedEcosystem.css"
const MedEcosystem = ({scrollToVideo}) => {
  return (
    <div>
      <div className="flex flex-col  justify-center  ">
        <h2 className="Heading flex justify-center items-center mt-8 m-2 font-semibold text-4xl text-Center pl-14 text-[#2A4755] ">
          The MEDOC Healthcare Ecosystem
        </h2>
        <h3 className="MedEcopara flex justify-center items-center w-4/5 md:w-2/3 mx-auto mb-4 p-2 font-medium text-wrap text-[#2A4755]">
          "Our ecosystem at MEDOC Health seamlessly connects patients,
          healthcare providers, and technology. By integrating digital tools,
          telemedicine, and data-driven insights, we create a unified platform
          that enhances care delivery, improves communication, and streamlines
          workflows. Together, we empower better health outcomes and a smarter,
          more connected healthcare experience."
        </h3>
      </div>
      <div className="flex w-3/4 md:w-1/2 m-auto justify-between items-center">
        <img src={Ecosystem} alt="" />
      </div>
     
      <div className="text-center mt-8 mb-8">
        <button className= "bg-gray-700 Bookbtn text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
        onClick={scrollToVideo} 
        >
          Explore The Ecosystem
        </button>
      </div>
    </div>
  );
};

export default MedEcosystem;
