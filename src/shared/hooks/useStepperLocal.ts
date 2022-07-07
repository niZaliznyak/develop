import { useCallback, useState } from 'react';

export type StepperProps = {
  max: number;
  current?: number;
  passed?: number;
};

export const useStepperLocal = ({ max = 0, current = 0, passed = 0 }: StepperProps) => {
  const [step, setStep] = useState(current);
  const [_passed, setPassed] = useState(passed > current ? passed : current);

  const nextStep = useCallback(
    () =>
      setStep((i) => {
        if (i < max) {
          setPassed(++i);
          return i;
        }
        return i;
      }),
    [max]
  );

  const prevStep = useCallback(
    () =>
      setStep((i) => {
        if (i > 0) return --i;
        return i;
      }),
    []
  );

  return [step, _passed, nextStep, prevStep, setStep] as const;
};
