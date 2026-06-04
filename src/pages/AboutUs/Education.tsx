import line from "../../assets/about-us/education/line.svg";
import wave from "../../assets/about-us/education/wave.svg";
import nurse from "../../assets/about-us/education/nurse.webp";

import textSm from "../../assets/about-us/education/textSm.svg";
import textLg from "../../assets/about-us/education/textLg.svg";
import background from "../../assets/about-us/education/background.svg";

const Education = () => {
    return (
        <section className="relative mt-24 pt-20 pb-32 content-padding overflow-hidden 2xl:bg-[var(--color-light-blue)]">
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full -z-10 object-cover overflow-x-hidden"
            />

            <div className="layout-container">
                <h2 className="text-h1 text-center mx-auto mb-12 w-xs lg:w-full">
                    Education and training
                </h2>

                <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:max-h-[1000px] xl:max-h-[700px]">
                    <div className="lg:w-[50%] flex flex-col lg:flex-row items-stretch">
                        <div className="flex flex-col h-full w-full relative py-10 px-3 md:p-14 z-10 bg-[var(--color-light-red)]
                                    rounded-4xl lg:rounded-l-4xl lg:rounded-r-none lg:items-center lg:justify-center"
                        >
                            <h3 className="text-h3 mb-10 max-w-md text-left lg:text-center">
                                Research-driven, hospital-tested {" "}
                                <span className="relative inline-block">
                            training
                            <img src={line}
                                 alt=""
                                 aria-hidden="true"
                                 className="absolute top-6 md:top-10 left-0 pointer-events-none
                                            scale-100 md:scale-125"
                            />
                        </span>
                            </h3>

                            <div className="flex flex-col gap-2 mb-10 max-w-2xl">
                                <p className="text-p1">
                                    Dr. Sabrine began her academic journey at New York University (NYU), where she earned both a Bachelor of Science and a Master of Science in Chemistry.
                                    She continued at NYU College of Dentistry, completing her dental training and conducting advanced research that led to a Nature Oncogene publication—underscoring a strong scientific foundation and commitment to evidence-based care.
                                </p>

                                <p className="text-p1">
                                    Afterward, she completed both a General Practice Residency and a Pediatric Dentistry Residency at Wyckoff Heights Medical Center (Brooklyn, NY), with hospital rotations in surgery, emergency medicine, and pediatric intensive care—preparing her to treat children with a wide range of medical and dental needs.
                                </p>
                            </div>

                            <img src={wave}
                                 alt=""
                                 aria-hidden="true"
                                 className="pointer-events-none scale-100 lg:scale-125 mb-4 mx-auto"
                            />

                            <p className="text-p1-decorative text-[var(--color-black)] max-w-2xl">
                                Dr. Sabrine is a Board-Certified Pediatric Dentist and a proud Diplomate of the American Board of Pediatric Dentistry (ABPD).
                            </p>

                        </div>
                        <img
                            src={textSm}
                            alt=""
                            className="relative z-10 w-full -mt-6 flex lg:hidden"
                        />
                    </div>
                    <div className="relative items-center hidden lg:flex  self-stretch -ml-3.5">
                        <img
                            src={textLg}
                            alt=""
                            className="w-auto h-full z-10"
                            style={{ objectFit: "fill" }}
                        />
                    </div>
                    <div className="w-full overflow-hidden rounded-b-4xl lg:rounded-r-4xl lg:rounded-bl-none
                            -mt-14 md:-mt-20 lg:mt-0 ml-0 lg:-ml-10 relative z-0 lg:w-[50%]"
                    >
                        <img
                            src={nurse}
                            alt=""
                            className="w-full h-[450px] md:h-[600px] object-cover object-[70%_center] xl:object-[90%_center]
                               lg:h-full scale-100 lg:scale-125 aspect-[4/5]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education
