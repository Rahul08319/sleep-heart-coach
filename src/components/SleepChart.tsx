import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", hours: 7.5 },
  { day: "Tue", hours: 8.2 },
  { day: "Wed", hours: 7.8 },
  { day: "Thu", hours: 8.5 },
  { day: "Fri", hours: 7.2 },
  { day: "Sat", hours: 9.0 },
  { day: "Sun", hours: 8.2 },
];

const SleepChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="day" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          domain={[0, 10]}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
          }}
        />
        <Bar 
          dataKey="hours" 
          fill="hsl(var(--accent))" 
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SleepChart;
