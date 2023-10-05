import useGetStepsFromUrl from "../../hooks/useGetStepsFromUrl";
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

  const { currentStep } = stepFromUrl;
  return (
    <Row>
      <Col span={8}>
        <Sidebar />
      </Col>
      <Col span={16}>
        <div className="px-16 py-1 h-full">
          <FormComponent stepData={currentStep} />
        </div>
      </Col>
    </Row>
  );
}
