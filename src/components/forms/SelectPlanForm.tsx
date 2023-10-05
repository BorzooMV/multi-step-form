import { useFormik } from "formik";

import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";
import { useFormContext } from "../FormProvider";
import FormNavigation from "../FormNavigation";

import { Form, Input } from "antd";

function TheForm({ step }: { step: number }) {
  const { dispatch } = useFormContext();
  const { goToNextStep } = useGetStepsFromUrl();

  const formik = useFormik({
    initialValues: {
      product: "" as ProductName,
      type: "" as ProductType,
    },
    onSubmit: (values) => {
      dispatch({
        type: "PLAN/UPDATE",
        payload: values,
      });
      goToNextStep();
    },
  });

  return (
    <Form
      className="flex flex-col justify-between h-full"
      layout="vertical"
      onSubmitCapture={formik.handleSubmit}
    >
      <div>
        <Form.Item label="Product" name="product">
          <Input onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Input onChange={formik.handleChange} />
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
