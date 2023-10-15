import { Switch, Typography } from "antd";
import { FormikErrors } from "formik";

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
    <div className="flex justify-center items-center gap-2 bg-slate-100 py-2 rounded-md">
      <Text strong={currentProductType === "monthly"}>Monthly</Text>
      <Switch
        className="bg-primary product-type-switch"
        onChange={handleChange}
        defaultChecked={currentProductType === "yearly"}
        size="small"
      />
      <Text strong={currentProductType === "yearly"}>yearly</Text>
    </div>
  );
}
