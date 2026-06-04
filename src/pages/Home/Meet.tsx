import background from "../../assets/home-page/meet/background.svg";
import doctor from "../../assets/home-page/meet/doctor.webp";
import maskImg from "../../assets/home-page/meet/maskImg.svg"
import sun from "../../assets/home-page/meet/sun.svg"
import ShapeImg from "../../components/ShapeImg.tsx";
import certifiedIcon from "../../assets/home-page/meet/certifiedIcon.svg"
import line from "../../assets/text-lines/line.svg";
import lineLeft from "../../assets/home-page/meet/lineLeft.svg";
import lineRight from "../../assets/home-page/meet/lineRight.svg";
import {Button} from "../../components/Button.tsx";
import BlobIcon from "../../components/BlobIcon.tsx";


const Meet = () => {
    return (
        <section className="relative mt-20 pt-24 pb-20">
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 w-full"
                style={{objectFit: "fill"}}
            />

            <div className="relative content-padding lg:px-10 z-10 layout-container">
                <div className="grid grid-cols-1 md:grid-cols-[50%_1fr] auto-rows-min justify-items-stretch items-start gap-0 lg:gap-10">
                    <div>
                        <div className="flex gap-3 items-center">
                            <BlobIcon
                                icon={sun}
                            />
                            <p className="text-p2-caps max-w-64 lg:max-w-md">
                                Board Certified Pediatric Dentist in Ramsey, NJ
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-start relative mt-2 md:mt-4">
                            <h2 className="text-h1 w-full">
                                Meet{" "}
                                <span className="relative inline-block">
                                    Dr. Sabrine
                                    <img src={line}
                                         alt=""
                                         aria-hidden="true"
                                         className="absolute top-7 md:top-10 pointer-events-none scale-75"
                                    />
                                </span>
                                {" "} Obbad{" "}
                            </h2>

                            <p className="text-p1 mt-6 lg:mt-8 w-full lg:w-xl">
                                Known for her calming approach and minimally invasive philosophy, Dr. Sabrine is dedicated to creating positive, empowering dental experiences for kids of all ages.
                            </p>

                            <Button
                                primary
                                href="#"
                                external
                                className="w-full md:w-fit my-8"
                            >
                                Meet Our Doctor
                            </Button>
                        </div>
                    </div>

                    <ShapeImg
                        src={doctor}
                        alt="Happy child at the dentist"
                        mask={maskImg}
                        wrapperClassName="w-full z-10 w-[400px] h-[400px] md:top-0 md:-translate-y-40
                                          lg:w-[420px] lg:h-[540px] xl:w-[580px] xl:h-[600px] xl:-translate-y-32 "
                        imgClassName="w-full h-full object-cover"
                    />
                    <div className="flex flex-col items-center justify-center text-center col-span-1 md:col-span-2 mt-12 lg:-mt-32">
                        <img src={certifiedIcon} alt="" className="mb-8 lg:w-40 lg:h-40"/>
                        <h3 className="text-h2 mb-4 w-full md:w-2xl">
                            Board Certified pediatric Dentist Proud to be a Diplomate
                        </h3>
                        <p className="text-p1">
                            Credential Verification Available at ABPD.org
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <img src={lineLeft} alt=""
                     className="absolute left-0 -bottom-12 lg:-bottom-20  -translate-x-1/3"
                />
                <img src={lineRight} alt=""
                     className="absolute right-0 -bottom-12 lg:-bottom-24 translate-x-1/3"
                />
            </div>
        </section>
    )
}
export default Meet
