import cn from "classnames";
import { forwardRef } from "react";

type ButtonProps = {
    onClick?: React.HTMLProps<HTMLButtonElement>["onClick"];
    variant?:
        | "primary"
        | "secondary"
        | "ghost"
        | "accent"
    className?: string;
    isDisabled?: boolean;
    form?: string;
    type?: JSX.IntrinsicElements["button"]["type"];
    children?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            onClick,
            children,
            variant = "primary",
            className,
            isDisabled,
            form,
            type = "button"
        },
        ref
    ) => {
        const isPrimary = variant === "primary";
        const isGhost = variant === "ghost";
        const isAccent = variant === "accent";
        const hasTextSize = className?.includes("text");

        const classes = cn(
            "w-full font-semibold",
            {
                "bg-accent hover:bg-accent1 disabled:bg-accent2 text-gray-0 transition-colors":
                    isPrimary,
                "text-black border border-accent2 hover:border-accent disabled:border-border disabled:text-gray-2":
                    isGhost,

                "flex justify-center items-center h-58p rounded-20p": !isAccent,
                "text-16": !hasTextSize && !isAccent,
                "text-14": !hasTextSize && isAccent
            },
            className
        );
        return (
            <button
                ref={ref}
                form={form}
                disabled={isDisabled}
                type={type}
                className={classes}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
);