import BlobIcon from "../../components/BlobIcon.tsx";
import rocket from "../../assets/first-visit/hero/rocket.svg";
import line from "../../assets/first-visit/hero/line.svg";
import maskImg from "../../assets/first-visit/hero/maskImg.svg";
import dentist from "../../assets/first-visit/hero/dentist.webp";
import lineWaves from "../../assets/text-lines/lineWaves.svg"
import ShapeImg from "../../components/ShapeImg.tsx";

const Hero = () => {
    return (
        <section className="mt-32 md:mt-42 content-padding relative">
            <div className="relative bg-[var(--color-light-yellow)] rounded-3xl px-3 md:px-12
                           max-h-[650px] xl:max-h-[720px] gap-6 overflow-hidden"
            >
                <div className="layout-container">
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0">
                        <img src={line}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-4 scale-125 bottom-16"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col items-start justify-center pt-12 pb-6 lg:pb-40">
                        <div className="flex gap-4 items-center mb-4 lg:mb-6">
                            <BlobIcon
                                wrapperClassName="self-start"
                                blobClassName="w-20 h-20"
                                iconClassName="w-12 h-12"
                                icon={rocket}
                            />
                            <p className="text-p1-decorative">
                                It's showtime!
                            </p>
                        </div>
                        <div className="relative mb-8">
                            <h1 className="text-h1 z-10 w-[300px] md:w-[380px] lg:w-[560px]">
                                What to expect at the first visit
                            </h1>
                            <img src={lineWaves}
                                 alt=""
                                 aria-hidden="true"
                                 className="absolute left-4 lg:left-14 -bottom-4 pointer-events-none scale-90 lg:scale-100"
                            />
                        </div>

                        <h4 className="text-h4 text-[var(--color-light-black)] md:w-[320px] lg:w-sm 2xl:w-full">
                            Gentle Beginnings for Lifelong Healthy Smiles
                        </h4>
                    </div>

                    <div
                        className="relative z-10 w-[85%] mx-auto -mb-8 md:absolute md:bottom-0 md:right-0 md:mt-0
                               md:w-[50%] md:-mb-14 md:-translate-x-8 lg:w-[60%] xl:w-[55%] xl:-mb-24 xl:-translate-x-14"
                    >
                        <ShapeImg
                            src={dentist}
                            alt=""
                            mask={maskImg}
                            wrapperClassName="w-full"
                            imgClassName="w-full h-full object-cover scale-[1.2] md:scale-100 origin-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
