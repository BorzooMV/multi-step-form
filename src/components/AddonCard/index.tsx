import { Checkbox, Popover } from "antd";
import { Typography } from "antd";
import { useRef } from "react";

type AddonCardProps = {
  addOn: AddOnProduct;
  handleOnCheck: any;
};

export default function AddonCard({ addOn, handleOnCheck }: AddonCardProps) {
  const checkboxRef = useRef<any>();
  const { title, description, price } = addOn;
  const { Text } = Typography;
  const isMonthly = addOn.type === "monthly";

  function checkTheCheckbox() {
    checkboxRef.current.input.click();
    handleOnCheck(addOn);
  }

  return (
    <div
      onClick={checkTheCheckbox}
      className="flex justify-between items-center bg-primary/5 border border-solid border-primary/40 hover:border-primary rounded-md p-4 cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <Checkbox ref={checkboxRef} onClick={checkTheCheckbox} />
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
        <Text className="text-xs text-primary">{`${Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price.final)}/${isMonthly ? "mo" : "yr"}`}</Text>
      </div>
    </div>
  );
}
