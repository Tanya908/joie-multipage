import type {Field} from "./FormFields.tsx";

export const referringProviderFields: Field[] = [
    {
        name: "providerName",
        label: "Provider Name",
        type: "text",
        placeholder: "e.g., Dr. Jane Smith",
        required: true,
        pattern: /^[A-Za-zÀ-ÿ.' -]+$/,
        patternMessage: "Only letters allowed",
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
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        patternMessage: "Please enter a valid email",
    },
    {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "Direct line for quick questions",
        required: true,
        pattern:  /^\d{10}$/,
        patternMessage: "Use a valid phone number (10 digits)",
    },
];

export const patientFamilyFields: Field[] = [
    {
        name: "childName",
        label: "Child’s Full Name",
        type: "text",
        placeholder: "Patient’s legal first & last name",
        required: true,
        pattern: /^[A-Za-zÀ-ÿ' -]+$/,
        patternMessage: "Only letters allowed",
    },
    {
        name: "parentName",
        label: "Parents Name",
        type: "text",
        placeholder: "e.g., Jane Doe",
        required: true,
        pattern: /^[A-Za-zÀ-ÿ' -]+$/,
        patternMessage: "Only letters allowed",
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
        pattern: /^[A-Za-zÀ-ÿ' -]+$/,
        patternMessage: "Only letters allowed",
    },
];