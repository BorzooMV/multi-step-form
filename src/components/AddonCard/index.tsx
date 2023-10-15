import { useRef } from "react";
import { convertToUSDollars } from "../../utils";

import { Checkbox, Popover, Typography } from "antd";

type AddonCardProps = {
  addOn: AddOnProduct;
  defaultChecked: boolean;
  handleOnCheck: (product: AddOnProduct, checked: boolean) => void;
};

export default function AddonCard({
  addOn,
  handleOnCheck,
  defaultChecked,
}: AddonCardProps) {
  const checkboxRef = useRef<any>();
  const { title, description, price } = addOn;
  const { Text } = Typography;
  const isMonthly = addOn.type === "monthly";

  function checkTheCheckbox() {
    checkboxRef.current.input.click();
    handleOnCheck(addOn, checkboxRef.current.input.checked);
  }

  return (
    <div
      onClick={checkTheCheckbox}
      className="flex justify-between items-center bg-primary/5 border border-solid border-primary/40 hover:border-primary rounded-md p-4 cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <Checkbox
          ref={checkboxRef}
          onClick={checkTheCheckbox}
          name={`addon_${addOn.name}`}
          defaultChecked={defaultChecked}
        />
        <div className="flex flex-col">
          <Text className="text-xs font-bold text-primary">{title}</Text>
          <Popover content={description}>
            <Text
              ellipsis
              className="text-xs text-gray-500"
              style={{ maxWidth: "9rem" }}
            >
              {description}
            </Text>
          </Popover>
        </div>
      </div>
      <div>
        <Text className="text-xs text-primary">
          {convertToUSDollars(price.final, isMonthly ? "mo" : "yr")}
        </Text>
      </div>
    </div>
  );
}
