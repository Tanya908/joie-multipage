import Hero from "./Hero.tsx";
import ServiceSection from "./ServiceSection.tsx";

import { preventiveCare } from "./data/preventive-care.ts";
import { invasive } from "./data/invasive.ts";
import { restorative } from "./data/restorative.ts";
import { oralHealth } from "./data/oral-health.ts";
import { special } from "./data/special.ts";

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

            <ServiceSection {...special} />
        </>
    );
};

export default OurServices;