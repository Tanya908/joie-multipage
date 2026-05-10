import ShapeImg from "../../components/ShapeImg.tsx";
import needsImg from "../../assets/our-services/service-section/needsImg.webp"
import needsMask from "../../assets/our-services/service-section/needsMask.svg"
import Blob from "../../components/Blob.tsx";

type NeedsProps = {
    text: string[];
};

export const needs: NeedsProps = {
    text: [
        "Extra time and flexible scheduling for appointments",
        "Sensory-friendly environment and desensitization visits",
        "Gentle communication and behavior guidance techniques",
        "Collaboration with caregivers and healthcare providers",
        "Sedation options for children who need additional support",
    ],
};

const Needs = () => {
    return (
        <section className="py-20 mt-20 px-4 md:px-8 bg-[var(--color-light-blue)]">
            <div className="w-full md:text-center flex flex-col items-start md:items-center justify-center ">
                <h1 className="text-h1 w-full max-w-3xl">
                    Sensory-friendly, special needs pediatric care
                </h1>
                <h4 className="text-h4 mt-4 text-[var(--color-light-black)] max-w-2xl">
                    Our team is specially trained to provide gentle, individualized care for children with sensory sensitivities, developmental differences, or medical needs.
                </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center justify-center">
                <div className="md:self-start">
                    <ShapeImg
                        src={needsImg}
                        alt="Child visiting the dentist"
                        mask={needsMask}
                        wrapperClassName="w-full"
                        imgClassName="w-full h-full object-cover origin-bottom max-w-3xl"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    {needs.text.map((need, index) => (
                        <div key={index} className="flex gap-3 items-center mb-6">
                            <Blob className="text-[var(--color-red)] shrink-0 w-3 h-3" />

                            <p className="text-p1-decorative text-[var(--color-black)]">
                                {need}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Needs
