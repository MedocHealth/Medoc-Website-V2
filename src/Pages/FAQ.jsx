import React, { useEffect } from "react";
import "./privacypolicy.css";
import "./faq.css";

const FAQ = () => {
  useEffect(() => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });

    return () => {
      faqs.forEach((faq) => {
        faq.removeEventListener("click", () => {
          faq.classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <section className="flex ">
      <h1 className="sub-heading flex m-2 justify-center text-10xl ">FAQs</h1>

      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            1. What is Medoc+?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            Medoc+ is a comprehensive healthcare management solution for nurses,
            paramedics, and pharmaceutical professionals. It simplifies nursing
            tasks, medication orders, inventory management, and emergency
            response protocols.
          </p>
        </div>
      </div>

      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            2. How can Medoc+ help nurses?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            The Nursing Module helps nurses manage tasks and patient data
            efficiently with customizable settings for a smooth workflow.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            3. What makes Medoc+ unique?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            Medoc+ combines efficiency, customization, and rapid response,
            streamlining healthcare management and prioritizing health.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            4. What is the ME App?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            The ME App is your all-in-one healthcare companion, designed to
            simplify your medical journey and help you live your healthiest
            life.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            5. What are the key features of the ME App?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            Key features include appointment scheduling, prescription
            management, secure chat with healthcare professionals, access to lab
            reports, and financial services for managing healthcare expenses.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            6. How does the ME App integrate with Ayushman Bharat?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            The ME App integrates seamlessly with the Ayushman Bharat scheme,
            offering insurance coverage, access to wellness centers, and
            essential healthcare services.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            7. What is DocAssist?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            DocAssist is a digital tool that simplifies traditional medical
            tasks with efficient digital systems, allowing doctors to focus more
            on patient care.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            8. What are the key features of DocAssist?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            Key features include smart prescriptions, appointment management,
            scheduling, and hospital connectivity.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            9. How do smart prescriptions work in DocAssist?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            {" "}
            Smart prescriptions use AI to manage prescriptions, allergies, and
            genetic markers, allowing customization of medication plans with
            MedPad templates.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            10. What is the MED Card?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            The MED Card provides full healthcare access using advanced QR and
            NFC technology, even without a smartphone.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            11. How does the MED Card provide seamless healthcare access?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            The MED Card enables hassle-free healthcare services with a simple
            scan or tap.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="question">
          <h3 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2">
            12. What technology does the MED Card use?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p className="description flex w-full p-2 text-wrap text-justify">
            It uses innovative QR and NFC technology to manage healthcare needs
            effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
