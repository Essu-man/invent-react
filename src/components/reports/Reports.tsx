import React from "react";
import { Card } from "@/components/ui/card";
import { FileBarChart, TrendingUp, DollarSign, PieChart } from "lucide-react";
import MetricCard from "../dashboard/MetricCard";

const Reports = () => {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Reports"
          value="24"
          trend={8}
          icon={<FileBarChart className="w-6 h-6" />}
        />
        <MetricCard
          title="Growth Rate"
          value="+15%"
          trend={15}
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <MetricCard
          title="Revenue"
          value="$12,450"
          trend={12}
          icon={<DollarSign className="w-6 h-6" />}
        />
        <MetricCard
          title="Efficiency"
          value="92%"
          trend={3}
          icon={<PieChart className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Reports</h2>
          <div className="space-y-4">
            {[
              {
                title: "Production Summary",
                description: "Daily and monthly production metrics",
                type: "Daily",
              },
              {
                title: "Feed Consumption",
                description: "Feed usage and inventory analysis",
                type: "Weekly",
              },
              {
                title: "Health Statistics",
                description: "Bird health and mortality rates",
                type: "Monthly",
              },
              {
                title: "Financial Report",
                description: "Revenue and expense breakdown",
                type: "Monthly",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{report.title}</h3>
                  <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {report.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {report.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Recent Analytics</h2>
          <div className="space-y-6">
            {[
              {
                title: "Egg Production Trend",
                value: "1,234",
                change: "+5.2%",
                period: "vs last month",
              },
              {
                title: "Feed Conversion Ratio",
                value: "2.1",
                change: "-0.3",
                period: "vs target",
              },
              {
                title: "Average Bird Weight",
                value: "2.3 kg",
                change: "+0.2 kg",
                period: "vs last week",
              },
              {
                title: "Revenue per Bird",
                value: "$12.50",
                change: "+$1.20",
                period: "vs last month",
              },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {stat.title}
                  </span>
                  <span className="text-sm font-medium">{stat.value}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{stat.period}</span>
                  <span
                    className={`font-medium ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
