import { Activity, Heart, Moon, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetricCard from "@/components/MetricCard";
import HeartRateChart from "@/components/HeartRateChart";
import SleepChart from "@/components/SleepChart";
import AIInsights from "@/components/AIInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">HealthSync</h1>
            </div>
            <Badge variant="outline" className="gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
              Connected
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Good morning, Alex</h2>
          <p className="text-muted-foreground">Here's your health summary for today</p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="Heart Rate"
            value="72"
            unit="bpm"
            trend="+2"
            icon={Heart}
            color="primary"
            status="normal"
          />
          <MetricCard
            title="Sleep Quality"
            value="8.2"
            unit="hrs"
            trend="+0.5"
            icon={Moon}
            color="accent"
            status="excellent"
          />
          <MetricCard
            title="Daily Steps"
            value="8,547"
            unit="steps"
            trend="+12%"
            icon={TrendingUp}
            color="success"
            status="good"
          />
          <MetricCard
            title="Active Energy"
            value="642"
            unit="kcal"
            trend="+85"
            icon={Zap}
            color="warning"
            status="good"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Heart Rate Trends</CardTitle>
              <CardDescription>Last 7 days average</CardDescription>
            </CardHeader>
            <CardContent>
              <HeartRateChart />
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Sleep Analysis</CardTitle>
              <CardDescription>Weekly sleep patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <SleepChart />
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <AIInsights />
      </main>
    </div>
  );
};

export default Index;
