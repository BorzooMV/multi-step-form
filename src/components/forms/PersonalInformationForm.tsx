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
      name: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      dispatch({
        type: "PERSONAL/UPDATE",
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
        <Form.Item label="Name" name="name">
          <Input onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Email Address" name="email">
          <Input onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <Input onChange={formik.handleChange} />
        </Form.Item>
      </div>
      <FormNavigation step={step} />
    </Form>
  );
}

export default function PersonalInformationForm() {
  const stepFromUrl = useGetStepsFromUrl();
  if (!stepFromUrl) return null;

  const { currentStep, currentStepNumber } = stepFromUrl;

  return (
    <div className="flex flex-col gap-4">
      <HeadAndSub
        header={currentStep.title}
        subheader={currentStep.description}
      />
      <TheForm step={currentStepNumber} />
    </div>
  );
}
