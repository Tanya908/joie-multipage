import mapLine from "../../assets/mapLine.svg";
import {Button} from "../Button.tsx";
import mapBackground from "../../assets/mapBackground.svg";
import MapBox from "./MapBox.tsx";


const FindUs = () => {
    return (
        <section className="relative mt-20 mb-32">
            <img
                src={mapBackground}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 object-cover min-w-[360px] md:w-full"
            />

            <div className="pt-28 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 px-4 md:px-8">
                <div className="bg-[var(--color-white)] px-3 py-8 md:p-10 rounded-4xl">
                    <h2 className="text-h2 w-full mb-3">
                        Let’s Make Your {" "}
                        <span className="relative inline-block">
                        First Visit Easy
                        <img src={mapLine}
                             alt=""
                             aria-hidden="true"
                             className="absolute top-7 md:top-10 pointer-events-none scale-75"
                        />
                    </span>
                    </h2>

                    <p className="text-p1 text-[var(--color-light-black)] mb-4">
                        Whether you’re from Ramsey, Mahwah, Allendale, or anywhere in Bergen County, we’d love to welcome your family to ours.
                    </p>

                    <p className="text-p2-caps text-[var(--color-light-black)] mb-2">
                        Showtimes (Hours)
                    </p>

                    <p className="text-p2 text-[var(--color-light-black)]">
                        Mon–Thu 8:00–5:00 <span className="footer-dots"></span>
                        Fri 8:00–2:00 <span className="footer-dots"></span>
                        Sat (select dates) 9:00–1:00 <span className="footer-dots"></span>
                        Sun Closed
                    </p>


                    <div className="flex flex-col md:flex-row lg:flex-col gap-3 mt-8 w-full"
                    >
                        <Button
                            primary
                            href="#"
                            external
                            className="whitespace-nowrap w-full"
                        >
                            Schedule online anytime
                        </Button>

                        <Button
                            variant="secondary"
                            href="#"
                            className="whitespace-nowrap w-full"
                        >
                            Call or text us
                        </Button>
                    </div>
                </div>
                <div className="w-full min-h-[520px] rounded-4xl">
                    <MapBox/>
                </div>
            </div>
        </section>
    )
}
export default FindUs
