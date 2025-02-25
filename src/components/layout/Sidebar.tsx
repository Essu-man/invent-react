import React from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Bird,
  Wheat,
  Stethoscope,
  FileBarChart,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <Package className="w-5 h-5" />,
    label: "Inventory",
    path: "/inventory",
  },
  {
    icon: <Bird className="w-5 h-5" />,
    label: "Birds",
    path: "/birds",
  },
  {
    icon: <Wheat className="w-5 h-5" />,
    label: "Feed",
    path: "/feed",
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    label: "Health Records",
    path: "/health",
  },
  {
    icon: <FileBarChart className="w-5 h-5" />,
    label: "Reports",
    path: "/reports",
  },
];

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  return (
    <div
      className={cn(
        "h-screen bg-background border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {!collapsed && (
          <span className="font-semibold text-xl">Poultry Farm</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onToggle}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180",
            )}
          />
        </Button>
      </div>

      <nav className="flex-1 p-2">
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.path}>
              <TooltipTrigger asChild>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                      collapsed && "justify-center",
                    )
                  }
                >
                  {item.icon}
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">{item.label}</TooltipContent>
              )}
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Sidebar;
