import dentist from "../../assets/our-services/hero/dentist.webp";
import maskImg from "../../assets/our-services/hero/maskImg.svg";
import ShapeImg from "../../components/ShapeImg.tsx";
import lineWaves from "../../assets/text-lines/lineWaves.svg";
import line from "../../assets/first-visit/hero/line.svg";

const Hero = () => {
    return (
        <section className="mt-36 md:mt-42 content-padding relative">
            <div className="relative flex flex-col md:flex-row-reverse md:gap-16 items-center
                            bg-[var(--color-light-yellow)] rounded-3xl px-3 md:px-12 pt-12"
            >
                <div className="w-full md:w-[45%] lg:w-[50%] pb-0 md:pb-10">
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0">
                        <img
                            src={line}
                            alt=""
                            aria-hidden="true"
                            className="absolute left-0 bottom-40 md:bottom-10 -scale-x-150 w-[140%]
                                       max-w-none scale-150 md:scale-110 lg:w-full"
                        />
                    </div>
                    <div className="relative mb-8">
                        <h1 className="text-h1 z-10 w-[300px] md:w-full">
                            Our Services
                        </h1>
                        <img src={lineWaves}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-0 lg:left-14 -bottom-4 pointer-events-none
                                        scale-75 md:scale-100 lg:scale-100"
                        />
                    </div>

                    <p className="relative text-p1 text-[var(--color-light-black)] z-10 max-w-xl">
                        At Joie Pediatric Dentistry, we offer a full range of pediatric dental services designed to grow with your child—from their very first tooth to their teenage years. Every visit is personalized, every treatment is backed by the latest science, and every child is treated with kindness, patience, and respect.
                    </p>
                </div>

                <div className="mt-32 md:mt-0 z-10 w-full md:w-[55%] lg:w-[50%]">
                    <ShapeImg
                        src={dentist}
                        alt=""
                        mask={maskImg}
                        wrapperClassName="w-full"
                        imgClassName="w-full h-full object-cover scale-105 origin-bottom max-w-xl"
                    />
                </div>
            </div>
        </section>
    )
}
export default Hero
