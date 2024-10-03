import React from "react";
import "./Button.scss";

type ButtonProps = {
    children?: React.ReactNode;
    variant: string;
    location?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    ariaLabel?: string;
    disabled?: boolean;
    value?: string | number;
}

export default function Button({children, variant, location, onClick, type, ariaLabel, disabled, value}: ButtonProps) {
    return (
        <>
            {location ? (
                <a href={location} className={`button ${variant}`} aria-label={ariaLabel}>
                    {children}
                </a>
            ) : (
                <button type={type} className={`button ${variant}`} onClick={onClick} aria-label={ariaLabel} value={value} disabled={disabled}>
                    {children}
                </button>
            )}
        </>
    );
}
