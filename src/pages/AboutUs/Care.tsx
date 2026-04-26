import line from "../../assets/about-us/care/line.svg";
import childFirst from "../../assets/about-us/care/childFirst.webp";
import childSecond from "../../assets/about-us/care/childSecond.webp";
import childThird from "../../assets/about-us/care/childThird.webp";
import {ButtonArrow} from "../../components/ButtonArrow.tsx";
import iconBg from "../../assets/about-us/care/iconBg.svg";
import sun from "../../assets/about-us/care/sun.svg";
import {Button} from "../../components/Button.tsx";
import {useEffect, useState} from "react";

type CareImg = {
    img: string;
    alt: string;
    id: number;
}

const careImages:CareImg[] = [
    {
        img:childFirst, alt:"Comfortable, stress-free visits", id:1
    },
    {
        img:childSecond, alt:"A friendly, kid-first experience", id:2
    },
    {
        img:childThird, alt:"Positive care that builds confidence", id:3
    },
]


const Care = () => {
    const [active, setActive] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    const next = () => {
        if (screenWidth >= 1024) return;

        if (active < careImages.length - 1) {
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

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="mt-24 px-4 md:px-8">
            <div className="md:text-center md:mx-auto max-w-xl">
                <h2 className="text-h1 mb-6">
                    Whole-child,  {" "}
                    <span className="relative inline-block">
                    evidence-based care
                        <img src={line}
                             alt=""
                             aria-hidden="true"
                             className="absolute top-10 md:top-12 left-1/3 pointer-events-none scale-100 md:scale-150"
                        />
                </span>
                </h2>

                <p className="text-p1">
                    Dr. Sabrine Obbad is an ABPD board certified pediatric dentist delivering calm personalized care for each child
                </p>
            </div>

            <div className="mb-12 mt-10 -mx-4">
                <div className="overflow-hidden py-10 pl-4">
                    <div
                        className="flex md:grid md:grid-cols-3 mx-4 md:mx-8 transition-transform duration-300"
                        style={{transform: screenWidth < 768 ? `translateX(-${active * 100}%)`: "none"}}
                    >
                            {careImages.map((item, index) => (
                                <div key={item.id} className="w-full flex-shrink-0 flex justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className={` rounded-4xl  flex-shrink-0  w-full
                                                    ${index === 2 ? "rotate-[-4deg]" : "rotate-[4deg]"}
                                                    ${index !== 0 ? "-ml-1 " : ""}
                                                  `}
                                    />
                                </div>
                            ))}

                    </div>
                </div>

                <div className="flex gap-4 items-center justify-center mt-8 md:hidden">
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
                        disabled={active === careImages.length - 1}
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
                <div className="bg-[var(--color-light-yellow)] rounded-4xl px-3 py-10 md:px-8 md:py-12 mb-8
                                md:text-center flex flex-col justify-center items-center h-full"
                >
                    <div className="max-w-xl">
                        <h4 className="text-h4-dec">
                            Compassionate, calming presence
                        </h4>
                        <p className="text-p1">
                            Dr. Sabrine Obbad is more than a pediatric dentist—she’s a passionate advocate for children’s health and well-being. As the heart of Joie Pediatric Dentistry, she blends expert clinical skill with a warm, calming presence so every child feels safe, seen, and understood.
                        </p>
                    </div>
                    <div className="mt-8 max-w-xl">
                        <h4 className="text-h4-dec">
                            Whole-child, evidence-based care
                        </h4>
                        <p className="text-p1">
                            With extensive pediatric training and a gentle, individualized, evidence-based approach, Dr. Sabrine cares for the whole child—not just teeth—considering emotions, development, diet, sleep, and airway. She believes positive early visits build lifelong healthy habits, making each appointment fun, educational, and empowering for kids and parents alike.
                        </p>
                    </div>
                </div>

                <div className="bg-[var(--color-light-red)] rounded-4xl px-3 py-8 md:px-12 md:py-20
                                flex flex-col items-center justify-center h-full"
                >
                    <div className="relative inline-block text-center shrink-0">
                        <img
                            src={iconBg}
                            className="w-20 h-20 z-10 object-contain"
                            alt=""
                            aria-hidden="true"
                        />
                        <img
                            src={sun}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                       pointer-events-none w-12 h-12"
                            alt=""
                            aria-hidden="true"
                        />
                    </div>

                    <h4 className="text-h4-dec text-[var(--color-light-black)] mt-8 max-w-xl text-center">
                        Come meet Dr. Sabrine and discover what makes Joie Pediatric Dentistry a place where smiles grow with confidence.
                    </h4>

                    <Button
                        primary
                        href="https://joiepediatric.meetkasper.com/schedule-appointment"
                        external
                        className="whitespace-nowrap w-full max-w-lg mt-12"
                    >
                        Schedule an appointment
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default Care
