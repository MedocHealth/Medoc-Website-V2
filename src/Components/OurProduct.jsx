
import React from 'react';

import Product1 from "./Assets/p1.png";
import Product2 from "./Assets/p2.png";
import Product3 from "./Assets/p3.png";
import Product4 from "./Assets/p4.png";
import Product5 from "./Assets/p5.png";
const OurProduct = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-5xl font-bold text-center text-[#2A4755] mb-4">Our Products.</h2>
      <p className="text-lg text-center text-[#2A4755] max-w-3xl mx-auto mb-8">
        Medoc Health delivers a smart, connected healthcare ecosystem that
        streamlines diagnostics, treatment, and care management. Simple, fast,
        and patient-focused—transforming healthcare for better outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#EDFCFC] p-6 rounded-lg md:col-span-2 flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#2A4755] mb-4">HOSPITAL+</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product1}alt="Hospital+ dashboard" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#2A4755] mb-4">DOCASSIST</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product2} alt="Docassist app" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#2A4755] mb-4">MEDOC+</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product3} alt="Medoc+ app" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#2A4755] mb-4">MEDCARD</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product4} alt="Medcard" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#2A4755] mb-4">MEAPP</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product5} alt="Meapp interface" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] text-white px-6 py-2 rounded-md">View more</button>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;