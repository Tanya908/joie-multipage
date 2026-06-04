import referBg from "../../assets/for-professinals/referBg.svg";
import line from "../../assets/text-lines/line.svg";
import Blob from "../../components/Blob.tsx";

type RefersProps = {
    text: string[];
};

export const refers: RefersProps = {
    text: [
        "Extra time and flexible scheduling for appointments",
        "Sensory-friendly environment and desensitization visits",
        "Gentle communication and behavior guidance techniques",
        "Collaboration with caregivers and healthcare providers",
        "Sedation options for children who need additional support",
    ],
};

const Refer = () => {
    return (
        <section className="content-padding relative mt-20 pt-36 pb-20 lg:pt-24 lg:pb-10">
            <img
                src={referBg}
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-full -z-10 w-full"
                style={{objectFit: "fill"}}
            />

           <div className="grid lg:grid-cols-[40%_1fr] gap-14 lg:gap-24 layout-container">
               <h1 className="text-h1">
                   Why refer to Joie Pediatric  {" "}
                   <span className="relative inline-block">
                    Dentistry?
                    <img src={line}
                         alt="" aria-hidden="true"
                         className="absolute left-6 -bottom-8 pointer-events-none scale-75 lg:scale-110"
                    />
                </span>
               </h1>

               <div className="flex flex-col gap-2">
                   {refers.text.map((need, index) => (
                       <div key={index} className="flex gap-3 items-center">
                           <Blob className="text-[var(--color-light-gray)] shrink-0 w-3 h-3" />
                           <p className="text-h4 text-[var(--color-light-black)] pt-3">
                               {need}
                           </p>
                       </div>
                   ))}
               </div>
           </div>
        </section>
    )
}
export default Refer
