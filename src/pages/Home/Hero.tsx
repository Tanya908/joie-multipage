import decorativeWaves from "../../assets/decorativeWaves.svg";
import yellowCircle from "../../assets/home-page/hero/yellowCircle.svg";
import blueCircle from "../../assets/home-page/hero/blueCircle.svg";
import pinkCircle from "../../assets/home-page/hero/pinkCircle.svg";
import rocket from "../../assets/home-page/hero/rocket.svg";
import butterfly from "../../assets/home-page/hero/butterfly.svg";
import flower from "../../assets/home-page/hero/flower.svg";
import home from "../../assets/home-page/hero/homePage.webp";
import {Button} from "../../components/Button.tsx";
import ShapeImg from "../../components/ShapeImg.tsx";
import maskImg from "../../assets/home-page/hero/flowerBackground.svg";
import heroVector from "../../assets/home-page/hero/heroVector.svg";

type Feature = {
    background: string;
    icon: string;
    description: string;
    id: number;
};

const features:Feature[] = [
    {   background:yellowCircle,
        icon:rocket,
        description:"Board-certified pediatric dentist",
        id:1
    },
    {   background:blueCircle,
        icon:flower,
        description:"Kid-first comforts",
        id:2
    },
    {   background:pinkCircle,
        icon:butterfly,
        description:"Online forms",
        id:3
    },
]

const Home = () => {
    return (
        <section className="mt-36 mb-20 lg:mb-28 md:mt-40 px-4 md:px-8">
            <div className="bg-[var(--color-light-yellow)] rounded-3xl px-3 py-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col h-full lg:pt-20">
                        <div className="relative inline-block">
                            <h1 className="text-title z-10 pb-3 lg:max-w-lg xl:max-w-3xl">
                                Your Pediatric Dentist in Ramsey, NJ
                            </h1>
                            <img src={decorativeWaves}
                                     alt=""
                                     aria-hidden="true"
                                     className="absolute left-4 bottom-0 pointer-events-none scale-125"
                            />
                        </div>

                        <p className="hidden md:flex text-p1 max-w-sm mt-4">
                            Discover the joy of healthy smiles at Joie Pediatric Dentistry — kid-first care, with a calm, joyful experience for parents.
                        </p>

                        <Button
                            primary
                            href="#"
                            external
                            className="whitespace-nowrap w-full md:w-auto self-start my-10"
                        >
                            Sign up for the VIP list!
                        </Button>

                        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-[repeat(3,minmax(280px,max-content))]
                                        gap-3 md:gap-10 xl:gap-0 lg:mt-20"
                        >
                            {features.map((item) => (
                                <div key={item.id} className="flex gap-3 items-center">
                                    <div className="relative inline-block shrink-0 ">
                                        <img
                                            src={item.background}
                                            className="w-16 h-16 z-10 object-contain"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                        <img
                                            src={item.icon}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                       pointer-events-none w-10 h-10"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <p className="text-p1 flex-1 text-balance min-w-[240px]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block lg:max-w-[560px] xl:max-w-[600px] aspect-[600/560] self-center
                                    xl:justify-self-end relative w-full mr-12"
                    >
                        <img
                            src={heroVector}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 left-5 w-full h-full object-contain scale-105 z-0"
                        />
                        <ShapeImg
                            src={home}
                            alt="Two smiling children"
                            mask={maskImg}
                            wrapperClassName="absolute inset-0 z-10"
                            imgClassName="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home
