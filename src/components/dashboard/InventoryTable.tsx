import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  lastUpdated: string;
}

interface InventoryTableProps {
  data?: InventoryItem[];
  onSort?: (column: string) => void;
  onFilter?: (category: string) => void;
}

const defaultData: InventoryItem[] = [
  {
    id: "1",
    name: "Layer Feed",
    category: "Feed",
    quantity: 500,
    unit: "kg",
    lastUpdated: "2024-03-20",
  },
  {
    id: "2",
    name: "Vitamins",
    category: "Medicine",
    quantity: 100,
    unit: "bottles",
    lastUpdated: "2024-03-19",
  },
  {
    id: "3",
    name: "Egg Trays",
    category: "Equipment",
    quantity: 1000,
    unit: "pieces",
    lastUpdated: "2024-03-18",
  },
];

const InventoryTable = ({
  data = defaultData,
  onSort = () => {},
  onFilter = () => {},
}: InventoryTableProps) => {
  return (
    <div className="w-full bg-background p-4 rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory..."
              className="pl-8 w-[300px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onFilter("Feed")}>
                Feed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onFilter("Medicine")}>
                Medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onFilter("Equipment")}>
                Equipment
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("name")}
              >
                Name
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("category")}
              >
                Category
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => onSort("quantity")}
              >
                Quantity
              </TableHead>
              <TableHead>Unit</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("lastUpdated")}
              >
                Last Updated
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InventoryTable;
