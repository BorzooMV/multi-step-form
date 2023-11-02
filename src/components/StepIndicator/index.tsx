import classNames from "classnames";
import { Typography } from "antd";

import "./style.css";

type StepIndicatorProps = {
  num: number;
  title?: string;
  isActive?: boolean;
};

export default function StepIndicator({
  num,
  title,
  isActive,
}: StepIndicatorProps) {
  const { Text } = Typography;
  return (
    <div
      className={classNames("flex gap-4 items-center step-indicator", {
        "step-indicator--active": isActive,
      })}
    >
      <div className="step-indicator__background">
        <Text className="step-indicator__number">{num}</Text>
      </div>
      <div className="flex flex-col">
        <Text className="text-xs text-light-gray">Step {num}</Text>
        {title && <Text className="text-sm font-bold text-white">{title}</Text>}
      </div>
    </div>
  );
}
