import { useRef } from "react";

type UseSwipeSliderProps = {
    next: () => void;
    prev: () => void;
    threshold?: number;
};

export const useSwipeSlider = ({
                                   next,
                                   prev,
                                   threshold = 60,
                               }: UseSwipeSliderProps) => {
    const touchStartX = useRef<number | null>(null);

    const handleTouchStart = (
        e: React.TouchEvent
    ) => {
        touchStartX.current =
            e.touches[0].clientX;
    };

    const handleTouchEnd = (
        e: React.TouchEvent
    ) => {
        if (touchStartX.current === null) return;

        const touchEndX =
            e.changedTouches[0].clientX;

        const distance =
            touchStartX.current - touchEndX;

        if (distance > threshold) {
            next();
        }

        if (distance < -threshold) {
            prev();
        }

        touchStartX.current = null;
    };

    return {
        handleTouchStart,
        handleTouchEnd,
    };
};