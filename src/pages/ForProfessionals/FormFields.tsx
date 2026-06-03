import line from "../../assets/text-lines/line.svg";
import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {FormData} from "../../shared/formTypes.ts";

export type Field = {
    name: keyof FormData;
    label: string;
    type: string;
    placeholder: string;
    fullWidth?: boolean;
    required?: boolean;
};

type FormFieldsProps = {
    title: string;
    fields: Field[];
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
};

const FormFields = ({ title, fields, register,errors }: FormFieldsProps) => {
    return (
        <div className="mb-10">
            <div className="flex flex-col items-center mb-6">
                <div className="relative inline-block">
                    <h3 className="text-h4-dec text-center"> {title} </h3>
                    <img
                        src={line} alt="" aria-hidden="true"
                        className="absolute left-1/2 -translate-x-1/2 -bottom-1
                                   scale-50 pointer-events-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field) => (
                    <div key={field.name} className={field.fullWidth ? "md:col-span-2" : ""}>
                        <label className="block text-p2 text-[var(--color-black)] mb-1">
                            {field.label}
                            {field.required && "*"}
                        </label>

                        <input
                            {...register(field.name, {
                                required: field.required? `${field.label} is required`: false,
                            })}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full rounded-full bg-[var(--color-white)] px-5 py-4 outline-none
                                       text-menu form-input hover:text-[var(--color-black)]"
                        />

                        {
                            errors[field.name] && (
                                <p className="text-p2 text-[var(--color-white)] bg-[var(--color-red)]
                                              pl-4 pr-2 pb-0.5 rounded-xl"
                                >
                                    {errors[field.name]?.message as string}
                                </p>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormFields;