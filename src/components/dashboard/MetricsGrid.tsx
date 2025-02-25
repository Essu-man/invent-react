import React from "react";
import MetricCard from "./MetricCard";
import { Bird, Egg, Package2, Skull } from "lucide-react";

interface MetricsGridProps {
  metrics?: {
    totalBirds: number;
    mortalityRate: number;
    feedStock: number;
    dailyEggs: number;
  };
}

const MetricsGrid = ({
  metrics = {
    totalBirds: 1234,
    mortalityRate: 0.5,
    feedStock: 5000,
    dailyEggs: 950,
  },
}: MetricsGridProps) => {
  return (
    <div className="bg-background p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Birds"
          value={metrics.totalBirds.toLocaleString()}
          trend={5.2}
          icon={<Bird className="w-6 h-6" />}
        />
        <MetricCard
          title="Mortality Rate"
          value={`${metrics.mortalityRate}%`}
          trend={-0.3}
          icon={<Skull className="w-6 h-6" />}
        />
        <MetricCard
          title="Feed Stock"
          value={`${metrics.feedStock.toLocaleString()} kg`}
          trend={-2.1}
          icon={<Package2 className="w-6 h-6" />}
        />
        <MetricCard
          title="Daily Egg Production"
          value={metrics.dailyEggs.toLocaleString()}
          trend={8.4}
          icon={<Egg className="w-6 h-6" />}
        />
      </div>
    </div>
  );
};

export default MetricsGrid;
