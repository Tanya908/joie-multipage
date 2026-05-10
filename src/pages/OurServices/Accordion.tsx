import { useState } from "react";
import Blob from "../../components/Blob";
import ArrowIcon from "../../assets/our-services/service-section/arrowIcon.svg";

type AccordionItem = {
    title: string;
    content: string;
};

type AccordionProps = {
    items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>();

    return (
        <div className="w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="border-b border-[var(--color-light-blue)] py-4 accordion-hover"
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index) }
                            className="w-full flex justify-between items-center gap-8 text-left"
                        >
                            <p className="text-p1-decorative text-[var(--color-black)] ">{item.title}</p>

                            <div className="relative inline-block w-12 h-12 shrink-0">
                                <Blob className="text-[var(--color-red)] object-contain w-full h-full"/>
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src={ArrowIcon}
                                        alt="" aria-hidden="true"
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </span>
                            </div>
                        </button>

                        {isOpen && (
                            <div className="mt-4">
                                <p className="text-p1 w-full lg:w-[90%]">
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;