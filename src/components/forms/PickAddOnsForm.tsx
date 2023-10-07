import { useFormik } from "formik";

import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import HeadAndSub from "../HeadAndSub";
import { useFormContext } from "../FormProvider";
import FormNavigation from "../FormNavigation";

import { Form, Input } from "antd";

function TheForm({ step }: { step: number }) {
  const { dispatch, isFormCompleted } = useFormContext();
  const { goToNextStep } = useGetStepsFromUrl();

  const formik = useFormik({
    initialValues: {
      addOns: "",
    },
    onSubmit: (values) => {
      dispatch({
        type: "ADDONS/UPDATE",
        payload: values.addOns
          .split(",")
          .map((item) => item.trim()) as AddOnsProductName[],
      });
      if (isFormCompleted()) {
        goToNextStep();
      } else {
        alert("Some requiered fields need to be filled!");
      }
    },
  });

  return (
    <Form
      className="flex flex-col justify-between h-full"
      layout="vertical"
      onSubmitCapture={formik.handleSubmit}
    >
      <div>
        <Form.Item label="Add Ons" name="addOns">
          <Input onChange={formik.handleChange} />
        </Form.Item>
      </div>
      <FormNavigation step={step} />
    </Form>
  );
}

export default function PickAddOnsForm() {
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
