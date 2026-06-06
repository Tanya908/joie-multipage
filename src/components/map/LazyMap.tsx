import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const MapBox = lazy(() => import("./MapBox"));

type LazyMapProps = {
    className?: string;
};

export default function LazyMap({ className }: LazyMapProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "300px",
    });

    return (
        <div
            ref={ref}
            className={`w-full h-full ${className ?? ""}`}
        >
            {inView ? (
                <Suspense
                    fallback={
                        <div className="w-full h-full bg-gray-100 animate-pulse" />
                    }
                >
                    <MapBox className={className} />
                </Suspense>
            ) : (
                <div className="w-full h-full bg-gray-100" />
            )}
        </div>
    );
}