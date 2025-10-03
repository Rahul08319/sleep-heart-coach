import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  trend: string;
  icon: LucideIcon;
  color: "primary" | "accent" | "success" | "warning";
  status: "excellent" | "good" | "normal" | "low";
}

const colorClasses = {
  primary: "text-primary",
  accent: "text-accent",
  success: "text-success",
  warning: "text-warning",
};

const statusColors = {
  excellent: "bg-success/10 text-success border-success/20",
  good: "bg-accent/10 text-accent border-accent/20",
  normal: "bg-primary/10 text-primary border-primary/20",
  low: "bg-warning/10 text-warning border-warning/20",
};

const MetricCard = ({ title, value, unit, trend, icon: Icon, color, status }: MetricCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br", 
            color === "primary" && "from-primary/20 to-primary/10",
            color === "accent" && "from-accent/20 to-accent/10",
            color === "success" && "from-success/20 to-success/10",
            color === "warning" && "from-warning/20 to-warning/10"
          )}>
            <Icon className={cn("w-6 h-6", colorClasses[color])} />
          </div>
          <Badge variant="outline" className={cn("capitalize", statusColors[status])}>
            {status}
          </Badge>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{value}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
          <p className={cn("text-sm font-medium", trend.startsWith("+") ? "text-success" : "text-destructive")}>
            {trend} from yesterday
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
