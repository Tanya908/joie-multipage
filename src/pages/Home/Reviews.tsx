import line from "../../assets/home-page/reviews/line.svg";
import {ButtonArrow} from "../../components/ButtonArrow.tsx";
import background from "../../assets/home-page/reviews/background.svg";
import melissa from "../../assets/home-page/reviews/melissa.webp";
import ana from "../../assets/home-page/reviews/ana.webp";
import brien from "../../assets/home-page/reviews/brien.webp";
import maskImg from "../../assets/home-page/reviews/maskImg.svg";
import quotationMark from "../../assets/home-page/reviews/quotationMark.svg";
import ShapeImg from "../../components/ShapeImg.tsx";
import {Button} from "../../components/Button.tsx";
import {useSlider} from "../../shared/hooks/useSlider.ts";
import {useEffect, useRef, useState} from "react";


type ReviewProps = {
    text: string;
    src:string;
    name: string;
    lastName: string;
    id:number;
}

const reviews:ReviewProps[] = [
    {
        text:"My 3-year-old is usually anxious, but Joie’s low-stim ‘Matinee’ appointment was a game-changer. I stayed in the room, the exam was gentle, and they explained everything in plain language. She left smiling with a sticker—and asked when we’re coming back.",
        src: melissa,
        name:"Melissa R.",
        lastName:"Ramsey",
        id:1,
    },{
        text:"Playground chip = parent panic. Joie fit us in same day, took only the X-rays that were needed, and fixed it with zero drama. My son walked out comfortable and proud of his ‘new tooth’—and I left relieved. The team was calm, clear, and honest about options, so we knew exactly what to expect.",
        src: brien,
        name:"Brian K.",
        lastName:"Allendale",
        id:2,
    },{
        text:"My 7-year-old had an early cavity and I dreaded the drill. Dr. Sabrine used a minimally invasive option and it was quick, calm, and painless—no tears. We got a clear home plan and follow-up; he’s brushing without a fight now.",
        src: ana,
        name:"Ana M.",
        lastName:"Mahwah",
        id:3
    },
]


const Reviews = () => {
    const screenWidth = window.innerWidth;

    const [cardWidth, setCardWidth] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (cardRef.current) {
                setCardWidth(
                    cardRef.current.offsetWidth
                );
            }
        };

        updateWidth();

        window.addEventListener(
            "resize",
            updateWidth
        );

        return () => {
            window.removeEventListener(
                "resize",
                updateWidth
            );
        };
    }, []);

    const visibleCards =
        screenWidth >= 768 ? 2 : 1;

    const gap =
        screenWidth >= 1024 ? 40 : 16;


    const {
        active,
        next,
        prev,
        maxSlides,
    } = useSlider({
        blockLength: reviews.length,
        visibleCards,
    });

    return (
        <section className="relative mt-20 pt-20 pb-16">
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 w-full"
                style={{objectFit: "fill"}}
            />

            <div className="flex flex-col md:flex-row md:justify-between gap-8 items-center justify-center
                            px-4 md:px-8 mb-8"
            >
                <h2 className="text-h1 w-full text-center md:text-left mx-auto">
                    Joyful Reviews from  {" "}
                    <span className="relative inline-block">
                    Our Parents
                        <img src={line}
                             alt=""
                             aria-hidden="true"
                             className="absolute top-7 md:top-12 pointer-events-none scale-50 md:scale-100"
                        />
                    </span>
                </h2>

                <div className="flex gap-4">
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
            </div>

            <div className="overflow-hidden px-4 md:px-8 mb-16">
                <div
                    className="flex gap-4 lg:gap-14  transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${active * (cardWidth + gap)}px)`
                    }}
                >
                    {reviews.map((review) => (
                        <div
                            ref={review.id === 1 ? cardRef : null}
                            key={review.id}
                            className="flex flex-col shrink-0 relative rounded-4xl border border-[var(--color-light-black)] mt-4 py-8 px-6 md:py-10 md:px-10
                                        w-[clamp(320px,45vw,560px)] h-[420px] md:h-[580px] lg:h-[460px] xl:h-[460px]"
                        >
                            <img
                                src={quotationMark}
                                alt=""
                                aria-hidden="true"
                                className="absolute -top-3 left-4 w-8 h-8 md:w-10 md:h-10"
                            />
                            <h4 className="text-h4 text-[var(--color-black)]">
                                {review.text}
                            </h4>

                            <div className="flex gap-4 items-center mt-auto">
                                <ShapeImg
                                    src={review.src}
                                    alt={review.name}
                                    mask={maskImg}
                                    wrapperClassName="z-10"
                                    imgClassName="w-16 h-16"
                                />

                                <div>
                                    <p className="text-p1-decorative text-[var(--color-black)]">{review.name}</p>
                                    <p className="text-p2">{review.lastName}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <Button
                    variant="secondary"
                    external
                    href="https://www.google.com/maps/place/Joie+Pediatric+Dentistry/@41.057773,-74.138536,1761m/data=!3m1!1e3!4m8!3m7!1s0x89c2e16388c1f40b:0x56d8529ea8fbf19c!8m2!3d41.0577733!4d-74.1385363!9m1!1b1!16s%2Fg%2F11yr2slcs7?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                    className="whitespace-nowrap w-fit"
                >
                    Open Google Reviews
                </Button>
            </div>
        </section>
    )
}
export default Reviews
