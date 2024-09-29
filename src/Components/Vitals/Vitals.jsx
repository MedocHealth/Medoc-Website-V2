import React from "react";

import "./Vitals.css";
import img1 from "../../Images/image1.png";
import img2 from "../../Images/image2.png";
import img3 from "../../Images/image3.png";
const Vitals = () => {
  const articles = [
    {
      image: img1,
      tags: ["#medocHelth", "#WHO", "#UCMPMD"],
      title:
        "Transparency and Accountability in India's Medical Devices Sector: The UCMPMD 2024 Regulation",
      content:
        "6th of September: The Ministry of Chemicals and Fertilizers, Department of Pharmaceuticals notified the medical devices industry with a Uniform Code for Marketing Practices in Medical Devices, 2024",
    },
    {
      image: img2,
      tags: ["#medocHelth", "#WHO", "#UCMPMD"],
      title:
        "Urgent Call for Central Law to Protect Healthcare Professionals Amid Rising Violence",
      content:
        "Following the rape and murder of a doctor in the R.G. Kar Medical College, Kolkata and because of protesting healthcare professionals",
    },
    {
      image: img3,
      tags: ["#medocHelth", "#WHO", "#UCMPMD"],
      title:
        "Understanding and Preventing Dengue Fever Amidst Karnataka's Epidemic",
      content:
        "Following the rape and murder of a doctor in the R.G. Kar Medical College, Kolkata and because of protesting healthcare professionals",
    },
  ];

  return (
    <div className="bg-[#EDFCFC] vitals-container  p-8 rounded-xl">
      <h1 className="text-4xl Heading font-bold text-center text-gray-800 mb-2">
        Medoc Vitals
      </h1>
      <p className="text-center  subHeading text-gray-600 mb-8">
        Discover product updates, health-related news, and helpful insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* article will now redirect to vitals */}
        {articles.map((article, index) => (
          <a
            key={index}
            href="http://blog.medochealth.in/"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security by preventing access to the `window.opener` object
            className="bg-[#EDFCFC] rounded-lg overflow-hidden shadow-md block"
          >
            <div className="w-full h-48">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tags">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl articleheading font-semibold mb-2">
                {article.title}
              </h2>
              <p className="articlepara text-sm mb-4">{article.content}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-gray-700 Bookbtn text-white px-6 py-2 rounded-md hover:bg-gray-600 hover:scale-105 transition delay-130 duration-200 ease-in-out"
          onClick={() => (window.location.href = "http://blog.medochealth.in/")}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Vitals;
