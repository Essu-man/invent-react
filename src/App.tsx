import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import BirdManagement from "./components/birds/BirdManagement";
import FeedManagement from "./components/feed/FeedManagement";
import HealthRecords from "./components/health/HealthRecords";
import Reports from "./components/reports/Reports";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birds" element={<BirdManagement />} />
          <Route path="/feed" element={<FeedManagement />} />
          <Route path="/health" element={<HealthRecords />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
