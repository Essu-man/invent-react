import React from "react";
import { Card } from "@/components/ui/card";
import { Stethoscope, Syringe, Calendar, ClipboardCheck } from "lucide-react";
import MetricCard from "../dashboard/MetricCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const healthData = [
  {
    id: 1,
    date: "2024-03-25",
    type: "Vaccination",
    description: "Newcastle Disease Vaccine",
    flock: "Layer Hens",
    status: "Completed",
  },
  {
    id: 2,
    date: "2024-03-24",
    type: "Health Check",
    description: "Routine Health Inspection",
    flock: "All Flocks",
    status: "Completed",
  },
  {
    id: 3,
    date: "2024-03-26",
    type: "Medication",
    description: "Vitamin Supplements",
    flock: "Broilers",
    status: "Scheduled",
  },
];

const HealthRecords = () => {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Health Records</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Health Checks"
          value="45"
          trend={5}
          icon={<Stethoscope className="w-6 h-6" />}
        />
        <MetricCard
          title="Vaccinations"
          value="12"
          trend={0}
          icon={<Syringe className="w-6 h-6" />}
        />
        <MetricCard
          title="Scheduled Tasks"
          value="3"
          trend={2}
          icon={<Calendar className="w-6 h-6" />}
        />
        <MetricCard
          title="Completed Tasks"
          value="15"
          trend={8}
          icon={<ClipboardCheck className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Recent Health Records</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Flock</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.type}</TableCell>
                  <TableCell>{record.description}</TableCell>
                  <TableCell>{record.flock}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${record.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                    >
                      {record.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            {healthData
              .filter((record) => record.status === "Scheduled")
              .map((task) => (
                <div key={task.id} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{task.type}</span>
                    <span className="text-sm text-muted-foreground">
                      {task.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Flock:</span>
                    <span>{task.flock}</span>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HealthRecords;
