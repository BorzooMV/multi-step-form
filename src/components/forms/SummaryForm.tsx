import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";
import { useFormContext } from "../FormProvider";
import FormNavigation from "../FormNavigation";

export default function SummaryForm() {
  const stepFromUrl = useGetStepsFromUrl();
  const { state } = useFormContext();
  if (!stepFromUrl) return null;

  const { currentStep, currentStepNumber } = stepFromUrl;

  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      <div>
        <HeadAndSub
          header={currentStep.title}
          subheader={currentStep.description}
        />
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <FormNavigation step={currentStepNumber} nextButtonLabel="Confirm" />
    </div>
  );
}
