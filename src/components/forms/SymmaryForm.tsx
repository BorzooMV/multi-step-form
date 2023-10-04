import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";

// This component is not form but It located here
// in forms directory and following other forms
// naming convention for ease of managing
export default function SummaryForm() {
  const stepFromUrl = useGetStepsFromUrl();
  if (!stepFromUrl) return null;

  const { currentStep } = stepFromUrl;

  return (
    <>
      <HeadAndSub
        header={currentStep.title}
        subheader={currentStep.description}
      />
    </>
  );
}
