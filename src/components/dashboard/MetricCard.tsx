import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MetricCardProps {
  title?: string;
  value?: string | number;
  trend?: number;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard = ({
  title = "Total Birds",
  value = "1,234",
  trend = 5.2,
  icon = null,
  className,
}: MetricCardProps) => {
  const isPositiveTrend = trend >= 0;

  return (
    <Card
      className={cn(
        "p-6 bg-background hover:bg-accent/5 transition-colors",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>

      <div className="flex items-center mt-4">
        <div
          className={cn(
            "flex items-center text-sm",
            isPositiveTrend ? "text-green-500" : "text-red-500",
          )}
        >
          {isPositiveTrend ? (
            <ArrowUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          )}
          <span>{Math.abs(trend)}%</span>
        </div>
        <span className="text-sm text-muted-foreground ml-2">
          vs last period
        </span>
      </div>
    </Card>
  );
};

export default MetricCard;
