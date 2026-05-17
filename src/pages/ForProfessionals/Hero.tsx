import line from "../../assets/for-professinals/hero/line.svg";
import lineWaves from "../../assets/text-lines/lineWaves.svg";
import ShapeImg from "../../components/ShapeImg.tsx";
import doctors from "../../assets/for-professinals/hero/doctors.webp";
import maskImg from "../../assets/for-professinals/hero/maskImg.svg";
import maskImgMd from "../../assets/for-professinals/hero/maskImgMd.svg";

const Hero = () => {
    return (
        <section className="mt-32 md:mt-40 px-4 md:px-8 relative">
            <div className="relative flex flex-col lg:flex-row justify-between items-center rounded-3xl
                            bg-[var(--color-light-yellow)] px-3 md:px-12 lg:px-20 py-12 lg:py-15"
            >
                <div className="w-full pb-0 md:pb-10">
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0">
                        <img
                            src={line}
                            alt=""
                            aria-hidden="true"
                            className="absolute left-0 bottom-40 md:bottom-10 -scale-x-150
                                       w-[140%] max-w-none scale-150 md:scale-110 lg:w-full"
                        />
                    </div>
                    <div className="relative mb-6">
                        <h1 className="text-h1 z-10 w-[300px] md:w-2xl lg:w-lg">
                            For healthcare professionals
                        </h1>
                        <img src={lineWaves}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-0 lg:left-14 -bottom-4 pointer-events-none
                                        scale-75 md:scale-100 lg:scale-100"
                        />
                    </div>

                    <p className="relative text-p1 text-[var(--color-light-black)] z-10 w-full md:w-xl">
                        At Joie Pediatric Dentistry, we value the strong relationships we build with referring providers. Whether you’re a pediatrician, general dentist, orthodontist, ENT, speech therapist or any healthcare provider, we’re honored to be part of your extended care team—and committed to supporting your patients with the same level of compassion, communication, and clinical excellence you provide.
                    </p>
                </div>

                <div className="mt-16 md:mt-0 z-10 flex md:hidden lg:flex w-full
                                lg:w-[40%] max-w-none flex-shrink-0"
                >
                    <ShapeImg
                        src={doctors}
                        alt="Doctors"
                        mask={maskImg}
                        wrapperClassName="w-full"
                        imgClassName="w-full h-full object-cover scale-110"
                    />
                </div>

                <div className="hidden md:flex lg:hidden">
                    <ShapeImg
                        src={doctors}
                        alt=""
                        mask={maskImgMd}
                        wrapperClassName="w-full h-full overflow-hidden m-0 p-0"
                        imgClassName="h-[280px] w-[720px]"
                    />
                </div>
            </div>
        </section>
    )
}
export default Hero
