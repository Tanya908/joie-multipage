import lineWaves from "../../assets/text-lines/lineWaves.svg"
import {Button} from "../Button.tsx";

import MapBox from "./MapBox.tsx";
import type {SectionTheme} from "../../shared/sectionThemes.ts";
import {useSectionTheme} from "../../shared/hooks/useSectionTheme.ts";

type FindUsProps = {
    theme?: SectionTheme;
};

const FindUs = ({ theme = "pink" }: FindUsProps) => {
    const { style, isMobile, currentTheme } = useSectionTheme(theme);
    return (
        <section className="relative mt-20 mb-32"
                 style={style}
        >
            {!isMobile && (
                <img
                    src={currentTheme.desktopBg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "fill", zIndex: 0 }}
                />
            )}

            <div className="relative py-14 md:pt-28 md:pb-24 grid grid-cols-1
                            lg:grid-cols-[1fr_2fr] gap-10 content-padding"
                 style={{ zIndex: 1 }}
            >
                <div className="bg-[var(--color-white)] px-3 py-8 md:p-10 rounded-4xl">
                    <h2 className="text-h2 w-full mb-3">
                        Let’s Make Your {" "}
                        <span className="relative inline-block">
                            First Visit Easy
                            <img src={lineWaves}
                                 alt=""
                                 aria-hidden="true"
                                 className="absolute left-10 top-8 md:top-10 pointer-events-none scale-75"
                            />
                        </span>
                    </h2>

                    <p className="text-p1 mb-4">
                        Whether you’re from Ramsey, Mahwah, Allendale, or anywhere in Bergen County, we’d love to welcome your family to ours.
                    </p>

                    <p className="text-p2-caps mb-2">
                        Showtimes (Hours)
                    </p>

                    <p className="text-p2">
                        Mon–Thu 8:00–5:00 <span className="text-dots"></span>
                        Fri 8:00–2:00 <span className="text-dots"></span>
                        Sat (select dates) 9:00–1:00 <span className="text-dots"></span>
                        Sun Closed
                    </p>


                    <div className="flex flex-col md:flex-row lg:flex-col gap-3 mt-8 w-full"
                    >
                        <Button
                            primary
                            href="https://joiepediatric.meetkasper.com/schedule-appointment"
                            external
                            className="whitespace-nowrap w-full"
                        >
                            Schedule online anytime
                        </Button>

                        <Button
                            variant="secondary"
                            href="mailto:joiepediatricdentistry.com"
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
