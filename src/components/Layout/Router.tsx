import { Routes, Route } from "react-router-dom";

import Personal from "../../pages/Personal";
import SelectPlan from "../../pages/SelectPlan";
import SelectAddOns from "../../pages/SelectAddOns";
import Summery from "../../pages/Summery";
import ThankYou from "../../pages/ThankYou";
import NotFound from "../../pages/404";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Personal />} />
      <Route path="/select-plan" element={<SelectPlan />} />
      <Route path="/select-addons" element={<SelectAddOns />} />
      <Route path="/summary" element={<Summery />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
