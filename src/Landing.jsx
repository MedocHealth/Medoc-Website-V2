import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer/Footer";
import Intro from "./Components/Intro";
import OurProduct from "./Components/OurProduct";
import AboutMed from "./Components/AboutMed";
import MedEcosystem from "./Components/MedEcosystem";
import Vitals from "./Components/Vitals/Vitals";
function Landing() {
  return (
    <div className="pt-4 pl-4 pr-4">
      <Navbar />
      <Intro />
      <OurProduct />
      <AboutMed />
      <MedEcosystem />

      <Vitals />
      <Footer />
    </div>
  );
}
export default Landing;
