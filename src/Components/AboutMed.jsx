import React from "react";
import "./AboutMed.css"
const AboutMed = () => {
  return (
    <div className="Container flex flex-col  w-full   rounded-3xl mx-auto my-4 p-8 sm:p-20">
      <h2 className="flex text-white Heading1 font-bold ">About MEDOC.</h2>
      <h3 className="Text1 flex text-white  font-semibold  my-1">
        “At MEDOC Health, we’re reshaping the future of healthcare.{" "}
      </h3>
      <h4 className="Text2 flex text-white font-light text-wrap  my-2">
        We are an AI Powered Hospital Automation System. Our mission is simple:
        to bridge the gap between cutting-edge technology and personalized
        patient care. With a team of passionate innovators and healthcare
        experts, we create digital solutions that empower patients, streamline
        provider workflows, and enhance health outcomes. We believe in smarter,
        faster, and more accessible healthcare for everyone. Join us in driving
        the next wave of health innovation!
      </h4>
    </div>
  );
};

export default AboutMed;
