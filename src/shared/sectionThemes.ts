import mapBackgroundPink from "../assets/map/mapBackgroundPink.svg";
import mapBackgroundBlue from "../assets/map/mapBackgroundBlue.svg";

export type SectionTheme = "pink" | "blue";

export const sectionThemes: Record<SectionTheme, {
    mobileBg: string;
    desktopBg: string;
}> = {
    pink: {
        mobileBg: "var(--color-light-red)",
        desktopBg: mapBackgroundPink,
    },
    blue: {
        mobileBg: "var(--color-light-blue)",
        desktopBg: mapBackgroundBlue,
    },
};