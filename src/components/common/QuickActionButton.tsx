import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface QuickActionButtonProps {
  onClick?: () => void;
  tooltip?: string;
  icon?: React.ReactNode;
  className?: string;
}

const QuickActionButton = ({
  onClick = () => {},
  tooltip = "Add New Entry",
  icon = <Plus className="h-6 w-6" />,
  className = "",
}: QuickActionButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-primary ${className}`}
            onClick={onClick}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default QuickActionButton;
