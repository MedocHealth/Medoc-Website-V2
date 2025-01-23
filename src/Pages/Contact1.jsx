import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  Instagram,
  Facebook,
  YouTube,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import logo from "../Images/logo-nav.png";
import "./privacypolicy.css";

const Contact1 = () => {
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
        CONTACT
      </h1>
      <div className="flex flex-col justify-between items-center ">
        <main className="flex flex-col w-full lg:w-3/4 p-6 ">
          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl pt-2 ">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="description flex w-full p-2 text-wrap text-justify ">
            {" "}
            If you have questions or comments about this notice, you may contact
            us by email at contact@medochealth.in, by phone at +91 88377 13388,
            or contact us by post at:
          </p>
          <address className="description flex flex-col text-justify mb-4 pt-0 p-2">
            Medoc Health IT Private Limited
            <br />
            14, 9th Floor, TDI Business Center
            <br />
            Mohali, Punjab
            <br />
            India
          </address>
          <h2 className="sub-heading flex justify-right text-2xl lg:text-3xl pt-2 ">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </h2>
          <p className="description flex w-full p-2 text-wrap text-justify ">
            {" "}
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it according to the provisions
            stated in the privacy policy. To request, review, update, or delete
            your personal information, please contact us by mailing to
            contact@medochealth.in.
          </p>
          <Box className="social-media">
            <IconButton
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "#2a4755" },
              }}
              aria-label="Instagram"
              href="https://www.instagram.com/medochealth.in"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "#2a4755" },
              }}
              aria-label="Facebook"
              href="https://www.facebook.com/medochealth"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "#2a4755" },
              }}
              aria-label="YouTube"
              href="https://www.youtube.com/medochealth"
            >
              <YouTube />
            </IconButton>
            <IconButton
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "#2a4755" },
              }}
              aria-label="Twitter"
              href="https://www.twitter.com/medochealth"
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "#2a4755" },
              }}
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/medochealth"
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Contact1;
