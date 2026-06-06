export type FormData = {
    providerName: string;
    practice: string;
    email: string;
    phone: string;

    childName: string;
    parentName: string;
    parentContact: string;

    reason: string;
    priority: string;

    consent: boolean;
    contactFamily: boolean;

    attachments?: FileList;
};