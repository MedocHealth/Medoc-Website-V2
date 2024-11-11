import React from 'react';

const buttons = [
  "HR Automation",
  "Finance Automation",
  "IPD Management",
  "OPD Management",
  "AI Voice Prescription",
  "Smart Surgery Automation",
  "Inventory & Purchase",
  "Family & Patient",
  "Nurse Management",
  "Critical Care",
];

function Forms() {
  return (
    <div className="flex flex-col items-center h-[60vh] bg-gray-100 p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-500 mb-12">
        Book Your Appointment
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
        {buttons.map((text, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            onClick={() => handleClick(text)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

const handleClick = () => {
    window.open("https://calendly.com/medochealth/bookdemo", "_blank");
  };

export default Forms;
