import classNames from "classnames";
import { FormikErrors } from "formik";
import { Switch, Typography } from "antd";

import "./style.css";

const { Text } = Typography;

type ProductTypeSwitchProps = {
  currentProductType: ProductType;
  handleChangeValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          product: Product;
        }>
      >;
};

export default function ProductTypeSwitch({
  currentProductType,
  handleChangeValue,
}: ProductTypeSwitchProps) {
  function handleChange(checked: boolean) {
    if (checked) {
      handleChangeValue("product.type", "yearly");
    } else {
      handleChangeValue("product.type", "monthly");
    }
  }
  return (
    <div className="flex justify-center items-center gap-2 bg-cool-gray/10  py-2 rounded-md">
      <Text
        className={classNames("text-cool-gray", {
          "text-marine-blue font-bold": currentProductType === "monthly",
        })}
      >
        Monthly
      </Text>
      <Switch
        className="bg-marine-blue product-type-switch"
        onChange={handleChange}
        defaultChecked={currentProductType === "yearly"}
        size="small"
      />
      <Text
        className={classNames("text-cool-gray", {
          "text-marine-blue font-bold": currentProductType === "yearly",
        })}
      >
        Yearly
      </Text>
    </div>
  );
}
