import Background from "../../assets/home-page/background.svg"
import textLine from "../../assets/home-page/textLine.svg";
import ShapeImg from "../../components/ShapeImg.tsx";

import visit from "../../assets/home-page/visit.webp";
import blob from "../../assets/home-page/blob.svg";

import buttonLeft from "../../assets/home-page/visit-cards/buttonLeft.svg";
import buttonRight from "../../assets/home-page/visit-cards/buttonRight.svg";

import blobFirst from "../../assets/home-page/visit-cards/blobFirst.svg";
import blobSecond from "../../assets/home-page/visit-cards/blobSecond.svg";
import blobThird from "../../assets/home-page/visit-cards/blobThird.svg";
import blobFourth from "../../assets/home-page/visit-cards/blobFourth.svg";
import ballon from "../../assets/home-page/visit-cards/ballon.svg";
import child from "../../assets/home-page/visit-cards/child.svg";
import airBallon from "../../assets/home-page/visit-cards/airBallon.svg";
import sun from "../../assets/home-page/visit-cards/Sun.svg";

import {useState} from "react";

type VisitProps = {
    background: string;
    icon: string;
    heading:string;
    description: string;
    id: number;
};

const visits:VisitProps[] = [
    {   background:blobFirst,
        icon:ballon,
        heading:"Mission: Lifelong Healthy Habits",
        description:"We help kids build lifelong healthy habits through education, prevention, and care tailored to each child.",
        id:1
    },
    {   background:blobSecond,
        icon:airBallon,
        heading:"A New Kind of Pediatric Care",
        description:"Experience pediatric dentistry that puts comfort, health, and happiness first—every visit, every child.",
        id:2
    },
    {   background:blobThird,
        icon:child,
        heading:"Gentle Care, Joyful Visits",
        description:"Gentle care meets joyful visits in Ramsey, NJ. Our compassionate team looks beyond routine checkups to address root causes.",
        id:3
    },
    {   background:blobFourth,
        icon:sun,
        heading:"Now Welcoming New Patients",
        description:"Now welcoming new patients in Ramsey, NJ—schedule a visit designed around your child.",
        id:4
    },
]

const Visit = () => {

    const [active, setActive] = useState(0);
    const next = () => setActive((prev) => (prev + 1) % visits.length);
    const prev = () => setActive((prev) => (prev - 1 + visits.length) % visits.length);

    return (
        <section className="relative py-32 md:py-40">
            <img
                src={Background}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 object-cover min-w-[360px] md:w-full"
            />

           <div className="mb-6">
               <div className="relative text-center mx-auto w-fit">
                   <h2 className="text-h1 w-80 md:w-full">
                       Gentle Care.{" "}
                       <span className="relative inline-block">
                            Joyful
                            <img src={textLine}
                                 alt=""
                                 aria-hidden="true"
                                 className="absolute left-0 md:left-6 top-0 pointer-events-none
                                            scale-125 md:scale-150"
                            />
                        </span>
                       {" "} Visits.{" "}
                   </h2>
               </div>

               <p className="text-p1 mt-5 md:mt-8 text-center text-[var(--color-light-black)] w-full md:w-lg mx-auto">
                   In the heart of Ramsey, NJ—compassionate dentistry that looks deeper than routine checkups.
               </p>
           </div>

            <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] xl:grid-cols-[40%_1fr]
                            gap-6 place-items-center px-0 lg:px-8"
            >
                <ShapeImg
                    src={visit}
                    alt="Happy child at the dentist"
                    mask={blob}
                    wrapperClassName="z-10 w-[360px] h-[400px] md:w-[400px] md:h-[480px]
                                      xl:w-[480px] xl:h-[560px]"
                    imgClassName="w-full h-full"
                />

                <div className=" w-full mx-auto px-4">
                    <div
                        className="flex md:grid md:grid-rows-2 md:grid-cols-2 md:gap-y-6 gap-0 lg:gap-6 justify-items-center
                                   transition-transform md:transform-none duration-500 ease-out"
                        style={
                            window.innerWidth < 768
                                ? { transform: `translateX(-${active * 100}%)` }
                                : undefined
                        }
                    >
                        {visits.map((visit) => (
                            <div key={visit.id} className="flex-shrink-0 w-full flex justify-center">

                                <div className="relative max-w-md mx-auto">
                                    <img
                                        src={visit.background}
                                        alt=""
                                        aria-hidden="true"
                                        className="absolute inset-0 w-[500px] h-full object-contain z-0"
                                    />

                                    <div className="relative z-10 flex flex-col items-center text-center px-12 py-12">
                                        <img
                                            src={visit.icon}
                                            alt=""
                                            aria-hidden="true"
                                            className="w-14 h-24 mb-3"
                                        />
                                        <h4 className="text-h4 mb-2 w-[240px]">
                                            {visit.heading}
                                        </h4>
                                        <p className="text-p2 text-[var(--color-light-black)] w-[240px]">
                                            {visit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex md:hidden gap-4 justify-center items-center mt-8">
                <button onClick={prev} aria-label="Previous slide" ><img src={buttonLeft} alt=""/></button>
                <button onClick={next} aria-label="Next slide" ><img src={buttonRight} alt=""/></button>
            </div>

        </section>
    )
}
export default Visit
