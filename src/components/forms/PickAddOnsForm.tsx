import { useFormik } from "formik";

import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import { useFormContext } from "../FormProvider";

import FormNavigation from "../FormNavigation";
import HeadAndSub from "../HeadAndSub";
import AddonCard from "../AddonCard";

import { Form } from "antd";

import products from "../../data/products.json";

function TheForm({ step }: { step: number }) {
  const { state, dispatch, isFormCompleted } = useFormContext();
  const { goToNextStep } = useGetStepsFromUrl();

  const formik = useFormik({
    initialValues: {
      addOns: [],
    },
    onSubmit: (values) => {
      dispatch({
        type: "ADDONS/UPDATE",
        payload: values.addOns,
      });
      if (isFormCompleted()) {
        goToNextStep();
      } else {
        alert("Some requiered fields need to be filled!");
      }
    },
  });

  const addOns = products.addOns.filter(
    (addOn) => addOn.type === state.plan.type
  );

  function handleCheck(value: string) {
    const addOnValues = formik.values.addOns;
    if (addOnValues.find((val) => val === value)) {
      formik.setFieldValue(
        "addOns",
        addOnValues.filter((val) => val !== value)
      );
    } else {
      formik.setFieldValue("addOns", [...formik.values.addOns, value]);
    }
  }

  return (
    <Form
      className="flex flex-col justify-between h-full"
      layout="vertical"
      onSubmitCapture={formik.handleSubmit}
    >
      <div className="flex flex-col gap-2">
        {addOns.map((addOn) => (
          <AddonCard
            key={addOn.name}
            value={addOn.name}
            title={addOn.title}
            description={addOn.description}
            price={addOn.price}
            handleOnCheck={handleCheck}
          />
        ))}
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
