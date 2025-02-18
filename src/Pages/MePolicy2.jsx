import React from "react";
import logo from "../Images/logo-nav.png";
import "./privacypolicy.css";
import TableofContent from "./TableofContent";

const MePolicy = () => {
  const keyHeading = [
    { id: 1, title: "Introduction" },
    {
      id: 2,
      title: "Information We Collect About You",
    },
    { id: 3, title: "Use of Your Information" },
    {
      id: 4,
      title: "Use of Your Information",
    },
    { id: 5, title: "Disclosure of Your Information" },
    { id: 6, title: "Choices about how we use and disclose your information" },
    { id: 7, title: "Social Media Integration and Data Handling" },
    { id: 8, title: "Third-Party Data Sharing and Collaboration" },
    { id: 9, title: "ModificationUser Privacy Rights" },
    { id: 10, title: "Confidentiality" },
    { id: 11, title: "Data Security" },
    { id: 12, title: "Data Retention" },
    { id: 13, title: "Changes to Privacy Policy" },
    { id: 14, title: "Contact Us" },
  ];
  return (
    <div className="privacy-policy  w-full p-6">
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
        ME App Privacy Policy
      </h1>
      <p className="last-updated description flex justify-center">
        Last updated April 4, 2024
      </p>

      <div className="flex flex-col lg:flex-row-reverse ">
        <TableofContent sections={keyHeading} />
        <main className="flex flex-col w-full lg:w-3/4 p-6 ">
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Introduction
          </h2>
          <p className="description flex w-full p-2 text-wrap text-justify ">
            Welcome to ME App privacy policy. The application under the name of
            ME App is operated by Medoc Health IT Private Limited, a company
            incorporated under the provisions of the Companies Act, 2013 and
            having its registered office at 70, G.M Enclave, Jalandhar Punjab.
            Medoc Healthcare IT Private Limited (“Company” or “we” or “us”),
            offers this platform, ME App available on Google Play Store (“App”)
            (the Website and App collectively referred to as “Platform”) and any
            service availed by users (hereinafter referred to as “you”, “your''
            or “User”) through the Platform, conditioned upon your acceptance of
            the terms and conditions contained in Company’s Terms of Use as
            available on its Platform and this privacy policy (“Privacy
            Policy”). This policy describes the types of information we may
            collect from you or that you may provide when you visit the
            application, and our practices for collecting, using, maintaining,
            protecting and disclosing that information, when you use our
            services. Please read this policy carefully to understand our
            policies and practices regarding your information and how we will
            treat it. If you do not agree with our policies and practices, your
            choice is not to use our web application. By accessing or using this
            web application, you agree to this privacy policy. This policy may
            change from time to time. Your continued use of this Web application
            after we make changes is deemed to be acceptance of those changes,
            so please check the policy periodically for updates
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Information We Collect About You
          </h2>
          <p className=" text-[#314650] description flex w-full p-2 text-wrap text-justify ">
            We collect several types of information from and about users of our
            application, including:
          </p>
          <section className="flex w-full p-3">
            <h3 className="description text-[#2a4755] flex w-full  text-wrap text-justify ">
              Personal Information
            </h3>
            <p className="  description flex w-full  text-wrap text-justify text-sm">
              Means and includes any information that relates to a natural
              person through which an individual is identified, such as the
              name, contact details, email address, gender, age or any other
              relevant material provided by a User when they register for an
              account on the mobile application or use the services made
              available through the Platform. This may also include information
              regarding the family member, relative, partner, friend or any
              person related to the User in any way as provided by the User
              through the Platform.
            </p>
            <h3 className="description text-[#2a4755] flex w-full  text-wrap text-justify ">
              Sensitive Information{" "}
            </h3>
            <p className="  description flex w-full  text-wrap text-justify text-sm">
              Means and includes any information of a person as specified under
              Information Technology (Reasonable security practices and
              procedures and sensitive personal data or information) Rules,
              2011, including but not limited to information such as medical
              records, medical history, password; financial information such as
              bank account or credit card or debit card or any other payment
              information, physical, physiological and mental health
              information; sexual orientation; biometric information; and any
              other information provided to the Company for rendering service or
              for processing, storing under a lawful contract or otherwise.
            </p>
            <h3 className="description text-[#2a4755] flex w-full  text-wrap text-justify ">
              Technical Information{" "}
            </h3>
            <p className="  description flex w-full  text-wrap text-justify text-sm">
              <>
                a) Means and includes any information gathered through various
                technologies that may employ cookies, web beacons, or similar
                technologies to automatically record certain information from
                your device through which you use the Platform. This does not
                reveal your specific identity. This technical information may
                include your Internet Protocol (IP) address, device or browser
                type, advertising ID, Internet service provider (ISP), referring
                or exit pages, clickstream data, operating system. This data
                includes usage information and user statistics. We may request
                access or permission to track location-based information from
                your mobile device, either continuously or while you are using
                our mobile application(s), to provide certain location-based
                services. We may also request access or permission to certain
                features from your mobile device, including your mobile device's
                calendar, camera, contacts, SMS messages, storage, and other
                required features. If you wish to change our access or
                permissions, you may do so in your device's settings.
                <br />
                b) Access to the camera, images, and file upload is necessary
                for:
                <br />
                i. Storing medical records
                <br />
                ii. Updating user profile photos
                <br />
                iii. Capturing heart pulse rates
              </>
            </p>
            <h3 className="description text-[#2a4755] flex w-full  text-wrap text-justify ">
              Integrated Service Information{" "}
            </h3>
            <p className="  description flex w-full  text-wrap text-justify text-sm">
              <>
                “Integrated Service Information” means and includes any
                information obtained through access to any other social media
                platform (Facebook, Google, etc.) integrated with the Company
                (if applicable). The Company may collect this information
                already provided in your integrated service account.
                <br />
                By using the application and continuing to avail our services,
                You are providing us with your consent to use, collect, and
                disclose personal information or sensitive personal data or
                information (SPI). You may choose not to provide us with
                personal information or SPI, but if you do so, we will be unable
                to provide you access to our App or services through our
                platform. All personal information that you provide to us must
                be true, complete, and accurate, and you must notify us of any
                changes to such personal information.
              </>
            </p>{" "}
            <h3 className="description text-[#2a4755] flex w-full  text-wrap text-justify ">
              Collection of Your Information{" "}
            </h3>
            <p className="  description flex w-full  text-wrap text-justify text-sm">
              <>
                a) To enhance user experience, we kindly request permission to
                read and write files on external storage. This access is crucial
                for users to securely upload and store their medical records on
                the ME app, granting them full control over sharing these
                records with healthcare providers. Please note that only files
                explicitly uploaded by the user will be accessed; rest assured,
                no other files from the storage system will be scanned or
                utilised in any way.
                <br />
                b) We might receive information about You, such as order
                details, Your details shared with Our partners, etc., from other
                sources, including Our partners, advertisers, or third parties
                registered on the Platform, and add it to Our account
                information. The Entity, to monitor the quality of the
                consultation, may access the exchanges between the Registered
                Medical Practitioner and the Customers.
                <br />
                c) Payment Data. We may collect data necessary to process your
                payment if you make purchases, such as your payment instrument
                number and the security code associated with your payment
                instrument.
                <br />
                d) Social Media Login Data. We may provide you with the option
                to register with us using your existing social media account
                details, like your Google account (Gmail) or other social media
                account.
                <br />
                e) Application Data. If you use our application(s), we also may
                collect the following information if you choose to provide us
                with access or permission:
                <br />
                i. Geolocation Information. We may request access or permission
                to track location-based information from your mobile device,
                either continuously or while you are using our mobile
                application(s), to provide certain location-based services. If
                you wish to change our access or permissions, you may do so in
                your device's settings.
                <br />
                ii. Mobile Device Access. We may request access or permission to
                certain features from your mobile device, including your mobile
                device's calendar, camera, contacts, SMS messages, storage, and
                other required features. If you wish to change our access or
                permissions, you may do so in your device's settings.
                <br />
                iii. Push Notifications. We may request to send you push
                notifications regarding your account or certain features of the
                application(s). If you wish to opt out of receiving these types
                of communications, you may turn them off in your device's
                settings.
              </>
            </p>
          </section>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Use of Your Information
          </h2>
          <p className="description flex w-full p-2 text-wrap text-justify ">
            {" "}
            We use your information in the ME App for various purposes,
            including:
          </p>
          <ol className="description  list-decimal flex flex-col text-justify mb-4 px-6">
            <li className="mb-2">Accessing ABHA services</li>
            <li className="mb-2">
              Managing personal medical finance and health insurance
            </li>
            <li className="mb-2">
              Facilitating online appointments, consultations, and medical
              deliveries
            </li>
            <li className="mb-2">
              Checking prescriptions and diagnostic test reports
            </li>
            <li className="mb-2">Tracking health and medical history</li>
            <li className="mb-2">Enabling fitness tracking features</li>
          </ol>
          <p className="  description flex w-full  text-wrap text-justify text-sm">
            We use your information in the ME App for various purposes to
            enhance your experience and provide you with personalised services.
            This includes accessing all ABHA services, managing personal medical
            finance and health insurance, facilitating online appointments,
            consultations, and medical deliveries. Additionally, we use your
            information to check prescriptions and diagnostic test reports,
            track the health and medical history of family members and others,
            and enable fitness tracking features such as step count, appointment
            reminders, calorie count, blood pressure monitoring, heart rate
            tracking, and more. Your information is utilised solely for
            improving the app's functionality and tailoring services to meet
            your healthcare needs efficiently.
          </p>
          <p className="  description flex w-full  text-wrap text-justify text-sm">
            By using the ME App, you agree and acknowledge that all information
            collected from you, including data voluntarily provided by you,
            received from Third Party Service Providers, and automatically
            gathered, may be utilised by Medoc for the following purposes:
          </p>
          <ol className="description  list-decimal flex flex-col text-justify text-sm mb-4 px-8">
            <li className="mb-2">
              o comply with central, state or local laws that require disclosure
            </li>
            <li className="mb-2">
              to respond to law enforcement officials or to judicial orders,
              subpoenas or other process
            </li>
            <li className="mb-2">
              to avert a serious threat to health or safety
            </li>
            <li className="mb-2">
              to enable the provision of Services opted by You including
              collating all User medical records, reports and other data
            </li>
            <li className="mb-2">
              to enable the viewing of content in Your interest
            </li>
            <li className="mb-2">
              to provide better products and Services and to programmatically
              use Your data to give You contextual Services.
            </li>
            <li className="mb-2">
              to fulfil Your requests for certain Services.
            </li>
            <li className="mb-2">to contact You about Our Services.</li>
            <li className="mb-2">
              To respond to Your comments, reviews, and questions and provide
              better customer service.
            </li>
            <li className="mb-2">
              To track Your activity on Our digital platforms and personalise
              and improve Your experience.
            </li>
            <li className="mb-2">
              To understand Your preferences and to enhance, personalise, and
              customise Your experience using the application.
            </li>
            <li className="mb-2">
              To use Your information to operate, improve, and maintain our
              site, and to prevent fraud and abuse.
            </li>
            <li className="mb-2">
              To provide You with notices about Your account, including
              termination and renewal.
            </li>
            <li className="mb-2">
              To carry out our obligations and enforce our rights arising from
              any contracts entered into between You and us.
            </li>
            <li className="mb-2">
              To fulfil any other purpose for which You provide Us Personal
              Information.
            </li>
            <li className="mb-2">
              For any other purpose for which You give Us authorisation.
            </li>
          </ol>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Use of Your Information
          </h2>
          <p className="description flex w-full pb-2 text-wrap text-justify ">
            A cookie is a small file placed on the hard drive of your device.
            You may refuse to accept cookies by activating the appropriate
            setting on your browser. However, if you select this setting, you
            may be unable to access certain parts of our application. Unless you
            have adjusted your browser setting so that it will refuse cookies,
            our system will issue cookies when you direct your browser to our
            application.
          </p>
          <p className="description flex w-full pb-2 text-wrap text-justify ">
            Medoc and other third party service providers collect information
            about You using these cookies. Please note, a cookie in no way gives
            Us access to Your device. Our application uses these "cookies" to
            collect information and to improve Our service. Some cookies and
            other technologies may serve to recall Personal Information
            previously indicated by You.
          </p>
          <p className="description flex w-full pb-2 text-wrap text-justify ">
            Other websites may place their own cookies or other files on Your
            device, collect data or solicit personal information from You, for
            which We shall not be held responsible or liable. We encourage You
            to read the privacy policies of all external sites.{" "}
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Disclosure of Your Information
          </h2>
          <p className="description flex w-full pb-2 text-wrap text-justify ">
            We may disclose aggregated information about our users, and
            information that does not identify any individual without
            restriction. We may share information in specific situations
            described in this section and/or with the following categories of
            third parties. We might share your data with third-party vendors,
            service providers, contractors, or agents ('third parties') who help
            us with our services and need access to that information to do their
            job. We have contracts with these third parties to protect your
            personal information. They can only use your personal information as
            instructed by us and cannot share it with any other organisation.
            They are committed to safeguarding the data they have on our behalf
            and keeping it for the time we specify. The types of third parties
            we may share personal information with include Government Entities,
            Research and Development entities, Hospitals, and Doctors. <br />
            We may also share or transfer Your information to Any third party to
            which We transfer or sell Our assets, merge, or consolidate. Such
            parties shall have the right to continue to use the information
            (including SPI) provided to Us by You in accordance with the Terms
            and this Privacy Policy. We may disclose information to Our
            partners, affiliates, subsidiaries, group entities, investors,
            stakeholders, or potential associates in an anonymized and
            aggregated manner so that they, too, may understand how Users use
            Our Site and enable Us to create a better overall experience for
            You. We may disclose your information to specific Google Maps
            Platform APIs, including Google Maps API and Places API, to
            facilitate location-based services. Your location data is collected
            and stored on your device's cache for an enhanced user experience.
            Be assured that we prioritise the security and confidentiality of
            your data. If you wish to revoke your consent, please contact us
            using the provided contact details in this Privacy Policy. We may
            also share your personal information to enforce our terms and
            agreements or safeguard the rights, property, and safety of our
            users and others. This may involve sharing information with other
            companies, organisations, governments, or regulatory authorities for
            fraud prevention and reducing credit risks. <br />
            When you share personal information or engage in public areas within
            the Services, this information may be visible to all users and could
            be publicly accessible beyond the Services indefinitely. If you
            connect with other users on our platform or sign up via a social
            network like Google, your contacts on that social network will have
            access to your name, profile picture, and activity descriptions.
            Similarly, other users can see your activity descriptions, interact
            with you on the platform, and view your profile. We may disclose
            your information to deal with requests, enquiries, complaints or
            disputes and other customer care related activities including those
            arising out of the Users’ request of the Services and all other
            general administrative and business purposes. We may also disclose
            your personal information to comply with any court order, law, or
            legal process, including to respond to any government or regulatory
            request. <br />
            We may disclose your personal information to enforce or apply our
            Terms of use. <br />
            We may disclose your information, when Medoc, in its sole
            discretion, deems it necessary in order to protect its rights or the
            rights of others; or for any other purpose disclosed by Us when You
            provide the Personal Information. <br />
            We may also use Your personal data or contact information such as,
            Your name, address, postcode, gender, occupation, age, date of
            birth, email address, telephone number, company name, job title, and
            department only when Company requires it for the purposes of: <br />
          </p>
          <ul className="description flex flex-col text-justify text-sm mb-4 px-8">
            <li className="mb-2">
              i. processing Your application to use our Services and to provide
              You with the requested Services through mobile app;
            </li>
            <li className="mb-2">
              ii. dealing with any complaint, queries or problems reported by
              You regarding the Services offered by the Company;
            </li>
            <li className="mb-2">
              iii. notifying You of changes in its Services and help improve the
              Services Company provide to you.
            </li>
          </ul>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Choices about how we use and disclose your information
          </h2>
          <p className=" text-[#314650] description flex w-full p-2 text-wrap text-justify ">
            We strive to provide you with choices regarding the personal
            information you provide to us. We have created mechanisms to provide
            you with the following control over your information:
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) You can set your browser to refuse all or some browser cookies,
            or to alert you when cookies are being sent. If you disable or
            refuse cookies, please note that some parts of this site may then be
            inaccessible or not function properly. <br />
            b) If you do not wish to have your email address/contact information
            used by us to promote our own or third parties' products or
            services, you can opt-out by checking the relevant box located on
            the form on which we collect your data or at any other time by
            logging into the application and adjusting your user preferences in
            your account profile by checking or unchecking the relevant boxes or
            by sending us an email stating your request. If we have sent you a
            promotional email, you may send us a return email asking to be
            omitted from future email distributions.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Social Media Integration and Data Handling
          </h2>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) Our Services provide you with the option to register and sign in
            using your third-party social media account credentials (such as
            your Google logins). Should you opt for this method, we will receive
            specific profile details about you from your social media provider.
            The profile data we obtain may vary based on the social media
            provider involved but typically includes your name, email address,
            friends list, profile picture, and other information you have chosen
            to share publicly on the social media platform.
            <br /> b) The information received will be utilised solely for
            account authentication or as explicitly communicated to you
            concerning the relevant Services. It is important to understand that
            we do not oversee or bear responsibility for how your third-party
            social media provider utilises your personal information. We suggest
            reviewing their privacy notice to comprehend how they gather,
            utilise, and disclose your personal data, as well as how you can
            manage your privacy settings on their websites and applications. We
            shall not use or transfer any data or information received from the
            integration of the email addresses with the account on the Platform
            to third parties for any purpose other than as explicitly authorised
            by the User.
            <br /> c) You can choose to de-link your Gmail account with the
            application at any time and/ or you can delete your information by
            writing an email at the address provided in this Privacy Policy.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Third-Party Data Sharing and Collaboration
          </h2>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) We utilise OTPLess for authentication and share data with the
            Government of India's Ayushman Bharat Digital Mission, such as
            demographic details, health records and relevant medical data for
            seamless service delivery. By using this platform, you consent to
            the sharing of necessary data with Ayushman Bharat Digital Mission
            for the purpose of healthcare facilitation and improvement.
            <br />
            b) We inform you that OTPLess doesn't have access to all sensitive
            information but only the minimum scope needed for authentication of
            users. We share non-personal information that cannot be used to
            identify an individual, with Government Entities, Research and
            Development entities, Hospitals, and Doctors. Your privacy and data
            security are of utmost importance to us, and we adhere to all
            applicable data protection laws to safeguard your information.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            User Privacy Rights
          </h2>
          <h5 className=" text-[#314650] description flex w-full p-2 text-wrap text-justify ">
            Withdrawing your consent
          </h5>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            If we are relying on your consent to process your personal
            information, whether express or implied, you have the right to
            withdraw your consent at any time. To do so, simply contact us using
            the details provided in this policy under the Contact Us section.
            Please be aware that withdrawing your consent will not affect the
            legality of processing done before the withdrawal. Additionally,
            where permitted by law, it will not impact the processing of your
            personal information carried out based on lawful grounds other than
            consent.
          </p>
          <h5 className=" text-[#314650] description flex w-full p-2 text-wrap text-justify ">
            Opting out of marketing and promotional communication
          </h5>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            You have the option to unsubscribe from our marketing and
            promotional communications sent via email at any time by clicking on
            the unsubscribe link in the emails you receive. This action will
            remove you from the marketing lists. However, we may still contact
            you for essential service-related messages, such as account
            administration, service requests, or other non-marketing purposes.
          </p>
          <h5 className=" text-[#314650] description flex w-full p-2 text-wrap text-justify ">
            Accessing and correcting your information
          </h5>
          <p className="description flex flex-col w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a)If you would at any time like to review or change the information
            in your account or terminate your account, you can: <br />
            <ul className="description flex flex-col text-justify text-sm mb-4 px-8">
              <li className="mb-2">
                i) Log in to your account settings and update your user account.
              </li>
              <li className="mb-2">
                ii) Contact us using the contact information provided.
              </li>
            </ul>
            b) You may also send us an email at the address provided under the
            Contact Us section to request access to, correct or delete any
            personal information that you have provided to us. We cannot delete
            your personal information except by also deleting your user account.
            We may not accommodate a request to change information if we believe
            the change would violate any law or legal requirement or cause the
            information to be incorrect.
            <br /> c) Upon your request to terminate your account, we will
            deactivate or delete your account and information from our active
            databases. However, we may retain some information in our files to
            prevent fraud, troubleshoot problems, assist with any
            investigations, enforce our legal terms, and/or comply with
            applicable legal requirements.
            <br /> d) If a User has inadvertently submitted any Personal
            Information prior to reading the Privacy Policy and Terms of Use,
            and such User does not agree with the manner in which such
            information is collected, stored or used, then such User can ask
            Medoc, by sending an email at the address provided under the Contact
            Us section, containing the rectification required, whether Medoc is
            keeping Personal Information about such User.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Confidentiality
          </h2>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) You further acknowledge that the application may contain
            information which is designated confidential by Us and that You
            shall not disclose such information without Our prior written
            consent. Your information is regarded as confidential and therefore,
            will not be divulged to any third party, unless if legally required
            to do so to the appropriate authorities or shared as per this
            Privacy Policy or Terms of Use.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            b) We will not sell Your Personal Information to any third party or
            use Your email address for unsolicited mail. Any emails sent by Us
            will only be in connection with the provision of agreed Services,
            and You retain sole discretion to seek for discontinuation of such
            communications at any point of time.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Data Security
          </h2>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) We have implemented appropriate and reasonable technical and
            organisational security measures designed to protect the security of
            any personal information we process. Despite our stringent
            safeguards and diligent efforts to secure your information, it is
            important to acknowledge that no electronic transmission over the
            Internet or storage technology can provide an absolute guarantee of
            100% security. Therefore, we cannot explicitly promise or ensure
            that malicious entities such as hackers, cybercriminals, or
            unauthorised third parties will not circumvent our security measures
            to illicitly collect, access, steal, or alter your information.
            While we are dedicated to protecting your personal data to the best
            of our abilities, the transmission of personal information to and
            from our Services inherently carries some level of risk. It is
            advisable that you access our Services only within a secure
            environment.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            b) We maintain electronic, physical, and procedural safeguards to
            protect the collection, storage, and disclosure of personal
            information, including Sensitive Personal Data or Information
            (SPDI). Our security protocols may require occasional verification
            of your identity before disclosing personal data. To protect your
            privacy and security, we take steps to verify your identity before
            granting you account access or making corrections to your
            information. You should create and maintain a strong password to
            help ensure the security of your account.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            c) Access to personal information is limited to our employees and
            agents who require the data for processing and are bound by strict
            contractual confidentiality obligations. Failure to comply with
            these obligations may result in disciplinary action or termination
            of their relationship with us.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            d) Our employees and administrators are not privy to your password
            or account details on the Site or Application. It is crucial for you
            to safeguard your account against unauthorised access by securing
            your password and mobile phone, as outlined in the 'User Account,
            Password, and Security' section of the Terms. We disclaim any
            liability for unauthorised use of your account and password.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            e) If you suspect any unauthorised use of your account, it is
            essential to notify us promptly by sending an email using the
            contact details specified in the contact section. You will be held
            liable to indemnify us for any losses we incur due to such
            unauthorised use of your account or password.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            f) We reserve the right to verify and authenticate your identity and
            personal information to ensure the accurate delivery of products and
            services. Access to, or the correction, updating, or deletion of
            your personal information or SPDI may be restricted or denied by us
            if it infringes on another person's rights or is not permitted by
            applicable law. Should you choose to update your personal
            information or sensitive personal data and information (SPDI) in a
            manner that is not verifiable by us or results in incorrect
            information, we may be unable to grant you access to our Site or
            Services as outlined in the Terms. Such modifications may be
            interpreted as the user opting to discontinue their access to our
            Site or Services.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            g) We assume no liability or responsibility for disclosure of Your
            Personal Information due to errors in transmission, unauthorised
            third-party access, or other causes beyond our control. We have
            undertaken reasonable measures to protect Your rights of privacy
            with respect to Your usage of the Portal controlled by Us and
            Services provided herein. However, We shall not be liable for any
            unauthorised or unlawful disclosures of Your Personal Information
            made by any third parties who are not subject to Our control.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Data Retention
          </h2>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice unless a
            more extended retention period is required or permitted by law (such
            as tax, accounting, or other legal requirements). No purpose in this
            notice will require us to keep your personal information for longer
            than 30 (Thirty) days past the termination of the user's account.
          </p>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            b) When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymise such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Changes to Privacy Policy
          </h2>

          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            a) We may update this privacy notice from time to time. The updated
            version will be indicated by an updated 'Revised' date, and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information. If a User uses the Services or accesses the
            Website after a notice of changes has been sent to such User or
            published on the Website, such User hereby provides his/her/its
            consent to the changed terms.
          </p>
          <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2 ">
            Contact Us
          </h2>
          <p className="description flex w-full pb-2 pl-2 text-wrap text-justify text-md ">
            For questions or concerns about this policy, please contact our
            Grievance Officer:
            <br /> Jaysheel Bhatt <br />
            Email: dpo@medochealth.in <br />
            Phone: +91 6300664255 <br />
            For other inquiries, contact us at data@medochealth.in.
          </p>
        </main>
      </div>
    </div>
  );
};

export default MePolicy;
