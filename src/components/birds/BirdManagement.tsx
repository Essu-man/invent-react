import React from "react";
import { Card } from "@/components/ui/card";
import { Bird, TrendingUp, AlertTriangle, Activity } from "lucide-react";
import MetricCard from "../dashboard/MetricCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const birdData = [
  {
    id: 1,
    type: "Layer",
    age: "32 weeks",
    quantity: 500,
    health: "Good",
    lastCheck: "2024-03-25",
  },
  {
    id: 2,
    type: "Broiler",
    age: "6 weeks",
    quantity: 1000,
    health: "Excellent",
    lastCheck: "2024-03-24",
  },
  {
    id: 3,
    type: "Pullet",
    age: "15 weeks",
    quantity: 300,
    health: "Fair",
    lastCheck: "2024-03-23",
  },
];

const BirdManagement = () => {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bird Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Birds"
          value="1,800"
          trend={2.5}
          icon={<Bird className="w-6 h-6" />}
        />
        <MetricCard
          title="Growth Rate"
          value="+4.2%"
          trend={4.2}
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <MetricCard
          title="Health Alerts"
          value="2"
          trend={-1}
          icon={<AlertTriangle className="w-6 h-6" />}
        />
        <MetricCard
          title="Mortality Rate"
          value="0.5%"
          trend={-0.2}
          icon={<Activity className="w-6 h-6" />}
        />
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Flock Overview</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bird Type</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Health Status</TableHead>
              <TableHead>Last Health Check</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {birdData.map((flock) => (
              <TableRow key={flock.id}>
                <TableCell className="font-medium">{flock.type}</TableCell>
                <TableCell>{flock.age}</TableCell>
                <TableCell>{flock.quantity}</TableCell>
                <TableCell>{flock.health}</TableCell>
                <TableCell>{flock.lastCheck}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default BirdManagement;
