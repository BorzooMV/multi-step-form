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
    <div className="flex gap-4 items-center step-indicator">
      <div
        className={classNames("step-indicator__background", {
          "step-indicator__background--active": isActive,
        })}
      >
        <Text className="step-indicator__number">{num}</Text>
      </div>
      <div className="flex flex-col">
        <Text
          className={classNames("text-xs text-textLight", {
            "text-textDark": isActive,
          })}
        >
          Step {num}
        </Text>
        {title && (
          <Text className="text-sm font-bold text-textLight">{title}</Text>
        )}
      </div>
    </div>
  );
}
