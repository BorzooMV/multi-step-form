import StepIndicator from "../StepIndicator";
import stepsData from "../../data/stepsData.json";
import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";

import "./style.css";

export default function Sidebar() {
  const { currentStepNumber } = useGetStepsFromUrl();
  return (
    <div className="sidebar rounded-md flex items-start justify-center">
      <div className="flex flex-col gap-4 mt-8">
        {stepsData.map((step, index) => {
          return (
            <StepIndicator
              key={index}
              num={index + 1}
              title={step.indicatorTitle.toUpperCase()}
              isActive={currentStepNumber === index}
            />
          );
        })}
      </div>
    </div>
  );
}
