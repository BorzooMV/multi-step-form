import { useFormik } from "formik";
import * as Yup from "yup";

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
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      phoneNumber: Yup.string().required("Phone nunmber is required"),
    }),
    onSubmit: (values) => {
      dispatch({
        type: "PERSONAL/UPDATE",
        payload: values,
      });
      goToNextStep();
    },
  });

  const nameError = formik.touched.name && formik.errors.name;
  const emailError = formik.touched.email && formik.errors.email;
  const phoneNumberError =
    formik.touched.phoneNumber && formik.errors.phoneNumber;

  return (
    <Form
      className="flex flex-col justify-between h-full"
      layout="vertical"
      onSubmitCapture={formik.handleSubmit}
    >
      <div>
        <Form.Item
          label="Name"
          name="name"
          validateStatus={nameError ? "error" : "validating"}
          help={nameError}
          required
        >
          <Input onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          validateStatus={emailError ? "error" : "validating"}
          help={emailError}
          required
        >
          <Input onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          validateStatus={phoneNumberError ? "error" : "validating"}
          help={phoneNumberError}
          required
        >
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
    <div className="flex flex-col gap-4 h-full">
      <HeadAndSub
        header={currentStep.title}
        subheader={currentStep.description}
      />
      <TheForm step={currentStepNumber} />
    </div>
  );
}
