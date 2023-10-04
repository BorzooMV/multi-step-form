import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
import FormNavigation from "../FormNavigation";
import Sidebar from "./Sidebar";
import { Col, Row } from "antd";

type FormWrapperProps = {
  formComponent: React.ElementType;
};

export default function FormWrapper({
  formComponent: FormComponent,
}: FormWrapperProps) {
  const stepFromUrl = useGetStepsFromUrl();

  if (!stepFromUrl) {
    return null;
  }

  const { currentStep, currentStepNumber } = stepFromUrl;
  return (
    <Row>
      <Col span={8}>
        <Sidebar />
      </Col>
      <Col span={16}>
        <div className="flex flex-col justify-between px-16 py-1 h-full">
          <FormComponent stepData={currentStep} />
          <FormNavigation step={currentStepNumber} />
        </div>
      </Col>
    </Row>
  );
}
