import { PropsWithChildren } from "react";

export default function MainWrapper({ children }: PropsWithChildren) {
  return (
    <div className="max-w-3xl w-full bg-white rounded-xl p-4">{children}</div>
  );
}
