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
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentStepNumber = pathnames.findIndex((path) => path === pathname);

  function goToNextStep() {
    if (currentStepNumber < steps.length - 1) {
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
