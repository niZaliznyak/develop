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
            "w-full font-bold w-40 h-9",
            {
                "transition-colors text-white bg-sky-500 hover:bg-sky-600":
                    isPrimary,
                "bg-none hover:bg-slate-200":
                    isGhost,
                "flex justify-center items-center": !isAccent,
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