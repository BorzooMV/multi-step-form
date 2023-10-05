import { Button } from "antd";
import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";

type FormNavigationProps = {
  step: number;
};

export default function FormNavigation({ step }: FormNavigationProps) {
  const { goToPreviousStep } = useGetStepsFromUrl();
  const isFirstStep = step === 0;

  return (
    <div>
      {!isFirstStep && <Button onClick={goToPreviousStep}>Go Back</Button>}
      <Button htmlType="submit" className="float-right" type="primary">
        Next Step
      </Button>
    </div>
  );
}
