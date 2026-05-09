import { useEffect, useState } from "react";

type UseSliderProps = {
    blockLength: number;
    desktopBreakpoint?: number;
};

export const useSlider = ({ blockLength, desktopBreakpoint = 1024, }: UseSliderProps) => {
    const [active, setActive] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    const next = () => {
        if (screenWidth >= desktopBreakpoint) return;

        if (active < blockLength - 1) {
            setActive((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (screenWidth >= desktopBreakpoint) return;

        if (active > 0) {
            setActive((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        active,
        screenWidth,
        next,
        prev,
        setActive,
    };
};