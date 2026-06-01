import girl from "../../assets/home-page/insurance/girl.webp"
import stroke from "../../assets/home-page/insurance/stroke.svg"
import {Button} from "../../components/Button.tsx";


const Insurance = () => {
    return (
        <section className="mt-20 mb-16 mx-4 md:mx-8 lg:mx-0  flex flex-col lg:flex-row gap-10">
            <div className="relative z-10 bg-[var(--color-light-yellow)] py-10 px-3 md:px-8
                            rounded-4xl lg:rounded-tr-none lg:rounded-br-none lg:order-2 lg:w-1/2"
            >
                <h2 className="text-h2 mb-4 md:mb-6 w-48 md:w-full">
                    Insurance & Finance
                </h2>
                <p className="text-p1 mb-2">
                    Navigating insurance shouldn’t be stressful. At Joie Pediatric Dentistry, we accept most major plans and are proudly in-network with several popular providers.
                </p>
                <p className="text-p1">
                    Not sure what’s covered? No problem. Our experienced team is happy to walk you through it. Just fill out our quick insurance verification form, and we’ll handle the rest, making sure you get the most out of your benefits.
                </p>

                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row
                                items-center gap-4 w-full py-10"
                >
                    <Button
                        primary
                        href="/services"
                        external
                        className="whitespace-nowrap w-full"
                    >
                        View All Services
                    </Button>

                    <Button
                        variant="secondary"
                        href="mailto:joiepediatricdentistry.com"
                        className="whitespace-nowrap w-full"
                    >
                        Verify My Insurance
                    </Button>
                </div>

                <h4 className="text-h4-dec text-[var(--color-light-black)] w-full md:w-[460px] xl:w-lg">
                    No insurance, No problem! Ask us about our in-house membership plan!
                </h4>

                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                    <img
                        src={stroke}
                        alt=""
                        className="absolute -right-4 -bottom-20 max-w-none"
                    />
                </div>
            </div>

            <div className="lg:order-1 lg:w-1/2">
                <img
                    src={girl}
                    alt="Happy girl"
                    className="h-[420px] w-full md:h-full object-cover rounded-4xl lg:rounded-tl-none lg:rounded-bl-none"
                />
            </div>
        </section>
    )
}
export default Insurance
