import { useFormik } from "formik";

import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";
import { useFormContext } from "../FormProvider";
import FormNavigation from "../FormNavigation";
import ProductCard from "../ProductCard";

import { Form, Input } from "antd";
import products from "../../data/products.json";
import ProductTypeSwitch from "../ProductTypeSwitch/ProductTypeSwitch";
import arcadeImage from "../../assets/icon-arcade.svg";
import advancedImage from "../../assets/icon-advanced.svg";
import proImage from "../../assets/icon-pro.svg";

function TheForm({ step }: { step: number }) {
  const { dispatch } = useFormContext();
  const { goToNextStep } = useGetStepsFromUrl();

  const formik = useFormik({
    initialValues: {
      product: "",
      type: "monthly" as ProductType,
    },
    onSubmit: (values) => {
      dispatch({
        type: "PLAN/UPDATE",
        payload: values as Plan,
      });
      goToNextStep();
    },
  });

  const desiredProducts: Product[] = products.regulars.filter(
    (product) => product.type === formik.values.type
  );
  const desiredProductsWithImage = desiredProducts.map((product) => {
    switch (product.name) {
      case "arcade":
        return { ...product, imageSrc: arcadeImage };

      case "advanced":
        return { ...product, imageSrc: advancedImage };

      case "pro":
        return { ...product, imageSrc: proImage };
    }
  });

  return (
    <Form
      className="flex flex-col justify-between h-full"
      layout="vertical"
      onSubmitCapture={formik.handleSubmit}
    >
      <div>
        <Form.Item label="Product" name="product">
          {/* <Input onChange={formik.handleChange} /> */}
          <div className="flex gap-4">
            {desiredProductsWithImage.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                handleChangeValue={formik.setFieldValue}
              />
            ))}
            {/* <ProductCard
              imgSrc={sampleProductImage}
              type="monthly"
              finalPrice={9}
              productName="arcade"
              onClick={() => formik.setFieldValue("product", "arcade")}
            />
            <ProductCard
              imgSrc={sampleProductImage}
              type="monthly"
              finalPrice={9}
              productName="arcade"
            />
            <ProductCard
              imgSrc={sampleProductImage}
              type="monthly"
              finalPrice={9}
              productName="arcade"
            /> */}
          </div>
        </Form.Item>
        <Form.Item name="type">
          <ProductTypeSwitch
            currentProductType={formik.values.type}
            handleChangeValue={formik.setFieldValue}
          />
        </Form.Item>
      </div>
      <FormNavigation step={step} />
    </Form>
  );
}

export default function SelectPlanForm() {
  const stepFromUrl = useGetStepsFromUrl();
  if (!stepFromUrl) return null;

  const { currentStep, currentStepNumber } = stepFromUrl;

  return (
    <div className="flex flex-col gap-4 h-full">
      <HeadAndSub
        header={currentStep.title}
        subheader={currentStep.description}
      />
      <TheForm step={currentStepNumber} />
    </div>
  );
}
