import FormNavigation from "../FormNavigation";
import Sidebar from "./Sidebar";
import { Col, Row } from "antd";

type FormWrapperProps = {
  step: number;
  formComponent: React.ElementType;
};

export default function FormWrapper({
  step,
  formComponent: FormComponent,
}: FormWrapperProps) {
  return (
    <Row>
      <Col span={8}>
        <Sidebar />
      </Col>
      <Col span={16}>
        <div className="flex flex-col justify-between px-16 py-1 h-full">
          <FormComponent />
          <FormNavigation step={step} />
        </div>
      </Col>
    </Row>
  );
}
