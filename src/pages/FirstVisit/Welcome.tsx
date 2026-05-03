import lineLeft from "../../assets/first-visit/welcome/lineLeft.svg";
import lineRight from "../../assets/first-visit/welcome/lineRight.svg";
import background from "../../assets/first-visit/welcome/background.svg";
import textLine from "../../assets/first-visit/welcome/textLine.svg";

const Welcome = () => {
    return (
        <section className="relative pt-24 pb-32 mt-20 px-4 md:px-8 overflow-hidden">
            <div className="absolute top-0 left-[20%] md:left-1/2 -translate-x-1/2 h-full
                            w-auto -z-10 overflow-hidden xl:overflow-visible"
            >
                <img
                    src={background}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-auto max-w-none origin-top"
                />

                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={lineLeft}
                        alt=""
                        aria-hidden="true"
                        className="absolute -top-[26%] lg:-top-[20%] lg:left-[10%] left-[16%]
                                   w-[70%] max-w-none"
                    />

                    <img
                        src={lineRight}
                        alt=""
                        aria-hidden="true"
                        className="absolute top-[28%] md:top-[20%] lg:top-[15%] -right-[6%] xl:-right-[12%]
                                   w-[70%] max-w-none"
                    />
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mx-auto">
                <h1 className="text-h1 max-w-2xl">
                    A warm welcome (for you and {" "}
                    <span className="relative inline-block">
                    your child)
                        <img src={textLine}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-0 -bottom-9 pointer-events-none scale-90"
                        />
                    </span>
                </h1>
                <div className="mt-6 md:mt-10 lg:mt-12 max-w-[720px]">
                    <p className="text-p1 text-[var(--color-black)]">
                        When you walk into our office in Ramsey, you’ll find a kid-friendly space that’s bright, welcoming, and designed to make little ones feel at ease.
                    </p>
                    <p className="text-p1 text-[var(--color-black)]">
                        Our team will greet you, guide you through any forms, and take time to answer your questions—no rush, no pressure.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Welcome
