import HeadAndSub from "../HeadAndSub";

export default function PersonalInformationForm({ step }: { step: number }) {
  return (
    <>
      <HeadAndSub
        header="Personal info"
        subheader="Please provide your name, email address, and phone number."
      />
    </>
  );
}
