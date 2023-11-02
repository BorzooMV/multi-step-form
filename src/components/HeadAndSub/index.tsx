import { Typography } from "antd";

const { Text, Title } = Typography;

type HeadAndSubProps = {
  header: string;
  subheader: string;
};

export default function HeadAndSub({ header, subheader }: HeadAndSubProps) {
  return (
    <div className="flex flex-col">
      <Title level={2} className="!text-marine-blue mb-2">
        {header}
      </Title>
      <Text className="text-cool-gray">{subheader}</Text>
    </div>
  );
}
