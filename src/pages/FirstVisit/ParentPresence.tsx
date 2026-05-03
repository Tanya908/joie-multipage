import doctor from "../../assets/first-visit/parent-presence/doctor.webp";
import textLine from "../../assets/first-visit/parent-presence/textLine.svg";
import bgLineLg from "../../assets/first-visit/parent-presence/bgLineLg.svg";
import bgLineSm from "../../assets/first-visit/parent-presence/bgLineSm.svg";


const ParentPresence = () => {
    return (
        <section className="relative mt-24 pt-20 pb-40 px-4 md:px-8">
            <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:max-h-[520px]">
                <div className="lg:w-[45%] flex flex-col lg:flex-row items-stretch">
                    <div className="flex flex-col h-full w-full relative py-10 px-3 md:p-14 bg-[var(--color-light-yellow)]
                                    rounded-4xl lg:rounded-l-4xl lg:rounded-r-none lg:justify-center z-10"
                    >
                        <h1 className="text-h1">
                            You  {" "}
                            <span className="relative inline-block">
                            stay
                                <img src={textLine}
                                     alt=""
                                     aria-hidden="true"
                                     className="absolute -left-12 lg:-left-8 -bottom-6 xl:-left-4 xl:-bottom-8
                                                pointer-events-none scale-50 md:scale-90"
                                />
                            {" "} in the room
                            </span>
                        </h1>
                        <p className="text-p1 text-[var(--color-black)] mt-8 xl:mt-10 w-full lg:max-w-lg">
                            Parents are welcome to stay by their child’s side the entire time. We believe children feel safest when they know their grown-up is nearby, and we want you to feel fully informed and involved in your child’s care.
                        </p>
                    </div>
                    <img
                        src={bgLineSm}
                        alt=""
                        className="relative z-10 w-full -mt-6 flex lg:hidden"
                    />
                </div>
                <div className="relative items-center hidden lg:flex self-stretch -ml-0.5">
                    <img
                        src={bgLineLg}
                        alt=""
                        className="block w-auto h-[100.6%] max-w-none z-10"
                        style={{ objectFit: "fill" }}
                    />
                </div>
                <div className="w-full overflow-hidden rounded-b-4xl lg:rounded-r-4xl lg:rounded-bl-none
                                -mt-14 md:-mt-20 lg:mt-0 ml-0 lg:-ml-10 relative z-0 lg:w-[55%]"
                >
                    <img
                        src={doctor}
                        alt=""
                        className="w-full h-[450px] md:h-[600px] object-cover
                                   lg:h-full scale-100 aspect-[4/5]"
                    />
                </div>
            </div>
        </section>
    )
}
export default ParentPresence
