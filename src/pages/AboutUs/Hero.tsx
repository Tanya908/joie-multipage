import heart from "../../assets/heart.svg"
import bgWave from "../../assets/about-us/hero/bgWave.svg"
import decorativeWaves from "../../assets/decorativeWaves.svg";
import doctor from "../../assets/about-us/hero/doctor.webp";
import maskImg from "../../assets/about-us/hero/maskImg.svg";
import textBg from "../../assets/about-us/hero/textBg.svg";
import ShapeImg from "../../components/ShapeImg.tsx";
import BlobIcon from "../../components/BlobIcon.tsx";

const Hero = () => {
    return (
        <section className="mt-40 px-4 md:px-8 relative">
            <div className="relative bg-[var(--color-light-yellow)] rounded-3xl px-3 py-12 md:px-12
                            flex flex-col items-center md:flex-row gap-6"
            >
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0">
                    <img src={bgWave}
                         alt=""
                         aria-hidden="true"
                         className="absolute scale-x-[-1] lg:scale-x-100 rotate-25 lg:rotate-0
                                    scale-175 lg:scale-150 -top-24 lg:-top-34 -left-6 lg:left-60"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-start justify-center">
                    <BlobIcon
                        wrapperClassName="self-start lg:self-center"
                        background={"text-[var(--color-light-blue)]"}
                        blobClassName="w-20 h-20"
                        iconClassName="w-12 h-12"
                        icon={heart}
                    />
                    <div className="relative mt-4 lg:mt-6 mb-6 lg:mb-10">
                        <h1 className="text-h1 z-10 pb-3 w-64 lg:w-lg lg:text-center">
                            Meet <br className="hidden lg:block"/>
                            Dr. Sabrine Obbad
                        </h1>
                        <img src={decorativeWaves}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-4 lg:left-1/2 bottom-0 pointer-events-none
                                        scale-125 lg:scale-200"
                        />
                    </div>

                    <h4 className="text-h4 text-[var(--color-light-black)] max-w-lg lg:text-center">
                        NYU-trained, ABPD Board-Certified pediatric dentist delivering evidence-based, whole-child care with a calm, kid-first approach.
                    </h4>
                </div>

                <div className="relative z-10 w-full md:w-[70%] lg:w-[45%] mx-auto">
                    <div className="relative w-full aspect-[1/1]">
                        <ShapeImg
                            src={doctor}
                            alt=""
                            mask={maskImg}
                            wrapperClassName="absolute inset-0"
                            imgClassName="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-6 md:bottom-[14px] xl:top-[240px] md:left-auto left-1/2
                                    -translate-x-1/2 md:translate-x-0 md:right-0 xl:-right-16 z-20">
                        <div className="relative w-72 md:w-64 xl:w-80">
                            <img src={textBg} alt="" className="w-full"/>
                            <p className="absolute inset-0 flex items-center justify-center text-center
                                          px-4 text-p1-decorative text-[var(--color-black)]"
                            >
                                Your Pediatric Dentist in Ramsey, NJ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
