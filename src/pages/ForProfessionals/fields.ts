import type {Field} from "./FormFields.tsx";

export const referringProviderFields: Field[] = [
    {
        label: "Provider Name*",
        type: "text",
        placeholder: "e.g., Dr. Jane Smith",
    },
    {
        label: "Practice*",
        type: "text",
        placeholder: "Your clinic/hospital name",
    },
    {
        label: "Email*",
        type: "email",
        placeholder: "Where we should send updates",
    },
    {
        label: "Phone*",
        type: "tel",
        placeholder: "Direct line for quick questions",
    },
];

export const patientFamilyFields: Field[] = [
    {
        label: "Child’s Full Name*",
        type: "text",
        placeholder: "Patient’s legal first & last name",
    },
    {
        label: "Parents Name",
        type: "text",
        placeholder: "e.g., Jane Doe",
    },
    {
        label: "Parent/Guardian Contact*",
        type: "text",
        placeholder: "Best phone or email for scheduling",
        fullWidth: true,
    },
];

export const referralDetailsFields: Field[] = [
    {
        label: "Reason*",
        type: "text",
        placeholder:
            "Choose primary concern (caries, trauma, behavior, airway, ortho, other)",
        fullWidth: true,
    },
    {
        label: "Priority*",
        type: "text",
        placeholder: "Routine or urgent",
        fullWidth: true,
    },
];