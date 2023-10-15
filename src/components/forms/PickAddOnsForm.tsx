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
      addOns: state.addOns,
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
  ) as AddOnProduct[];

  function handleCheck(product: AddOnProduct, checked: boolean) {
    const prevAddOns = formik.values.addOns;
    const addOnExistedInState = prevAddOns.find(
      (addOn: AddOnProduct) => addOn.name === product.name
    );
    if (checked) {
      !addOnExistedInState &&
        formik.setFieldValue("addOns", [...prevAddOns, product]);
    } else {
      addOnExistedInState &&
        formik.setFieldValue(
          "addOns",
          formik.values.addOns.filter(
            (addOn: AddOnProduct) => addOn.name !== product.name
          )
        );
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
            addOn={addOn}
            handleOnCheck={handleCheck}
            defaultChecked={
              !!formik.values.addOns.find(
                (product) => product.name === addOn.name
              )
            }
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
