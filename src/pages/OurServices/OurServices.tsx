import Hero from "./Hero.tsx";
import ServiceSection from "./ServiceSection.tsx";
import {preventiveCare} from "./data/preventive-care.ts";
import {invasive} from "./data/invasive.ts";


const OurServices = () => {
    return (
        <>
            <Hero/>
            <ServiceSection {...preventiveCare} />
            <ServiceSection {...invasive} />
        </>
    )
}
export default OurServices
