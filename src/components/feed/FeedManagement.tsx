import React from "react";
import { Card } from "@/components/ui/card";
import { Wheat, AlertCircle, BarChart3, Package } from "lucide-react";
import MetricCard from "../dashboard/MetricCard";
import { Progress } from "@/components/ui/progress";

interface FeedTypeProps {
  name: string;
  currentStock: number;
  capacity: number;
  reorderPoint: number;
}

const FeedType = ({
  name,
  currentStock,
  capacity,
  reorderPoint,
}: FeedTypeProps) => {
  const percentage = (currentStock / capacity) * 100;
  const isLow = currentStock <= reorderPoint;

  return (
    <Card className="p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{name}</h3>
        {isLow && (
          <span className="text-red-500 flex items-center text-sm">
            <AlertCircle className="w-4 h-4 mr-1" /> Low Stock
          </span>
        )}
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{currentStock}kg left</span>
        <span>{capacity}kg capacity</span>
      </div>
    </Card>
  );
};

const FeedManagement = () => {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Feed Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Feed Stock"
          value="4,500 kg"
          trend={-2.1}
          icon={<Wheat className="w-6 h-6" />}
        />
        <MetricCard
          title="Daily Consumption"
          value="250 kg"
          trend={1.5}
          icon={<BarChart3 className="w-6 h-6" />}
        />
        <MetricCard
          title="Feed Types"
          value="4"
          trend={0}
          icon={<Package className="w-6 h-6" />}
        />
        <MetricCard
          title="Days Remaining"
          value="18"
          trend={-2.1}
          icon={<AlertCircle className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Feed Stock Levels</h2>
          <div className="space-y-4">
            <FeedType
              name="Layer Feed"
              currentStock={1200}
              capacity={2000}
              reorderPoint={500}
            />
            <FeedType
              name="Starter Feed"
              currentStock={800}
              capacity={1500}
              reorderPoint={400}
            />
            <FeedType
              name="Grower Feed"
              currentStock={300}
              capacity={1500}
              reorderPoint={400}
            />
            <FeedType
              name="Finisher Feed"
              currentStock={900}
              capacity={1500}
              reorderPoint={400}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Feed Schedule</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
              <div>
                <p className="font-medium">Morning Feed</p>
                <p className="text-sm text-muted-foreground">6:00 AM</p>
              </div>
              <span className="text-sm font-medium">120 kg</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
              <div>
                <p className="font-medium">Afternoon Feed</p>
                <p className="text-sm text-muted-foreground">2:00 PM</p>
              </div>
              <span className="text-sm font-medium">80 kg</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
              <div>
                <p className="font-medium">Evening Feed</p>
                <p className="text-sm text-muted-foreground">6:00 PM</p>
              </div>
              <span className="text-sm font-medium">50 kg</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeedManagement;
