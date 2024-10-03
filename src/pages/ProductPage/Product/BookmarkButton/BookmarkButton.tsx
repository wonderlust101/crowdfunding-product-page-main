import React from "react";
import "./BookmarkButton.scss";

type ButtonProps = {
    children?: React.ReactNode;
    variant: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    ariaLabel?: string;
    disabled?: boolean;
}

export default function BookmarkButton({children, variant, onClick, type, ariaLabel, disabled}: ButtonProps) {
    return (
        <>
            <button type={type}
                    className={`bookmark-button ${variant}`}
                    onClick={onClick}
                    aria-label={ariaLabel}
                    disabled={disabled}>
                {children}
            </button>

        </>
    );
}
