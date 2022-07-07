import React, { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { createPortal } from "react-dom";

export const MODAL_ROOT = document.getElementById("modal-root")!;

interface ModalControllerProps {
    visible: boolean;
    overlay?: boolean;
    overlayClassName?: {
        visible: string;
        hidden: string;
    };
    modalClassName?: {
        visible: string;
        hidden: string;
    };
    onOverlayClick?: VoidFunction;
    modalPosition?: "center" | "right";
    containerClasses?: string;
    stretch?: boolean;
    children?: React.ReactNode | ((visible: boolean) => React.ReactNode);
}

type AnimationStep = "opened" | "closed" | "closing" | "opening";

export const ModalController: FC<ModalControllerProps> = ({
    visible,
    overlay = true,
    modalClassName = {
        visible: "opacity-100",
        hidden: "opacity-0"
    },
    containerClasses,
    overlayClassName = {
        visible: "bg-black bg-opacity-50",
        hidden: "bg-black bg-opacity-0"
    },
    onOverlayClick,
    modalPosition = "center",
    children,
    stretch = false
}) => {
    const [animationState, setAnimation] = useState<AnimationStep>(
        visible ? "opened" : "closed"
    );

    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const timer = timerRef.current;

        if (
            visible === true &&
            ["closed", "closing"].includes(animationState)
        ) {
            setAnimation("opening");
            timerRef.current = setTimeout(() => {
                setAnimation("opened");
            }, 100);
        }
        if (
            visible === false &&
            ["opened", "opening"].includes(animationState)
        ) {
            setAnimation("closing");
            timerRef.current = setTimeout(() => {
                setAnimation("closed");
            }, 300);
        }

        return () => {
            timer && clearTimeout(timer);
        };
    }, [animationState, visible]);

    const overlayClasses = cn(
        "fixed inset-0 z-120 transition-colors duration-300 overflow-y-auto",

        overlay
            ? {
                  [overlayClassName.visible]: ["opened"].includes(
                      animationState
                  ),

                  [overlayClassName.hidden]: [
                      "closed",
                      "closing",
                      "opening"
                  ].includes(animationState)
              }
            : undefined
    );
    const modalClasses = cn(
        "transition-all duration-300",

        {
            [modalClassName.visible]: ["opened"].includes(animationState),

            [modalClassName.hidden]: ["closed", "closing", "opening"].includes(
                animationState
            )
        },
        containerClasses
    );

    const modalContainerClasses = cn("flex max-h-100vh h-full", {
        "justify-center py-50p": modalPosition === "center",
        "items-center": !stretch,
        "justify-end": modalPosition === "right"
    });

    const handleOverlayClick: React.MouseEventHandler<
        HTMLDivElement
    > = event => {
        if (event.target === event.currentTarget) {
            onOverlayClick?.();
        }
    };

    if (animationState === "closed") {
        return null;
    }

    return createPortal(
        <div className={overlayClasses}>
            <div className={modalContainerClasses} onClick={handleOverlayClick}>
                <div className={modalClasses}>
                    {typeof children === "function"
                        ? children(animationState === "opened")
                        : children}
                </div>
            </div>
        </div>,
        MODAL_ROOT
    );
};
