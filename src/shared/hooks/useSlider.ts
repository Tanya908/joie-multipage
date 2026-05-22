import { useState } from "react";

type UseSliderProps = {
    blockLength: number;
    visibleCards?: number;
};

export const useSlider = ({
                              blockLength,
                              visibleCards = 1,
                          }: UseSliderProps) => {

    const [active, setActive] = useState(0);

    const maxSlides = Math.max(blockLength - visibleCards,0);

    const next = () => {
        setActive(prev => Math.min(prev + 1, maxSlides));
    };

    const prev = () => {
        setActive(prev =>Math.max(prev - 1, 0));
    };

    const goTo = (index: number) => {
        setActive(Math.max(0,Math.min(index, maxSlides)));
    };

    return {active,next,prev,goTo,maxSlides};
};