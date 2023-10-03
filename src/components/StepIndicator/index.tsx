import { Avatar, Typography } from "antd";
const { Text } = Typography;

type StepIndicatorProps = {
  stepData: {
    num: number;
    title?: string;
  };
};

export default function StepIndicator({ stepData }: StepIndicatorProps) {
  return (
    <div className="flex gap-4 items-center">
      <Avatar size={30} icon={stepData.num} />
      <div className="flex flex-col">
        <Text className="text-xs text-textLight">Step {stepData.num}</Text>
        {stepData.title && (
          <Text className="text-sm font-bold text-textLight">
            {stepData.title}
          </Text>
        )}
      </div>
    </div>
  );
}
