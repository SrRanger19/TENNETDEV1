import Header from "../components/Header";
import Description from "../components/Description";
import Promotion from "../components/Promotion";
import Rates from "../components/Rates";
import Benefits from "../components/Benefits";
import AboutUs from "../components/AboutUs";
import Contacts from "../components/Contacts";

function Landing () {
    return(
        <div className="grid grid-cols-12 justify-center items-center absolute min-h-screen w-full bg-[#b4a291]">
            <div className="w-11/12 min-h-screen grid grid-cols-12 bg-[#d6c1ab] col-start-2 col-span-12">
                <Header/>
                <Description/>
                <Promotion/>
                <Rates/>
                <Benefits/>
                <AboutUs/>
                <Contacts/>
            </div>
        </div>
    )
}

export default Landing;