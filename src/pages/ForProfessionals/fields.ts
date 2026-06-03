import type {Field} from "./FormFields.tsx";

export const referringProviderFields: Field[] = [
    {
        name: "providerName",
        label: "Provider Name",
        type: "text",
        placeholder: "e.g., Dr. Jane Smith",
        required: true,
    },
    {
        name: "practice",
        label: "Practice",
        type: "text",
        placeholder: "Your clinic/hospital name",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Where we should send updates",
        required: true,
    },
    {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "Direct line for quick questions",
        required: true,
    },
];

export const patientFamilyFields: Field[] = [
    {
        name: "childName",
        label: "Child’s Full Name",
        type: "text",
        placeholder: "Patient’s legal first & last name",
        required: true,
    },
    {
        name: "parentName",
        label: "Parents Name",
        type: "text",
        placeholder: "e.g., Jane Doe",
        required: true,
    },
    {
        name: "parentContact",
        label: "Parent/Guardian Contact",
        type: "text",
        placeholder: "Best phone or email for scheduling",
        required: true,
        fullWidth: true,
    },
];

export const referralDetailsFields: Field[] = [
    {
        name: "reason",
        label: "Reason",
        type: "text",
        placeholder:
            "Choose primary concern (caries, trauma, behavior, airway, ortho, other)",
        fullWidth: true,
        required: true,
    },
    {
        name: "priority",
        label: "Priority",
        type: "text",
        placeholder: "Routine or urgent",
        fullWidth: true,
        required: true,
    },
];