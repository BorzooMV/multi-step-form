import { Switch, Typography } from "antd";
import { FormikErrors } from "formik";

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
          product: ProductName;
          type: ProductType;
        }>
      >;
};

export default function ProductTypeSwitch({
  currentProductType,
  handleChangeValue,
}: ProductTypeSwitchProps) {
  function handleChange(checked: boolean) {
    if (checked) {
      handleChangeValue("type", "yearly");
    } else {
      handleChangeValue("type", "monthly");
    }
  }
  return (
    <div className="flex justify-center items-center gap-2">
      <Text strong={currentProductType === "monthly"}>Monthly</Text>
      <Switch
        className="bg-primary hover:bg-primary/80"
        onChange={handleChange}
      />
      <Text strong={currentProductType === "yearly"}>yearly</Text>
    </div>
  );
}
