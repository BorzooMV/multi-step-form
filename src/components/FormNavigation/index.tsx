import { Button } from "antd";
import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import { useNavigate } from "react-router-dom";
import { ButtonType } from "antd/es/button";

type FormNavigationProps = {
  step: number;
  nextButtonLabel?: string;
  nextButtonHandler?: (event: React.MouseEvent) => void;
  nextButtonType?: ButtonType;
};

export default function FormNavigation({
  step,
  nextButtonLabel,
  nextButtonHandler,
  nextButtonType,
}: FormNavigationProps) {
  const { goToPreviousStep, isLast } = useGetStepsFromUrl();
  const navigate = useNavigate();
  const isFirstStep = step === 0;
  const isFormSubmitButton = !isLast && !nextButtonHandler;

  function navigateToThankYouPage() {
    navigate("/thank-you", { replace: true });
  }

  return (
    <div>
      {!isFirstStep && <Button onClick={goToPreviousStep}>Go Back</Button>}
      <Button
        htmlType={isFormSubmitButton ? "submit" : "button"}
        className="float-right"
        type={nextButtonType || "primary"}
        onClick={
          isFormSubmitButton
            ? undefined
            : nextButtonHandler
            ? nextButtonHandler
            : navigateToThankYouPage
        }
      >
        {nextButtonLabel ? nextButtonLabel : "Next Step"}
      </Button>
    </div>
  );
}
