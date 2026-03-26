import {Link, NavLink} from "react-router-dom";
import mainLogoDark from "../../assets/mainLogoDark.svg"
import decorativeOval from "../../assets/decorativeOval.svg"
import decorativeWaves from "../../assets/decorativeWaves.svg"

type NavLinkItem = {
    name: string;
    path: string;
};

type SocialLink = {
    name: string;
    path: string;
};

const navLinks: NavLinkItem[] = [
    { name: "About Us", path: "/about" },
    { name: "First Visit", path: "/first-visit" },
    { name: "Our Services", path: "/services" },
    { name: "For Professionals", path: "/professionals" },
    { name: "For Parents", path: "/parents" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact us", path: "/contact" },
];

const socials:SocialLink[] =  [
    {name:"Instagram", path:"https://www.instagram.com/joiepediatricdentistry/"},
    {name:"Tik tok", path:"https://www.tiktok.com/@joiepediatricdentistry"},
    {name:"Facebook", path:"https://www.facebook.com/people/Joie-Pediatric-Dentistry/61581976546812/"},
]


const Footer = () => {
    return (
        <footer className="mt-20 pb-16 px-4 md:px-8 rounded-t-[40px] bg-[var(--color-light-yellow)]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="mt-16 md:col-span-2 lg:col-span-4 flex items-center justify-center">
                    <img
                        src={mainLogoDark}
                        alt="JOIE - Pediatric Dentisity"
                        className="w-28 md:w-40"
                    />
                </div>

                <div className="w-full text-center border border-[var(--color-light-gray)] rounded-4xl p-8">
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
                                       className="text-p1 text-[var(--color-light-black)] hover:text-[var(--color-red)] active:text-[var(--color-red)]"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full flex flex-col items-center gap-4 border border-[var(--color-light-gray)] rounded-4xl p-8">
                    <h4 className="text-h4">Company</h4>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="flex text-p1 text-[var(--color-light-black)] hover:text-[var(--color-red)] active:text-[var(--color-red)]"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="w-full lg:col-span-2 flex flex-col justify-center items-center text-center border border-[var(--color-light-gray)] rounded-4xl py-8 px-3">
                    <div className="relative inline-block px-8 py-3">
                        <h4 className="relative text-h4 z-10 whitespace-nowrap" >Showtimes (Hours)</h4>
                        <img src={decorativeWaves}
                             alt=""
                             aria-hidden="true"
                             className="absolute left-1/2 -translate-x-1/2 top-[34px] object-contain pointer-events-none"
                        />
                    </div>
                    <p className="text-p1 text-[var(--color-light-black)] w-full lg:max-w-md">
                        Mon–Thu 8:00–5:00 <span className=" inline-block mx-1 w-2 h-2 bg-[var(--color-light-black)] rounded-full align-middle "></span>
                        Fri 8:00–2:00 <span className="inline-block mx-1 w-2 h-2 bg-[var(--color-light-black)] rounded-full align-middle"></span>
                        Sat (select dates) 9:00–1:00 <span className="inline-block mx-1 w-2 h-2 bg-[var(--color-light-black)] rounded-full align-middle"></span>
                        Sun Closed
                    </p>

                    <div className="h-px w-full bg-[var(--color-light-gray)] my-6"></div>

                    <div className="mb-6">
                        <p className="text-p1-decorative mb-4">Phone/SMS</p>
                        <a
                            href="tel:+12015006314"
                            className="text-p2 text-[var(--color-light-black)] hover:text-[var(--color-red)] active:text-[var(--color-red)]"
                        >(201) 500-6314</a>
                    </div>

                    <div>
                        <p className="text-p1-decorative mb-4">Address</p>
                        <a href="https://maps.app.goo.gl/FJxF5gCnrWSCYuXg7"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-p2 text-[var(--color-light-black)] hover:text-[var(--color-red)] active:text-[var(--color-red)]"
                        >
                            125 E. Main St. Ramsey, NJ 07446
                        </a>
                    </div>
                </div>

                <div className="text-center flex flex-col h-full lg:col-span-4">
                    <div className="flex flex-col items-center mb-10">
                        <h4 className="text-h4 mb-6">Contact Joie Pediatric Dentistry</h4>
                        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 mb-4 w-full lg:w-[40%]">
                            <button className="text-btn text-[var(--color-white)] bg-[var(--color-red)] rounded-4xl
                                                w-full py-[18px] px-10 whitespace-nowrap"
                            >
                                Schedule Now
                            </button>
                            <button className="text-btn text-[var(--color-red)] border rounded-4xl w-full py-[18px] px-10">
                                Call/Text Us
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-14 md:my-auto md:mb-0">
                        <Link to="/privacy-policy" className="text-p2 text-[var(--color-light-black)] hover:text-[var(--color-red)] active:text-[var(--color-red)]">
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
