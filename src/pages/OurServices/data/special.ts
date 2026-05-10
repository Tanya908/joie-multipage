import maskImg from "../../../assets/our-services/service-section/maskImg.svg";
import kids from "../../../assets/our-services/service-section/kids.webp";



export const special = {
    title: "Special touches for kids",
    subtitle: "We turn dental visits into positive experiences",
    image: kids,
    imgMask: maskImg,
    bgColor: "bg-[var(--color-white)]",

    accordionItems: [
        {
            title: "Ask About Our Comfort Menu!",
            content:
                "Every child experiences dental visits differently, so we offer thoughtful comfort options to help them feel safe, calm, and in control. ",
        },

        {
            title: "TV and music during treatment",
            content:
                "Kids can enjoy their favorite shows, calming visuals, or music during treatment to help make appointments feel more familiar and relaxing.",
        },

        {
            title: "Prize at the end of every visit!",
            content:
                "We love celebrating brave smiles. After each visit, children can choose a small prize as a fun reward for their hard work and courage.",
        },
    ],
};