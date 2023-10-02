import FormWrapper from "../../components/FormWrapper";
import PersonalInformationForm from "../../components/forms/PersonalInformationForm";

export default function Personal() {
  return <FormWrapper step={1} formComponent={PersonalInformationForm} />;
}
