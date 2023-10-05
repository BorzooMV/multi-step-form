import { useFormContext } from "../FormProvider";

export default function DebugContext() {
  const { state } = useFormContext();

  return (
    <div className="fixed top-0 left-0 z-10 bg-slate-900 text-yellow-600 p-4 opacity-80 rounded-r-md">
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
