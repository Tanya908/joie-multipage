import textLine from "../assets/lets-connect/textLine.svg";
import background from "../assets/lets-connect/background.svg";
import backgroundLg from "../assets/lets-connect/backgroundLg.svg";
import {Button} from "./Button.tsx";
import line from "../assets/lets-connect/line.svg"

type ConnectProps = {
    title: string;
    description: string;
}

const LetsConnect = ({title,description}:ConnectProps) => {
    return (
        <section className="relative py-20 px-4 md:px-8 text-center
                            flex flex-col justify-center items-center"
        >

            <img
                src={background} alt="" aria-hidden="true"
                className="absolute top-0 left-0 h-full w-full -z-10 block lg:hidden"
                style={{ objectFit: "fill" }}
            />

            <img
                src={backgroundLg} alt="" aria-hidden="true"
                className="absolute top-0 left-0 h-full w-full -z-10 hidden lg:block"
                style={{ objectFit: "fill" }}
            />

            <h1 className="text-h1 mb-12 w-full max-w-xl relative">
                {title}
                <img
                    src={textLine} alt="" aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-9
                               pointer-events-none w-40 md:w-48"
                />
            </h1>
            <h4 className="text-h4 text-[var(--color-light-black)] max-w-4xl">
                {description}
            </h4>

            <img src={line} alt="" className="my-8" aria-hidden="true"/>

            <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-8 w-full max-w-lg">
                <Button
                    primary
                    href="https://joiepediatric.meetkasper.com/schedule-appointment"
                    external
                    className="whitespace-nowrap w-full"
                >
                    Book Your First Visit
                </Button>

                <Button
                    variant="secondary"
                    href="mailto:joiepediatricdentistry.com"
                    className="whitespace-nowrap w-full"
                >
                    Call or text us
                </Button>
            </div>
        </section>
    )
}
export default LetsConnect
