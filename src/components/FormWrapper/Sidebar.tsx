import StepIndicator from "../StepIndicator";
import "./style.css";

export default function Sidebar() {
  return (
    <div className="sidebar rounded-md flex items-start justify-center">
      <div className="flex flex-col gap-4 mt-8">
        <StepIndicator
          stepData={{
            num: 1,
            title: "Sample Heading",
          }}
        />
        <StepIndicator
          stepData={{
            num: 2,
            title: "Sample Heading",
          }}
        />
        <StepIndicator
          stepData={{
            num: 3,
            title: "Sample Heading",
          }}
        />
        <StepIndicator
          stepData={{
            num: 4,
            title: "Sample Heading",
          }}
        />
      </div>
    </div>
  );
}
