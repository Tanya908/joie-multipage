import line from "../../assets/text-lines/lineCircle.svg";
import maskImg from "../../assets/first-visit/exam/maskImg.svg";
import maskImgSecond from "../../assets/first-visit/exam/maskImgSecond.svg";
import children from "../../assets/first-visit/exam/children.webp";
import boy from "../../assets/first-visit/exam/boy.webp";
import boyWithMom from "../../assets/first-visit/exam/boyWithMom.webp";
import girl from "../../assets/first-visit/exam/girl.webp";
import background from "../../assets/first-visit/exam/background.svg";
import {ButtonArrow} from "../../components/ButtonArrow.tsx";
import Blob from "../../components/Blob.tsx";
import ShapeImg from "../../components/ShapeImg.tsx";
import {useSlider} from "../../shared/hooks/useSlider.ts";
import {useBreakpoint} from "../../shared/hooks/useScreenWidth.ts";
import {useSwipeSlider} from "../../shared/hooks/useSwipeSlider.ts";

type ExamProps = {
    id: number;
    maskImg: string;
    src:string;
    title: string;
    text: string;
}

const ExamCards:ExamProps[] = [
    {
        id:1,
        maskImg:maskImg,
        src:children,
        title:"Get to know your child",
        text:" We’ll chat with you and your little one to learn more about their habits, medical history, and dental needs.",
    },
    {
        id:2,
        maskImg:maskImgSecond,
        src:girl,
        title:"Check teeth, gums, and growth",
        text:"We look for signs of early cavities, check the bite, evaluate jaw and tooth development, and monitor things like thumb-sucking or pacifier use.",
    },
    {
        id:3,
        maskImg:maskImg,
        src:boy,
        title:"Cleaning (if needed)",
        text:"For babies and toddlers, a quick polish may be all that’s needed. For older kids, we’ll do a gentle cleaning and fluoride treatment if appropriate.",
    },
    {
        id:4,
        maskImg:maskImgSecond,
        src:boyWithMom,
        title:"Educate & empower",
        text:"We’ll talk through brushing, diet, and tips for healthy habits at home—tailored to your child’s age and stage. Ending on a high note, your child gets to grab a prize from our Prize Wall after the exam.",
    },
]

const Exam = () => {

    const { active,next,prev, maxSlides,} = useSlider({blockLength: ExamCards.length,visibleCards:1,});
    const { isMobile } = useBreakpoint();
    const {handleTouchStart,handleTouchEnd} = useSwipeSlider({next,prev});

    return (
        <section className="relative py-32 mt-24">
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 w-full"
                style={{objectFit: "fill"}}
            />
            <h1 className="text-h1 mb-12 content-padding w-full max-w-4xl md:text-center md:mx-auto">
                The {" "}
                <span className="relative inline-block">
                    exam: {" "}
                    <img src={line}
                         alt=""
                         aria-hidden="true"
                         className="absolute left-0 -bottom-6 md:-bottom-8 pointer-events-none
                                    scale-125 -scale-y-75 md:-scale-y-90"
                    />
                </span>
                {" "} gentle, thorough, and personalized
            </h1>

            <div className="flex justify-center items-center gap-4 mx-auto md:hidden">
                <ButtonArrow
                    direction="left"
                    onClick={prev}
                    disabled={active === 0}

                />
                <ButtonArrow
                    direction="right"
                    onClick={next}
                    disabled={active >= maxSlides}
                />
            </div>

            <div className="overflow-hidden w-full px-0 md:px-8"
                 onTouchStart={handleTouchStart}
                 onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex md:flex-col transition-transform duration-300"
                    style={{transform: isMobile  ? `translateX(-${active * 90}%)` : "none",}}
                >
                    {ExamCards.map((item, index) => (
                        <div
                            key={index}
                            className="shrink-0 px-4 md:px-0 w-[90%] md:w-full"
                        >
                            <div className="mt-8 md:flex md:items-center w-full">

                                <div className="relative inline-block w-10 h-10 md:w-14 md:h-14 mb-4 shrink-0 md:mr-6 lg:mr-20">
                                    <Blob className="text-[var(--color-light-red)] object-contain w-10 h-10 md:w-14 md:h-14" />
                                    <span
                                        className="z-10 text-h3 text-[var(--color-light-black)] absolute inset-0
                                                   flex items-center justify-center pointer-events-none"
                                    >
                                        {item.id}
                                    </span>
                                </div>

                                <div className="w-full md:flex-1 lg:flex-none lg:w-[35%] md:mr-20 lg:mr-40">
                                    <ShapeImg
                                        src={item.src}
                                        alt={item.title}
                                        mask={item.maskImg}
                                        wrapperClassName="z-10 w-full"
                                        imgClassName="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-full md:flex-1 max-w-[680px]">
                                    <h3 className="text-h3 mb-3 mt-6 md:mt-0">{item.title}</h3>
                                    <h4 className="text-h4 text-[var(--color-light-black)]">{item.text}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="content-padding flex gap-4 mt-12 w-full md:pl-[calc(48px+24px+35%+80px)]
                           lg:pl-[calc(48px+80px+35%+160px)] md:ml-0"
            >
                <div className="relative inline-block w-12 h-12 mb-4 shrink-0">
                    <Blob className="text-[var(--color-black)] object-contain w-12 h-12" />
                    <span
                        className="z-10 text-h2 text-[var(--color-white)] absolute inset-0
                                   flex items-center justify-center pointer-events-none"
                    >
                        !
                    </span>
                </div>
                <h4 className="text-h4-dec text-[var(--color-light-black)]">
                    If this is your baby’s first visit (we recommend coming by age 1!),
                    we’ll focus on parent education and creating a stress-free first
                    impression.
                </h4>
            </div>
        </section>
    )
}
export default Exam
