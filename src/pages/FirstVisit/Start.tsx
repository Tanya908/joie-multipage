import lineOval from "../../assets/text-lines/lineOval.svg"
import childrenFirst from "../../assets/first-visit/start/childrenFirst.webp";
import childrenSecond from "../../assets/first-visit/start/childrenSecond.webp";

type StartProps = {
    image: string;
    title: string;
    description: string;
    id: number;
}

const StartItems:StartProps[] = [
    {
        image:childrenFirst,
        title:"More than a checkup",
        description:"Whether your child is an infant, toddler, or school-aged, this first appointment is about more than just checking teeth. It’s about building trust, setting a strong foundation, and making both kids and parents feel comfortable every step of the way.",
        id:1
    },
    {
        image:childrenSecond,
        title:"A gentle start to lifelong smiles",
        description:"At Joie Pediatric Dentistry, your child’s first visit sets the tone for how they’ll feel about dental care for years to come – so we make it calm, positive and even a little fun.",
        id:2
    },
]

const Start = () => {
    return (
        <section className="mt-24 px-4 md:px-8 md:grid md:grid-cols-2 items-center md:items-start mx-auto
                            justify-items-center md:justify-items-start  md:gap-10 max-w-[1600px]"
        >
            <h1 className="text-h1 mb-12 md:mb-0 order-1 md:order-2 md:self-start">
                A gentle {" "}
                <span className="relative inline-block">
                    start {" "}
                        <img src={lineOval}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-0 -bottom-2 pointer-events-none scale-110"
                        />
                </span>
                {" "} to lifelong healthy habits
            </h1>


                {StartItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex flex-col max-w-xl mb-10 md:mb-0
                                    ${index === 0 ? "order-2 md:order-1 md:row-span-2" 
                                                  : "order-3 md:order-3"}`}
                    >
                        <img
                            src={item.image}
                            className="w-full rounded-4xl mb-8"
                            alt={item.title}
                        />
                        <h4 className="text-h4-dec mb-4">
                            {item.title}
                        </h4>
                        <p className="text-p1 text-[var(--color-black)]">
                            {item.description}
                        </p>
                    </div>
                ))}
        </section>
    )
}
export default Start
