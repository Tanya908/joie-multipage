import Blob from "../../components/Blob.tsx";
import uploadIcon from "../../assets/for-professinals/form/uploadIcon.svg"
import checkboxIcon from "../../assets/for-professinals/form/checkboxIcon.svg"
import {Button} from "../../components/Button.tsx";
import FormFields from "./FormFields.tsx";
import {patientFamilyFields, referralDetailsFields, referringProviderFields} from "./fields.ts";
import { useForm } from "react-hook-form";
import type {FormData} from "../../shared/formTypes.ts";

type ContactProps = {
    heading:string;
    text:string;
    href:string;
}

type CheckboxProps = {
    name: keyof FormData;
    text:string;
    required?: boolean;
}

const Contact: ContactProps[] = [
    {
        heading: "Email",
        text: "info@joiepediatricdentistry.com",
        href: "mailto:info@joiepediatricdentistry.com",
    },
    {
        heading: "Phone/SMS",
        text: "(201) 500-6314",
        href: "tel:+12015006314",
    },
    {
        heading: "Address",
        text: "125 E. Main St. Ramsey, NJ 07446",
        href: "https://www.google.com/maps/search/?api=1&query=125+E+Main+St+Ramsey+NJ+07446",
    },
];

const Checkbox:CheckboxProps[] = [
    {name: "consent",text:"I have consent to share this information.", required:true},
    {name: "contactFamily",text:"OK to contact the family directly to schedule.", required:false}
]

const Form = () => {
    const {register,handleSubmit,formState: {errors,isValid,}, } = useForm<FormData>({mode: "onTouched",});

    const onSubmit = (data: FormData) => {console.log(data);};

    return (
        <section className="w-full content-padding mt-20">
            <div className="mx-auto bg-[var(--color-light-blue)] rounded-[48px] px-3 md:px-10 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-h1 mb-1.5">Referral form</h1>
                        <p className="text-p1">* = required</p>
                    </div>

                    <div className="border-y border-[var(--color-light-gray)] py-4 mb-10">
                        <h4 className="text-h4-dec md:text-3xl text-center mb-6">
                            Our office contact information
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            {Contact.map((item, index) => (
                                <div key={index}>
                                    <p className="text-p1-decorative mb-2">{item.heading}</p>

                                    <a
                                        href={item.href} className="text-p2 text-hover"
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    >
                                        {item.text}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormFields title="Referring provider"
                                    fields={referringProviderFields}
                                    register={register}
                                    errors={errors}

                        />

                        <FormFields title="Patient & family"
                                    fields={patientFamilyFields}
                                    register={register}
                                    errors={errors}

                        />

                        <FormFields title="Referral details"
                                    fields={referralDetailsFields}
                                    register={register}
                                    errors={errors}

                        />

                        <div className="md:flex md:flex-col md:items-center md:justify-center">
                            <label className="flex items-center gap-3 cursor-pointer w-fit">
                                <div className="relative inline-block w-8 h-8 shrink-0">
                                    <Blob className="text-[var(--color-red)] object-contain w-full h-full"/>
                                    <span className="absolute inset-0 flex items-center justify-center">
                                    <img src={uploadIcon} alt="" aria-hidden="true" className="w-4 h-4"/>
                                </span>
                                </div>
                                <span className="text-p1 text-[var(--color-black)] border-b border-[var(--color-black)] pb-2">
                                    X-rays, Photos, Notes
                                </span>
                                <input type="file" className="hidden" multiple />
                            </label>
                        </div>
                        <div className="mt-6 mb-12 grid justify-start md:justify-center gap-3">
                            {Checkbox.map((item) => (
                                <label key={item.name} className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register(item.name, {required: item.required || false,})}
                                        className="peer absolute opacity-0 w-0 h-0"
                                    />
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[var(--color-black)]
                                                     bg-transparent transition-all peer-checked:bg-[var(--color-pink)] peer-checked:border-[var(--color-pink)]
                                                     peer-checked:[&>img]:opacity-100 peer-checked:[&>img]:scale-100"
                                    >
                                        <img
                                            src={checkboxIcon} alt="" aria-hidden="true"
                                            className="w-3 h-3 opacity-0 scale-75 transition-all"
                                        />
                                    </span>
                                    <span className="text-p2 text-[var(--color-gray)] leading-relaxed">
                                        {item.text}
                                        {item.required && "*"}
                                    </span>
                                </label>
                            ))}
                        </div>
                        <div className="flex flex-col items-center gap-4 mb-4 w-full lg:flex-row lg:gap-8">
                            <Button
                                type="submit"
                                primary
                                disabled={!isValid}
                                className="whitespace-nowrap w-full xl:w-auto mx-auto"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Form
