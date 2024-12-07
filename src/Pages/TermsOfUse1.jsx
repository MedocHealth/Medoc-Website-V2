import React from "react";
import logo from "../Images/logo-nav.png";
import "./privacypolicy.css";
import TableofContent from "./TableofContent";

const TermsOfUse1 = () => {
  const keyHeading = [
    { id: 1, title: "Defination" },
    {
      id: 2,
      title: "User Agreement",
    },
    { id: 3, title: "Provider Agreement" },
    {
      id: 4,
      title: "Data Privacy And Security",
    },
    { id: 5, title: "Disclaimers" },
    { id: 6, title: "Termination" },
    { id: 7, title: "Governing Law and Dispute Resolution" },
    { id: 8, title: "Modifications" },
  ];
  return (
    <div>
      <div className="terms-of-use w-full p-6">
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
          Terms and Conditions
        </h1>
        <p className="last-updated description flex justify-center">
          Last updated April 4, 2024
        </p>

        <div className="flex flex-col lg:flex-row-reverse ">
          <TableofContent sections={keyHeading} />
          <main className="flex flex-col w-full lg:w-3/4 p-6 ">
            <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
              Defination
            </h2>

            <ul className="description  list-decimal flex flex-col text-justify mb-4 p-6">
              <li className="mb-2">
                Healthcare Ecosystem: A network of interconnected individuals,
                organizations, and technologies that collectively provide,
                manage, and support healthcare services.
              </li>
              <li className="mb-2">
                User: Any individual or entity that accesses and utilizes the
                services offered within the healthcare ecosystem.
              </li>
              <li className="mb-2">
                Provider: A licensed healthcare professional or organization
                that delivers healthcare services to users.
              </li>
              <li className="mb-2">
                Platform: The digital interface or application through which
                users and providers interact within the healthcare ecosystem.
              </li>
              <li className="mb-2">
                Data: Any information collected, stored, or processed within the
                healthcare ecosystem, including personal health information
                (PHI).
              </li>
            </ul>

            <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
              User Agreement
            </h2>

            <ul className="description  list-decimal flex flex-col text-justify mb-4 p-6">
              <li className="mb-2">
                Acceptance: By accessing or using the healthcare ecosystem,
                users agree to be bound by these terms and conditions.
              </li>
              <li className="mb-2">
                {" "}
                Eligibility: Users must be of legal age and have the capacity to
                enter into a binding agreement.
              </li>
              <li className="mb-2">
                Account Creation: Users may be required to create an account to
                access certain features or services.
              </li>
              <li className="mb-2">
                {" "}
                Accuracy of Information: Users are responsible for providing
                accurate and up-to-date information.
              </li>
              <li className="mb-2">
                Use of Services: Users agree to use the healthcare ecosystem's
                services for lawful purposes only.
              </li>
            </ul>

            <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
              Provider Agreement
            </h2>
            <ul className="description  list-decimal flex flex-col text-justify mb-4 p-6">
              <li className="mb-2">
                Qualifications: Providers must be licensed and in good standing
                in their respective jurisdictions.
              </li>
              <li className="mb-2">
                Compliance: Providers must comply with all applicable laws,
                regulations, and professional standards.
              </li>
              <li className="mb-2">
                {" "}
                Confidentiality: Providers must maintain the confidentiality of
                user information and PHI.
              </li>
              <li className="mb-2">
                {" "}
                Quality of Care: Providers must provide high-quality care that
                meets or exceeds accepted standards.
              </li>
            </ul>

            <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
              Data Privacy And Security{" "}
            </h2>
            <ul className="description  list-decimal flex flex-col text-justify mb-4 p-6">
              <li className="mb-2">
                Collection and Use: The healthcare ecosystem will collect and
                use data as outlined in its privacy policy.
              </li>
              <li className="mb-2">
                {" "}
                Security: The healthcare ecosystem will implement reasonable
                security measures to protect data.
              </li>
              <li className="mb-2">
                Sharing: Data will only be shared with third parties in
                accordance with the privacy policy and applicable laws.
              </li>
            </ul>

            <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
              Disclaimers{" "}
            </h2>
            <ul className="description  list-decimal flex flex-col text-justify mb-4 p-6">
              <li className="mb-2">
                No Medical Advice: The healthcare ecosystem does not provide
                medical advice. Users should consult with qualified healthcare
                professionals for diagnosis and treatment.
              </li>
              <li className="mb-2">
                {" "}
                No Warranty: The healthcare ecosystem is provided "as is"
                without any warranties or guarantees.
              </li>
              <li className="mb-2">
                Liability Limitation: The healthcare ecosystem's liability for
                any damages arising from its use is limited.
              </li>
            </ul>

            <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
              Termination
            </h2>
            <ul className="description  list-decimal flex flex-col text-justify mb-4 p-6">
              <li className="mb-2">
                {" "}
                By User: Users may terminate their accounts at any time.
              </li>
              <li className="mb-2">
                {" "}
                By Provider: Providers may terminate their participation at any
                time.
              </li>
              <li className="mb-2">
                {" "}
                By Platform: The healthcare ecosystem may terminate user or
                provider accounts for violations of these terms and conditions.
              </li>
            </ul>

            <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
              Governing Law and Dispute Resolution
            </h2>
            <p className="description flex w-full p-2 text-wrap text-justify ">
              These terms and conditions are governed by the laws of Jalandhar,
              Punjab, India.
            </p>

            <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
              Modifications
            </h2>
            <p className="description flex w-full p-2 text-wrap text-justify ">
              The healthcare ecosystem may modify these terms and conditions
              from time to time. Users and providers will be notified of any
              changes.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse1;
