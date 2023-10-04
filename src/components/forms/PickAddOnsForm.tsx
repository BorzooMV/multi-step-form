import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";

export default function PickAddOnsForm() {
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
