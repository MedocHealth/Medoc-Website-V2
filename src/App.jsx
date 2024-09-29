import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import './App.css'
import MePolicy from "./Pages/MePolicy";
import PrivacyPolicy from './Pages/PrivacyPolicy'; 
import Termsofuse from './Pages/Termsofuse';
import Refundpolicy from './Pages/Refundpolicy';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
function App() {
  

  return (
    <div>
     <Router>
     <Routes>
     <Route path="/" element={<Landing/>} />
     <Route path="/mePolicy" element={<MePolicy/>} />
     <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
     <Route path="/termsofuse" element={<Termsofuse/>} />
     <Route path="/refundpolicy" element={<Refundpolicy/>} />
     <Route path="/faq" element={<FAQ/>} />
     <Route path="/contact" element={<Contact/>} />
     </Routes>
     </Router>

    </div>
  )
}

export default App;
