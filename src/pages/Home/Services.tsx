import apple from "../../assets/home-page/services/apple.svg"
import birdie from "../../assets/home-page/services/birdie.svg"
import heart from "../../assets/home-page/services/heart.svg"
import circle from "../../assets/home-page/services/circle.svg"
import {ButtonArrow} from "../../components/ButtonArrow.tsx";
import {useEffect, useState} from "react";

type ServiceProps = {
    backgroundColor: string;
    title: string;
    heading: string;
    description: string;
    icon: string;
    id: number;
}

const services: ServiceProps[] = [
    {
        backgroundColor: "bg-[var(--color-light-blue)]",
        title:"Thorough, Personalized Exams",
        heading:"Because no two kids grow the same",
        description:"When fillings, extractions, or urgent care are needed, we stay gentle. From common cavities to dental trauma, we help kids recover comfortably and confidently.",
        icon:heart,
        id:1
    },{
        backgroundColor: "bg-[var(--color-light-red)]",
        title:"Conservative, Kid-Friendly Treatments",
        heading:"Less is often more",
        description:"Prevention first, least-invasive always. With modern options like silver diamine fluoride (SDF), early cavities can often be treated without drills or needles—making visits calmer for everyone.",
        icon:birdie,
        id:2
    },{
        backgroundColor: "bg-[var(--color-light-yellow)]",
        title:"Restorative and Emergency Care ",
        heading:"Still kind. Still compassionate",
        description:"When fillings, extractions, or urgent care are needed, we stay gentle. From common cavities to dental trauma, we help kids recover comfortably and confidently.",
        icon:apple,
        id:3
    },
]

const Services = () => {

    const [active, setActive] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const next = () => {
        if (screenWidth >= 1024) return;

        if (active < services.length - 1) {
            setActive(prev => prev + 1);
        }
    };

    const prev = () => {
        if (screenWidth >= 1024) return;

        if (active > 0) {
            setActive(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gap = screenWidth >= 1024 ? 0 : 12;
    const cardWidth = screenWidth >= 1024 ? 480 :
        screenWidth >= 768 ? 400 : 320;

    return (
        <section className="mt-40 pb-16">
            <div className="px-4 md:px-8">
                <h2 className="text-h1 text-center mb-4">
                    Our Pediatric Dental Services
                </h2>
                <p className="text-p1 text-center mb-10 w-full md:w-lg mx-auto">
                    We care for the whole child—not just teeth. Visits are personalized, evidence-based, and calm.
                </p>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex gap-3 lg:gap-0 mx-4 md:mx-8 transition-transform duration-300"
                    style={{
                        transform: screenWidth < 1024
                            ? `translateX(-${active * (cardWidth + gap)}px)` : "none"
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col shrink-0 w-[320px] md:w-[400px] h-[520px] lg:w-[clamp(280px,32vw,560px)] lg:h-[clamp(580px,35vw,400px)] 
                                        rounded-4xl py-8 px-4 md:px-10 relative overflow-hidden ${service.backgroundColor}                         
                                        ${index === 0 ? "lg:z-10 lg:translate-x-10" : ""}
                                        ${index === 1 ? "lg:z-20 lg:pr-10" : ""}
                                        ${index === 2 ? "lg:z-10  lg:-translate-x-6" : ""}
                                      `}
                        >
                            <h3 className="text-h3">{service.title}</h3>

                            <div className="flex flex-1 items-center justify-center my-6 xl:my-0">
                                <div className="relative inline-block shrink-0">
                                    <img
                                        src={circle}
                                        className="w-20 h-20 xl:w-24 xl:h-24 z-10 object-contain"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                    <img
                                        src={service.icon}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                   pointer-events-none w-12 h-12 xl:w-14 xl:h-14"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                                <p className="text-p1-caps text-[var(--color-black)] mb-2 md:mb-4">
                                    {service.heading}
                                </p>

                                <p className="text-p1">
                                    {service.description}
                                </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 items-center justify-center mt-8 lg:hidden">
                <ButtonArrow
                    variant="secondary"
                    direction="left"
                    onClick={prev}
                    disabled={active === 0}
                />

                <ButtonArrow
                    variant="secondary"
                    direction="right"
                    onClick={next}
                    disabled={active === services.length - 1}
                />
            </div>
        </section>
    )
}
export default Services
