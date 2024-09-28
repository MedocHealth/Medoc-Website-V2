import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer/Footer";
import Vitals from "./Components/Vitals/Vitals";
import Header from "./Components/What-Do-We-Do/Header";
import Main_Code from "./Components/What-Do-We-Do/Main_Code";
import Foot_What from "./Components/What-Do-We-Do/Foot_What";
function Landing (){
    return (
   <div className="pt-4 pl-4 pr-4">
    <Navbar/>
<Header/>
<Main_Code/>
{/* <Footer_What_Do_We_DO/> */}
    <Vitals/>
<Foot_What/>
    <Footer/>
   </div>
    )
}
export default Landing;