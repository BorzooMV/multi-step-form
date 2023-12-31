import { ConfigProvider } from "antd";
import MainWrapper from "./MainWrapper";
import FormProvider from "../FormProvider";
import Router from "./Router";
import theme from "../../theme/ant-theme";

export default function Layout() {
  return (
    <ConfigProvider theme={theme}>
      <div className="max-h-2xl h-screen flex flex-column items-center justify-center">
        <MainWrapper>
          <FormProvider>
            <Router />
          </FormProvider>
        </MainWrapper>
      </div>
    </ConfigProvider>
  );
}
