import Hero from "./Hero.tsx";
import ServiceSection from "./ServiceSection.tsx";

import { preventiveCare } from "./data/preventive-care.ts";
import { invasive } from "./data/invasive.ts";
import { restorative } from "./data/restorative.ts";
import { oralHealth } from "./data/oral-health.ts";
import { special } from "./data/special.ts";
import Needs from "./Needs.tsx";
import LetsConnect from "../../components/LetsConnect.tsx";

const serviceSections = [
    preventiveCare,
    invasive,
    restorative,
    oralHealth,
];

const OurServices = () => {
    return (
        <>
            <Hero />

            {serviceSections.map((section, index) => (
                <ServiceSection key={index} {...section} />
            ))}

            <Needs/>
            <ServiceSection {...special} />
            <LetsConnect
                title="Want to talk through your child’s needs? We’re here to help"
                description="We can’t wait to meet you and your child—whether it’s a first visit or a new dental home, we’ll make it easy, transparent, and joyful."
            />
        </>
    );
};

export default OurServices;