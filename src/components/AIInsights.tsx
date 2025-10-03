import { Brain, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insights = [
  {
    id: 1,
    type: "positive",
    icon: CheckCircle,
    title: "Great sleep consistency",
    description: "You've maintained 7+ hours of sleep for 5 consecutive days. Keep it up!",
    priority: "low",
  },
  {
    id: 2,
    type: "suggestion",
    icon: TrendingUp,
    title: "Heart rate recovery improving",
    description: "Your resting heart rate has decreased by 3 bpm this week, indicating improved cardiovascular fitness.",
    priority: "medium",
  },
  {
    id: 3,
    type: "warning",
    icon: AlertCircle,
    title: "Low activity on Thursday",
    description: "Only 4,200 steps recorded. Try to aim for at least 8,000 steps daily for optimal health.",
    priority: "high",
  },
];

const priorityColors = {
  low: "bg-success/10 text-success border-success/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  high: "bg-destructive/10 text-destructive border-destructive/20",
};

const AIInsights = () => {
  return (
    <Card className="shadow-medium">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle>AI Health Insights</CardTitle>
              <CardDescription>Personalized recommendations based on your data</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            3 new insights
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.id}
                className="flex gap-4 p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  insight.type === "positive" ? "bg-success/10" :
                  insight.type === "warning" ? "bg-destructive/10" :
                  "bg-primary/10"
                }`}>
                  <Icon className={`w-5 h-5 ${
                    insight.type === "positive" ? "text-success" :
                    insight.type === "warning" ? "text-destructive" :
                    "text-primary"
                  }`} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{insight.title}</h4>
                    <Badge variant="outline" className={priorityColors[insight.priority]}>
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
