import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer/Footer";
import Vitals from "./Components/Vitals/Vitals";
function Landing (){
    return (
   <div className="pt-4 pl-4 pr-4">
    <Navbar/>
    <Vitals/>
    <Footer/>
   </div>
    )
}
export default Landing;