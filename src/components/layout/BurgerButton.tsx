type BurgerButtonProps = {
    isOpen: boolean
    onClick: () => void
    className?: string
}

const BurgerButton = ({ isOpen, onClick,className}: BurgerButtonProps) => {
    const common = {
        transformBox: "fill-box" as const,
        transformOrigin: "center" as const,
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`grid place-items-center ${className ?? ""}`}
        >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <rect
                    x="0"
                    y="16"
                    width="35"
                    height="2.5"
                    rx="1.25"
                    fill="#2E3E4D"
                    style={common}
                    className={`transition-all duration-300 ease-in-out ${
                        isOpen
                            ? "rotate-45"
                            : "-translate-y-[6px]"
                    }`}
                />

                <rect
                    x="0"
                    y="16"
                    width="35"
                    height="2.5"
                    rx="1.25"
                    fill="#2E3E4D"
                    style={common}
                    className={`transition-all duration-300 ease-in-out ${
                        isOpen
                            ? "-rotate-45"
                            : "translate-y-[6px]"
                    }`}
                />
            </svg>
        </button>
    )
}

export default BurgerButton