import { createContext } from "react";
import { useStepperLocal } from "../../shared/hooks/useStepperLocal";

export const StepperContext = createContext(useStepperLocal);

type StepperContextProviderProps = {
  children?: React.ReactNode;
}

export const StepperContextProvider: React.FC<StepperContextProviderProps> = ({ children }) => {
  return (
    <StepperContext.Provider value={useStepperLocal}>
      {children}
    </StepperContext.Provider>
  );
};
