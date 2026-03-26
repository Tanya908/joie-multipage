import { NavLink} from "react-router-dom";
import mainLogo from "../../assets/mainLogoPink.svg"
import dot from "../../assets/dot.svg"
import BurgerButton from "../BurgerButton.tsx";
import {useEffect, useState} from "react";
import {navLinks} from "../../shared/navigation.ts";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 m-4 md:m-8 z-50 flex flex-col bg-[var(--color-light-red)] rounded-3xl">
                <div className="flex items-center justify-between gap-6 p-4 lg:px-12 lg:py-5">
                   <div className="flex lg:gap-4 xl:gap-10">
                       <NavLink to="/">
                           <img src={mainLogo} alt="JOIE - Pediatric Dentisity" className="w-32 md:w-[170px]"/>
                       </NavLink>

                       <nav className="hidden lg:grid grid-cols-4 gap-y-3 justify-items-start text-center
                                       xl:flex xl:justify-between xl:items-center xl:gap-8 max-w-[700px]">
                           {navLinks.map((link) => (
                               <NavLink
                                   key={link.name}
                                   to={link.path}
                                   className={({ isActive }) =>
                                       `flex items-center justify-center gap-1 text-p2 text-center whitespace-nowrap
                                        group text-hover min-w-0
                                        ${isActive ? "text-[var(--color-red)]" : ""}`
                                   }
                               >
                                       <img
                                           src={dot}
                                           alt="dot"
                                           className="shrink-0 w-2 h-2 rounded-full bg-[var(--color-red)] opacity-0 scale-0
                                                      transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                                       />
                                   {link.name}
                               </NavLink>
                           ))}
                       </nav>
                   </div>

                    <div className="flex gap-4 md:gap-8">
                        <a href="" className="hidden md:flex py-2 px-1.5 md:py-4 md:px-10 border border-[var(--color-red)]
                                              rounded-4xl text-btn text-[var(--color-red)] text-center whitespace-nowrap"
                        >
                            Schedule now
                        </a>

                        <BurgerButton
                            isOpen={isOpen}
                            onClick={() => setIsOpen((prev)=>!prev)}
                            className="lg:hidden"
                        />
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden
                            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                          `}
            >
                <nav className="flex flex-col items-center gap-6 pt-28 md:pt-44">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-p1 text-hover group flex items-center gap-3"
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <a href="" className="py-2 md:py-4 px-1.5 md:px-10 border border-[var(--color-red)] rounded-4xl
                                          text-btn text-[var(--color-red)] text-center whitespace-nowrap"
                    >
                        Schedule now
                    </a>
                </nav>
            </div>
        </>
    )
}
export default Header
