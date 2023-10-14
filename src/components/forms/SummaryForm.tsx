import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";
import { useFormContext } from "../FormProvider";
import FormNavigation from "../FormNavigation";
import { Divider, Typography } from "antd";

export default function SummaryForm() {
  const stepFromUrl = useGetStepsFromUrl();
  const { state } = useFormContext();
  const { Text } = Typography;
  if (!stepFromUrl) return null;

  const { currentStep, currentStepNumber } = stepFromUrl;

  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      <div>
        <HeadAndSub
          header={currentStep.title}
          subheader={currentStep.description}
        />
        <div className="flex flex-col bg-gray-100 rounded-md p-4 mb-4 mt-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Text className="text-sm font-bold text-primary">
                Arcade (Yearly)
              </Text>
              <Text className="text-xs text-gray-400 underline">Change</Text>
            </div>
            <Text className="text-xs text-primary font-bold">$90/yr</Text>
          </div>
          <Divider className="my-4" />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <Text className="text-xs">online service</Text>
              <Text className="text-xs">+$10/yr</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-xs">online service</Text>
              <Text className="text-xs">+$10/yr</Text>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4">
          <Text className="text-xs">Total (per year)</Text>
          <Text className="text-md font-bold text-primary">+$10/yr</Text>
        </div>
      </div>
      <FormNavigation step={currentStepNumber} nextButtonLabel="Confirm" />
    </div>
  );
}
