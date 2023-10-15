import { Typography } from "antd";
import { FormikErrors } from "formik";
import classNames from "classnames";
import { convertToUSDollars } from "../../utils";

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
  const { Text, Title } = Typography;
  const isMonthly = product.type === "monthly";

  function handleClick() {
    handleChangeValue("product", product);
  }
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "hover:bg-slate-100 flex flex-col p-4 cursor-pointer w-16 rounded-md border border-gray-300 border-solid",
        {
          "border-primary": isSelected,
        }
      )}
    >
      <img width={20} src={product.imageSrc} alt={`${product.name} image`} />
      <Title className="!text-sm">{product.name}</Title>
      <Text className="!text-xs">
        {convertToUSDollars(product.price.final, isMonthly ? "mo" : "yr")}
      </Text>
    </div>
  );
}
