import cn from "classnames";
import { ModalController } from "./ModalController";

export type ModalProps = {
    overlay?: boolean;
    visible?: boolean;
    className?: string;
    onOverlayClick?: VoidFunction;
    stretch?: boolean;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    overlay = true,
    visible = true,
    children,
    className,
    onOverlayClick,
    stretch
}) => (
    <ModalController
        stretch={stretch}
        overlay={overlay}
        onOverlayClick={onOverlayClick}
        visible={visible}
        containerClasses={cn(
            "bg-white min-w-550p rounded-lg p-5 pb-30p no-scrollbar",
            className
        )}
    >
        {children}
    </ModalController>
);
