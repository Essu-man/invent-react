import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import MetricsGrid from "./dashboard/MetricsGrid";
import InventoryTable from "./dashboard/InventoryTable";
import QuickActionButton from "./common/QuickActionButton";

const Home = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main
        className={`flex-1 overflow-auto transition-all duration-300 p-6 space-y-6`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <MetricsGrid />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Inventory Overview</h2>
          <InventoryTable />
        </div>

        <QuickActionButton />
      </main>
    </div>
  );
};

export default Home;
