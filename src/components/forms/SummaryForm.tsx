import { Link } from "react-router-dom";

import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import { useFormContext } from "../FormProvider";
import { convertToTitleCase, convertToUSDollars } from "../../utils";

import HeadAndSub from "../HeadAndSub";
import FormNavigation from "../FormNavigation";

import { Divider, Typography } from "antd";

export default function SummaryForm() {
  const stepFromUrl = useGetStepsFromUrl();
  const { state } = useFormContext();
  const { Text } = Typography;

  const { currentStep, currentStepNumber } = stepFromUrl;
  const isProductMonthly = state.plan.type === "monthly";
  const hasAddOns = state.addOns.length > 0;

  function calculateTotalPrice(addOns: AddOnProduct[], plan: Product): number {
    const totalAddOnsPrice = addOns.reduce(
      (sum, currentAddOn) => sum + currentAddOn.price.final,
      0
    );

    return totalAddOnsPrice + plan.price.final;
  }

  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      <div>
        <HeadAndSub
          header={currentStep.title}
          subheader={currentStep.description}
        />
        <div className="flex flex-col bg-gray-100 rounded-md p-4 mb-4 mt-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Text className="text-sm font-bold text-primary">
                {`${convertToTitleCase(state.plan.name)} (${convertToTitleCase(
                  state.plan.type
                )})`}
              </Text>
              <Link to="/select-plan">
                <Text className="text-xs text-gray-400 underline">Change</Text>
              </Link>
            </div>
            <Text className="text-xs text-primary font-bold">
              {convertToUSDollars(
                state.plan.price.final,
                isProductMonthly ? "mo" : "yr"
              )}
            </Text>
          </div>
          {hasAddOns && (
            <>
              <Divider className="my-4" />
              <div className="flex flex-col">
                {state.addOns.map((addOn) => (
                  <div key={addOn.name} className="flex justify-between">
                    <Text className="text-xs">{addOn.title}</Text>
                    <Text className="text-xs">
                      {convertToUSDollars(
                        addOn.price.final,
                        isProductMonthly ? "mo" : "yr"
                      )}
                    </Text>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex justify-between px-4">
          <Text className="text-xs">Total (per year)</Text>
          <Text className="text-md font-bold text-primary">
            {convertToUSDollars(
              calculateTotalPrice(state.addOns, state.plan),
              isProductMonthly ? "mo" : "yr"
            )}
          </Text>
        </div>
      </div>
      <FormNavigation step={currentStepNumber} nextButtonLabel="Confirm" />
    </div>
  );
}
