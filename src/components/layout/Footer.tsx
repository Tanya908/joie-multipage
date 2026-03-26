import {Link, NavLink} from "react-router-dom";
import mainLogoDark from "../../assets/mainLogoDark.svg"
import decorativeOval from "../../assets/decorativeOval.svg"
import decorativeWaves from "../../assets/decorativeWaves.svg"
import {navLinks} from "../../shared/navigation.ts";
import {Button} from "../Button.tsx";

type SocialLink = {
    name: string;
    path: string;
};

const socials:SocialLink[] =  [
    {name:"Instagram", path:"https://www.instagram.com/joiepediatricdentistry/"},
    {name:"Tik tok", path:"https://www.tiktok.com/@joiepediatricdentistry"},
    {name:"Facebook", path:"https://www.facebook.com/people/Joie-Pediatric-Dentistry/61581976546812/"},
]

const Footer = () => {
    return (
        <footer className="mt-20 pb-16 px-4 md:px-8 rounded-t-[40px] bg-[var(--color-light-yellow)]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="md:col-span-2 lg:col-span-4 flex items-center justify-center mt-16">
                    <img
                        src={mainLogoDark}
                        alt="JOIE - Pediatric Dentisity"
                        className="w-28 md:w-40"
                    />
                </div>

                <div className="w-full text-center footer-box">
                   <div className="relative inline-block px-8 py-3">
                       <h4 className="text-h4 z-10" >Socials</h4>
                       <img src={decorativeOval}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none scale-125"
                       />
                   </div>
                    <ul className="mt-4 space-y-4">
                        {socials.map((social) => (
                                <li key={social.path}>
                                    <a href={social.path}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-p1 text-[var(--color-light-black)] text-hover"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full flex flex-col items-center gap-4 footer-box">
                    <h4 className="text-h4">Company</h4>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="flex text-p1 text-[var(--color-light-black)] text-hover"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="w-full lg:col-span-2 flex flex-col justify-center items-center text-center footer-box px-3">
                    <div className="relative inline-block px-8 py-3">
                        <h4 className="relative text-h4 z-10 whitespace-nowrap" >Showtimes (Hours)</h4>
                        <img src={decorativeWaves}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-1/2 -translate-x-1/2 top-[34px] object-contain pointer-events-none"
                        />
                    </div>
                    <p className="text-p1 text-[var(--color-light-black)] w-full lg:max-w-md text-center mx-auto">
                        Mon–Thu 8:00–5:00 <span className="footer-dots"></span>
                        Fri 8:00–2:00 <span className="footer-dots"></span>
                        Sat (select dates) 9:00–1:00 <span className="footer-dots"></span>
                        Sun Closed
                    </p>

                    <div className="h-px w-full bg-[var(--color-light-gray)] my-6"></div>

                    <div className="mb-6">
                        <p className="text-p1-decorative mb-4">Phone/SMS</p>
                        <a
                            href="tel:+12015006314"
                            className="text-p2 text-[var(--color-light-black)] text-hover"
                        >(201) 500-6314</a>
                    </div>

                    <div>
                        <p className="text-p1-decorative mb-4">Address</p>
                        <a href="https://maps.app.goo.gl/FJxF5gCnrWSCYuXg7"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-p2 text-[var(--color-light-black)] text-hover"
                        >
                            125 E. Main St. Ramsey, NJ 07446
                        </a>
                    </div>
                </div>

                <div className="flex flex-col h-full lg:col-span-4 text-center">
                    <div className="flex flex-col items-center mb-10">
                        <h4 className="text-h4 mb-6">Contact Joie Pediatric Dentistry</h4>
                        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 mb-4 w-full lg:max-w-3xl">
                            <Button
                                primary
                                href="https://joiepediatric.meetkasper.com/schedule-appointment"
                                external
                                className="whitespace-nowrap w-full"
                            >
                                Schedule now
                            </Button>

                            <Button
                                variant="secondary"
                                href="tel:+12015006314"
                                className="whitespace-nowrap w-full"
                            >
                                Call/Text Us
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-14 md:my-auto md:mb-0">
                        <Link to="/privacy-policy" className="text-p2 text-[var(--color-light-black)] text-hover">
                            Privacy Policy
                        </Link>
                        <p className="text-p2 text-[var(--color-light-black)]">© 2025 Joie Pediatric Dentistry. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
