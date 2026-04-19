import background from "../../assets/home-page/why-us/background.svg";
import line from "../../assets/home-page/why-us/line.svg";
import ShapeImg from "../../components/ShapeImg.tsx";
import childFirst from "../../assets/home-page/why-us/childFirst.webp";
import childSecond from "../../assets/home-page/why-us/childSecond.webp";
import children from "../../assets/home-page/why-us/children.webp";
import maskBg from "../../assets/home-page/why-us/maskBg.svg";
import maskBgRect from "../../assets/home-page/why-us/maskBgRectangular.svg";
import circle from "../../assets/home-page/why-us/circle.svg";
import smallCircle from "../../assets/home-page/why-us/smallCircle.svg";

type WhyProps = {
    id:number;
    title:string;
    description:string;
    benefits:string[];
    src:string;
    mask:string;
}

export const WhyCards: WhyProps[] = [
    {
        id:1,
        title:"Simple on Purpose",
        description:"We make scheduling quick and painless. You’ll always see the same pediatric dentist who truly knows your child—because families have better things to do than sit in a waiting room.",
        benefits:[
            "Easy booking (click / text / call)",
            "Same doctor every visit",
            "Short waits"
        ],
        src:childFirst,
        mask:maskBg,
    },{
        id:2,
        title:"Care That’s Real",
        description:"We’re doctor-owned and community-focused—not a chain. Every plan is individualized, and if something isn’t necessary, we won’t recommend it.",
        benefits:[
            "Local & independent",
            "Tailored to your child",
            "No overtreatment"
        ],
        src:children,
        mask:maskBgRect,
    },{
        id:3,
        title:"Always Transparent",
        description:"From the first hello to the final sticker, you’re welcome every step. We explain everything in plain language—no hidden fees, no surprise bills.",
        benefits:[
            "Parents welcome in-room",
            "Clear communication",
            "Upfront pricing"
        ],
        src:childSecond,
        mask:maskBg,
    }

]

const WhyUs = () => {
    return (
        <section className="relative mt-20 pt-40 pb-52">
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 w-full"
                style={{objectFit: "fill"}}
            />

            <div className="text-center mx-auto w-fit">
                <h2 className="text-h1 w-80 md:w-full">
                    Why Families Choose {" "}
                    <span className="relative inline-block">
                            Joie
                            <img src={line}
                                 alt=""
                                 aria-hidden="true"
                                 className="absolute left-0 -top-2 md:-top-4 rotate-15
                                            pointer-events-none scale-110 md:scale-125"
                            />
                        </span>
                </h2>
            </div>


            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 items-start px-4 md:px-8">
                {WhyCards.map((item,i) => (
                    <div
                        key={item.id}
                        className={`grid grid-rows-subgrid row-span-5 gap-y-0
                                    ${i === 1 ? "lg:border-x lg:border-[var(--color-light-black)] lg:px-4" 
                                              : "" }`}
                    >
                        <ShapeImg
                            src={item.src}
                            alt="Happy child at the dentist"
                            mask={item.mask}
                            wrapperClassName="z-10"
                            imgClassName="w-full h-full"
                        />
                            <div className="relative inline-block w-12 h-12 shrink-0 mt-10">
                                <img
                                    src={circle}
                                    className="w-12 h-12 object-contain"
                                    alt=""
                                    aria-hidden="true"
                                />
                                <span className="z-10 text-h3 text-[var(--color-light-blue)] absolute inset-0
                                                 flex items-center justify-center pointer-events-none"
                                >
                                   {item.id}
                                </span>
                            </div>

                            <h3 className="text-h3 mt-3 mb-4">{item.title}</h3>

                            <p className="text-p1">
                                {item.description}
                            </p>

                            <div className="mt-6 flex flex-col gap-3">
                                {item.benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-3 items-center">
                                        <img src={smallCircle} alt="" className="shrink-0" />
                                        <p className="text-p1-caps">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default WhyUs
