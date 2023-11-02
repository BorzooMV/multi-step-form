import { Typography } from "antd";
import { FormikErrors } from "formik";
import classNames from "classnames";
import { convertToTitleCase, convertToUSDollars } from "../../utils";

interface ProductWithImage extends Product {
  imageSrc: string;
}

type ProductCardProps = {
  product: ProductWithImage;
  isSelected?: boolean;
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

export default function ProductCard({
  product,
  isSelected,
  handleChangeValue,
}: ProductCardProps) {
  const { Text } = Typography;
  const isMonthly = product.type === "monthly";

  function handleClick() {
    handleChangeValue("product", product);
  }
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "hover:bg-cool-gray/10 flex flex-col p-4 cursor-pointer rounded-md border border-light-gray border-solid w-20",
        {
          "border-purplish-blue": isSelected,
        }
      )}
    >
      <img width={20} src={product.imageSrc} alt={`${product.name} image`} />
      <Text className="text-sm text-marine-blue font-bold">
        {convertToTitleCase(product.name)}
      </Text>
      <Text className="text-xs text-cool-gray">
        {convertToUSDollars(product.price.final, isMonthly ? "mo" : "yr")}
      </Text>
    </div>
  );
}
