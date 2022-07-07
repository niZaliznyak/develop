import React, { useContext } from "react";
import { Button } from "../../shared/ui/Button";
import { StepperContext } from "./EstimateContext";

type Props = {};

export const EstimateStartStep: React.FC<Props> = () => {
    const stepper = useContext(StepperContext);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-600p space-y-5">
            <p className="max-w-sm text-2xl font-bold text-center text-slate-800">
                Are you sure you want to exit?
                Your information will be lost and you will have to restart.
            </p>
            <p className="max-w-sm text-center text-gray-500">
                Click continue to complete your application and receive our special offers
            </p>
            <Button className="uppercase" children="Continue" />
            <Button variant="ghost" className="uppercase" children="Close anyway" />
        </div>
    );
}