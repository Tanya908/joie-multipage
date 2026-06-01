import textLine from "../../assets/contact-us/textLine.svg"
import lineBg from "../../assets/contact-us/lineBg.svg";
const Hero = () => {
    return (
        <section className="mt-32 md:mt-40 px-4 md:px-8 relative">
            <div className="bg-[var(--color-light-yellow)] rounded-[40px] py-16 md:py-24 px-3
                            flex flex-col items-center justify-center relative overflow-hidden"
            >
                <div className="relative mb-8 md:mb-10 z-10">
                    <h1 className="text-h1 text-center w-xs md:w-full max-w-xl z-10">
                        Contact Joie Pediatric Dentistry
                    </h1>
                    <img src={textLine}
                         alt=""
                         aria-hidden="true"
                         className="absolute left-10 md:translate-x-1/2 scale-50
                                    md:scale-75 -bottom-7 md:-bottom-8.5"
                    />
                </div>

                <p className="text-p1 w-[280px] md:w-full max-w-lg text-center z-10">
                    Calm, kid-first pediatric care in Ramsey, NJ—reach us any time to schedule, ask a question, or get directions.
                </p>

                <img
                    src={lineBg}
                    alt=""
                    aria-hidden="true"
                    className="absolute left-20 -translate-x-[5%] bottom-0 scale-[1.2] z-0 pointer-events-none
                               -rotate-80 md:left-[60%] md:-translate-x-1/2 md:scale-[1.3]
                               lg:left-[80%] lg:-translate-x-1/2 lg:-bottom-10 lg:scale-[1]"
                />

                <img
                    src={lineBg}
                    alt=""
                    aria-hidden="true"
                    className="hidden pointer-events-none
                               md:left-[35%] md:-translate-x-1/2 md:scale-[1.4]
                               lg:left-[10%] lg:-translate-x-1/2 lg:bottom-10 lg:rotate-10 lg:scale-[1]"
                />
            </div>
        </section>
    )
}
export default Hero
