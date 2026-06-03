import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    children: ReactNode;
    className?: string;

    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    secondaryMobile?: boolean;

    href?: string;
    external?: boolean;

    onClick?: () => void;
    disabled?: boolean;

    variant?: Variant;
    type?: "button" | "submit" | "reset";
};

type Variant = "primary" | "secondary" | "tertiary" | "secondaryMobile";

export const Button = ({
                           children,
                           className = "",
                           href,
                           external,
                           onClick,
                           disabled,
                           variant,
                           type = "button",
                       }: ButtonProps) => {
    const variantMap: Record<Variant, string> = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        tertiary: "btn-tertiary",
        secondaryMobile: "btn-secondary-mobile",
    };

    const variantClass = variantMap[variant || "primary"];

    const classes = `${variantClass} ${className}`;

    if (href && external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                {children}
            </a>
        );
    }

    if (href) {
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={classes}>
            {children}
        </button>
    );
};