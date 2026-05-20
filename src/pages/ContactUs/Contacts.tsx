import {Button} from "../../components/Button.tsx";

const Contacts = () => {
    return (
        <section className="mt-20 px-4 md:px-8">
            <div className="py-12 md:py-20 px-3 md:px-10 lg:px-16 bg-[var(--color-light-blue)] rounded-[40px]">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 md:items-start md:gap-24">
                        <div>
                            <h3 className="text-h3 mb-4">Phone/SMS:</h3>
                            <a href="tel:+12015006314" className="text-h4 text-hover">(201) 500-6314</a>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <h3 className="text-h3 mb-4">Address:</h3>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=125+E+Main+St+Ramsey+NJ+07446"
                                className="text-h4 text-hover"
                            >
                                125 E. Main St. Ramsey, NJ 07446
                            </a>
                        </div>
                    </div>

                    <div
                        className="grid md:grid-cols-2 md:gap-24 lg:gap-52 items-center gap-4 mt-12 w-full md:max-w-3xl"
                    >
                        <Button
                            primary
                            href="mailto:info@joiepediatricdentistry.com"
                            external
                            className="w-full"
                        >
                            Email our team
                        </Button>

                        <Button
                            variant="secondary"
                            href="tel:+12015006314"
                            className="w-full"
                        >
                            Call/Text Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts
