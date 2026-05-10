import Hero from "./Hero.tsx";
import ServiceSection from "./ServiceSection.tsx";
import {preventiveCare} from "./data/preventive-care.ts";
import {invasive} from "./data/invasive.ts";
import {restorative} from "./data/restorative.ts";


const OurServices = () => {
    return (
        <>
            <Hero/>
            <ServiceSection {...preventiveCare} />
            <ServiceSection {...invasive} />
            <ServiceSection {...restorative} />
        </>
    )
}
export default OurServices
