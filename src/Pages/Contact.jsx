import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Instagram, Facebook, YouTube, Twitter, LinkedIn } from '@mui/icons-material';
import logo from '../Images/logo-nav.png';
import './privacypolicy.css';

function Contact() {
  return (
    <Container maxWidth="lg" className="privacy-policy">
      <Paper elevation={3} className="content-paper">
        <Box className="header">
          <img src={logo} width="173" height="40" alt="footer-logo" className="logo" />
          <Typography variant="body1" className="tagline">
            The complete healthcare ecosystem building towards better accessibility
            to healthcare and supporting you with medical finances and family medicine.
          </Typography>
        </Box>

        <Typography variant="h4" component="h1" className="main-title">
          CONTACT
        </Typography>
<br></br>
        {/* <Typography variant="body2" className="last-updated">
          Last updated April 4, 2024
        </Typography> */}

        {/* ... (rest of the content remains the same) ... */}

        <Typography variant="h5" component="h2" className="section-title">
           HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </Typography>

        <Typography variant="body1" className="policy-text">
          If you have questions or comments about this notice, you may contact us by email at contact@medochealth.in, 
          by phone at +91 88377 13388, or contact us by post at:
        </Typography>
<br>
    
</br>
        <Typography variant="body1" className="policy-text">
          Medoc Health IT Private Limited<br />
          14, 9th Floor, TDI Business Center<br />
          Mohali, Punjab<br />
          India
        </Typography>
<br></br>
        <Typography variant="h5" component="h2" className="section-title">
           HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </Typography>

        <Typography variant="body1" className="policy-text">
          Based on the applicable laws of your country, you may have the right to request access to the
          personal information we collect from you, change that information, or delete it according to the
          provisions stated in the privacy policy. To request, review, update, or delete your personal
          information, please contact us by mailing to contact@medochealth.in.
        </Typography>
<br></br>
        <Box className="social-media">
          <IconButton aria-label="Instagram" href="https://www.instagram.com/medochealth">
            <Instagram />
          </IconButton>
          <IconButton aria-label="Facebook" href="https://www.facebook.com/medochealth">
            <Facebook />
          </IconButton>
          <IconButton aria-label="YouTube" href="https://www.youtube.com/medochealth">
            <YouTube />
          </IconButton>
          <IconButton aria-label="Twitter" href="https://www.twitter.com/medochealth">
            <Twitter />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/company/medochealth">
            <LinkedIn />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;