import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import "./App.css";
import MePolicy from "./Pages/MePolicy2";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Termsofuse from "./Pages/TermsOfUse1";
import Refundpolicy from "./Pages/Refundpolicy";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact1";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mePolicy" element={<MePolicy />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<Termsofuse />} />
          <Route path="/refundpolicy" element={<Refundpolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
