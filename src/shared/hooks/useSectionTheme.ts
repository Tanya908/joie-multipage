import { useState, useEffect } from "react";
import { sectionThemes, type SectionTheme } from "../sectionThemes";

export const useSectionTheme = (theme: SectionTheme) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    const currentTheme = sectionThemes[theme];

    return {
        isMobile,
        currentTheme,
        style: isMobile
            ? { backgroundColor: currentTheme.mobileBg }
            : {},
    };
};