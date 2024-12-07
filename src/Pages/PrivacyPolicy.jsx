import React from "react";
import logo from "../Images/logo-nav.png";
import "./privacypolicy.css";
import TableofContent from "./TableofContent";

const PrivacyPolicy = () => {
  const keyHeading = [
    { id: 1, title: "WHAT INFORMATION DO WE COLLECT?" },
    {
      id: 2,
      title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    },
    { id: 3, title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" },
    {
      id: 4,
      title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
    },
    { id: 5, title: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
    { id: 6, title: "HOW DO WE KEEP YOUR INFORMATION SAFE?" },
    { id: 7, title: "WHAT ARE YOUR PRIVACY RIGHTS?" },
    { id: 8, title: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
    { id: 9, title: "CHILDREN'S PRIVACY" },
    { id: 10, title: "DO WE MAKE UPDATES TO THIS NOTICE?" },
    { id: 11, title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
    { id: 12, title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
  ];
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
        PRIVACY POLICY
      </h1>
      <p className="last-updated description flex justify-center">
        Last updated April 4, 2024
      </p>

      <div className="flex flex-col lg:flex-row-reverse ">
        <TableofContent sections={keyHeading} />
        <main className="flex flex-col w-full lg:w-3/4 p-6 ">
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            PRIVACY POLICY
          </h2>
          <p className="description flex w-full p-2 text-wrap text-justify ">
            Medoc Health IT Private Limited is focused on simplifying medical
            finances and bringing family medicine together by making the
            healthcare industry more accessible to people across the country.
            Medoc aims to be the single destination for all your healthcare
            needs. Medoc Health IT Private Limited is the author and publisher
            of www.medochealth.in and the products and services provided by
            Medoc Health IT Private Limited.
          </p>

          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            GENERAL TERMS
          </h2>
          <ol className="description  list-decimal flex flex-col text-justify mb-4 p-6">
            <li className="mb-4">
              By clicking on 'Continue' during the sign-up process, by accessing
              or using the Platform or by using the Service, or by otherwise
              giving Us Your information, You confirm that You can enter into a
              legally binding contract under Indian law, in particular, the
              Indian Contract Act, 1872, and have read, understood, agreed, and
              consented to the practices and policies outlined in this Privacy
              Policy and agree to be bound by the Privacy Policy.
            </li>
            <li className="mb-4">
              You hereby consent to Our collection, use, sharing, and disclosure
              of Your information as described in this Privacy Policy. We
              reserve the right to change, modify, add or delete portions of the
              terms of this Privacy Policy, at our sole discretion, at any time.
            </li>
            <li className="mb-4">
              If You are accessing or using Services on the Site from an
              overseas location, You do so at your own risk and shall be solely
              liable for compliance with any applicable local laws.
            </li>
            <li className="mb-4">
              If you do not agree with any of the terms and conditions of this
              Privacy Policy, please do not proceed with using this Site or any
              Services.
            </li>
          </ol>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            and the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul className="description flex flex-col text-justify  pr-2 pl-2">
            <li>- Names</li>
            <li>- Email addresses</li>
            <li>- Phone numbers</li>
            <li>- Mailing addresses</li>
            <li>- Usernames</li>
            <li>- Passwords</li>
          </ul>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            2. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            We may share information in specific situations described in this
            section and/or with the following categories of third parties.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Google logins).
            Where you choose to do this, we will receive certain profile
            information about you from your social media provider.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice unless a
            more extended retention period is required or permitted by law (such
            as tax, accounting, or other legal requirements).
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            We have implemented appropriate and reasonable technical and
            organisational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            7. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            You have the right to withdraw your consent, opt out of marketing
            communications, and review or change the information in your
            account. You can contact us to exercise these rights.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            8. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ('DNT') feature or setting. At
            this stage, no uniform technology standard for recognising and
            implementing DNT signals has been finalised.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            9. CHILDREN'S PRIVACY
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            Our services are intended for individuals who can form legally
            binding contracts under the Indian Contract Act of 1872. If you are
            under 18 years old, you may only use our services with the express
            permission and under the direct supervision of a parent or legal
            guardian.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            10. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated 'Revised' date, and the
            updated version will be effective as soon as it is accessible.
          </p>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            If you have questions or comments about this notice, you may contact
            our Data Protection Officer (DPO), Jaysheel Bhatt, by email at
            dpo@medochealth.in, by phone at +91 6300664255, or contact us by
            post at:
          </p>
          <address className="description flex flex-col text-justify mb-4 pt-0 p-2">
            Medoc Health IT Private Limited
            <br />
            Ansh Kumar Mishra
            <br />
            Chief Operations Officer
            <br />
            70, GM Enclave
            <br />
            Jalandhar, Punjab 144009
            <br />
            India
          </address>

          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl  pt-2 ">
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p className="description flex flex-col text-justify  pr-2 pl-2">
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it according to the provisions
            stated in the privacy policy. To request, review, update, or delete
            your personal information, please contact us by mailing to
            data@medochealth.in.
          </p>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
