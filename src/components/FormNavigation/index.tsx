import { Button } from "antd";

type FormNavigationProps = {
  step: number;
};

export default function FormNavigation({ step }: FormNavigationProps) {
  const isFirstStep = step === 0;

  return (
    <div>
      {!isFirstStep && <Button>Go Back</Button>}
      <Button className="float-right" type="primary">
        Next Step
      </Button>
    </div>
  );
}
