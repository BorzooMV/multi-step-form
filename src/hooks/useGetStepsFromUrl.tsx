import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import steps from "../data/stepsData.json";

type GetStepsFromUrlReturnValue = {
  currentStep: Step;
  currentStepNumber: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
};

const pathnames = steps.reduce((pathnames: string[], currentStep) => {
  return [...pathnames, currentStep.pathname];
}, []);

export default function useGetStepsFromUrl(): GetStepsFromUrlReturnValue {
  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStepNumber(pathnames.findIndex((path) => path === pathname));
  }, [pathname]);

  function goToNextStep() {
    if (currentStepNumber < steps.length) {
      navigate(steps[currentStepNumber + 1].pathname);
    }
  }

  function goToPreviousStep() {
    if (currentStepNumber > 0) {
      navigate(steps[currentStepNumber - 1].pathname);
    }
  }

  return {
    currentStepNumber,
    currentStep: steps[currentStepNumber],
    goToNextStep,
    goToPreviousStep,
  };
}
