import React from "react";
import { Modal } from "../../shared/ui/Modal";
import { StepperContextProvider } from "./EstimateContext";
import { EstimateStartStep } from "./EstimateStartStep";

type Props = {};

export const CreditEstimate: React.FC<Props> = () => {
    return (
        <StepperContextProvider>
            <Modal visible>
                <EstimateStartStep />
            </Modal>
        </StepperContextProvider>
    );
}