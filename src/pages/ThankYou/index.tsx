import { Col, Row } from "antd";
import Sidebar from "../../components/FormWrapper/Sidebar";
import ThankYouComponent from "../../components/ThankYouComponent";

export default function ThankYou() {
  return (
    <Row>
      <Col span={8}>
        <Sidebar />
      </Col>
      <Col span={16}>
        <div className="px-16 py-1 h-full">
          <ThankYouComponent />
        </div>
      </Col>
    </Row>
  );
}
