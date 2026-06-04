import {useSlider} from "../../shared/hooks/useSlider.ts";
import { useState, useRef, useEffect } from "react";
import {useBreakpoint} from "../../shared/hooks/useScreenWidth.ts";
import apple from "../../assets/home-page/services/apple.svg"
import birdie from "../../assets/home-page/services/birdie.svg"
import heart from "../../assets/heart.svg"
import {ButtonArrow} from "../../components/ButtonArrow.tsx";
import {Button} from "../../components/Button.tsx";
import BlobIcon from "../../components/BlobIcon.tsx";
import {useSwipeSlider} from "../../shared/hooks/useSwipeSlider.ts";

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

    const { isMobile, isDesktop } = useBreakpoint();
    const cardRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);
    const visibleCards = isMobile ? 1 : 2;
    const gap = isDesktop ? 0 : 12;
    const {active,next,prev,maxSlides,} = useSlider({blockLength: services.length,visibleCards});
    const {handleTouchStart,handleTouchEnd} = useSwipeSlider({next,prev});

    useEffect(() => {
        if (cardRef.current) {
            setSlideWidth(cardRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="mt-40 pb-16">
            <div className="content-padding">
                <h2 className="text-h1 text-center mb-4">
                    Our Pediatric Dental Services
                </h2>
                <p className="text-p1 text-center mb-10 w-full md:w-lg mx-auto">
                    We care for the whole child—not just teeth. Visits are personalized, evidence-based, and calm.
                </p>
            </div>

            <div className="overflow-hidden"
                 onTouchStart={handleTouchStart}
                 onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex lg:flex-row justify-start lg:justify-center gap-3 md:gap-6 lg:gap-0 transition-transform duration-300"
                    style={{ transform: !isDesktop ? `translateX(-${active * (slideWidth + gap)}px)` : "none"}}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            ref={index === 0 ? cardRef : undefined}
                            className={`grid grid-rows-[auto_auto_1fr] shrink-0 w-[clamp(300px,35vw,480px)]
                                         p-8 rounded-4xl ${service.backgroundColor}                         
                                        ${index === 0 ? "lg:z-10 lg:translate-x-12 ml-4 md:ml-8 lg:pr-20 lg:rounded-r-none  " : ""}
                                        ${index === 1 ? "lg:z-20 " : ""}
                                        ${index === 2 ? "lg:z-10 lg:-translate-x-12 lg:rounded-l-none lg:pl-18 " : ""}
                                      `}
                        >
                            <h3 className="text-h3 h-[90px] md:h-[140px] lg:h-[140px] xl:h-[110px]">{service.title}</h3>

                            <div className="flex flex-1 items-center justify-center mb-6 xl:mb-0">
                                <div className="relative inline-block shrink-0 py-3 xl:py-6">
                                    <BlobIcon
                                        blobClassName="w-20 h-20 xl:w-24 xl:h-24"
                                        iconClassName="w-12 h-12 xl:w-14 xl:h-14"
                                        icon={service.icon}
                                    />
                                </div>
                            </div>

                            <div>
                                <p className={`text-p1-caps text-[var(--color-black)] mb-2 md:mb-4 ${index === 0 ? "max-w-[320px] " : ""}`}>
                                    {service.heading}
                                </p>
                                <p className="text-p1 ">
                                    {service.description}
                                </p>
                            </div>
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
                    disabled={active >= maxSlides}
                />
            </div>

            <div className="flex justify-center items-center mt-10 content-padding">
                <Button
                    primary
                    href="/services"
                    external
                    className="whitespace-nowrap w-full md:w-auto "
                >
                    View All Services
                </Button>
            </div>
        </section>
    )
}
export default Services
