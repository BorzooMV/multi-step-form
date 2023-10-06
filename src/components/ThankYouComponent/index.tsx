import { Typography } from "antd";
import thankYouIcon from "../../assets/icon-thank-you.svg";

const { Title, Text } = Typography;

export default function ThankYouComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <img className="w-20" src={thankYouIcon} alt="check icon" />
      <Title>Thank You</Title>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Text>
    </div>
  );
}
