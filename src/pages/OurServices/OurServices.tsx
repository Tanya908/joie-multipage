import Hero from "./Hero.tsx";
import ServiceSection from "./ServiceSection.tsx";
import {preventiveCare} from "./data/preventive-care.ts";


const OurServices = () => {
    return (
        <>
            <Hero/>
            <ServiceSection {...preventiveCare} />
        </>
    )
}
export default OurServices
