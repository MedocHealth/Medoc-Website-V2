import React, { useRef } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer/Footer";
import Intro from "./Components/Intro";
import OurProduct from "./Components/OurProduct";
import AboutMed from "./Components/AboutMed";
import MedEcosystem from "./Components/MedEcosystem";
import Vitals from "./Components/Vitals/Vitals";
import Form from "./Components/Form/Form";
import Header from "./Components/What-Do-We-Do/Header";
import Main_Code from "./Components/What-Do-We-Do/Main_Code";
import Foot_What from "./Components/What-Do-We-Do/Foot_What";
import Video from "./Components/Video/Video";
import Forms from './Components/Forms';
function Landing() {
  const videoRef = useRef(null); // Create a ref for the Video component
  const demoRef = useRef(null);
  const homeRef = useRef(null);
  // Function to scroll to the Video component
  const scrollToVideo = () => {
      if (videoRef.current) {
          videoRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };
  const scrollToDemo = () => {
    if (demoRef.current) {
        demoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
};
const scrollToHome = ()=>{
  if(homeRef.current){
    homeRef.current.scrollIntoView({behavior: 'smooth'});
  }
}
  return (
    <div className="pt-4 pl-4 pr-4">
      <Navbar scrollToHome={scrollToHome}/>
      <div >
      <Intro scrollToDemo={scrollToDemo} ref = {homeRef}/>
      </div>
     
      <OurProduct />
      <AboutMed />
      <MedEcosystem scrollToVideo={scrollToVideo}/>
      <Vitals />
      <Header />
      <Main_Code />
      <Foot_What />
      <div className="pt-4" ref={videoRef}>
      <Video/>
      </div>
      <div ref={demoRef}>
      {/* <Form /> */}
      <Forms/>
      </div>
      <Footer />
    </div>
  );
}
export default Landing;
