import Accordion from "./Accordion.tsx";
import ShapeImg from "../../components/ShapeImg.tsx";


type ServiceSectionProps = {
    title: string;
    subtitle: string;
    image: string;
    bgColor: string;
    imgMask: string;
    accordionItems: {
        title: string;
        content: string;
    }[];
};

const ServiceSection = ({
                            title,
                            subtitle,
                            image,
                            bgColor,
                            imgMask,
                            accordionItems,
                        }: ServiceSectionProps) => {
    return (
        <section className={`py-20 ${bgColor} px-4 md:px-8`}>
                <div className="md:text-center md:mx-auto">
                    <h1 className="text-h1">{title}</h1>
                    <h4 className="text-h4 mt-4 text-[var(--color-light-black)]">{subtitle}</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center justify-center mt-20">

                    <div className="md:self-start">
                        <ShapeImg
                            src={image}
                            alt={title}
                            mask={imgMask}
                            wrapperClassName="w-full"
                            imgClassName="w-full h-full object-cover origin-bottom max-w-2xl"
                        />
                    </div>

                    <Accordion items={accordionItems} />
                </div>
        </section>
    );
};

export default ServiceSection;