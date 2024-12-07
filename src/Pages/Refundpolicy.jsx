import React from "react";
import logo from "../Images/logo-nav.png";
import "./privacypolicy.css";

const Refundpolicy = () => {
  return (
    <div className="privacy-policy  w-full p-6">
      {/* Header Section */}
      <header className="header">
        <img
          src={logo}
          width="173"
          height="40"
          alt="footer-logo"
          className="logo"
        />
        <p className="description">
          The complete healthcare ecosystem building towards better
          accessibility to healthcare and supporting you with medical finances
          and family medicine.
        </p>
      </header>

      <h1 className="sub-heading flex m-2 justify-center text-10xl ">
        REFUND POLICY
      </h1>
      <p className="description flex justify-center items-center w-full p-2 text-wrap text-justify ">
        Medoc Health IT Private Limited does not support or provide any refunds.
      </p>
    </div>
  );
};

export default Refundpolicy;
