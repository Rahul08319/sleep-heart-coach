import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", bpm: 68 },
  { day: "Tue", bpm: 72 },
  { day: "Wed", bpm: 70 },
  { day: "Thu", bpm: 75 },
  { day: "Fri", bpm: 71 },
  { day: "Sat", bpm: 69 },
  { day: "Sun", bpm: 72 },
];

const HeartRateChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="day" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          domain={[60, 80]}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
          }}
        />
        <Line 
          type="monotone" 
          dataKey="bpm" 
          stroke="hsl(var(--primary))" 
          strokeWidth={3}
          dot={{ fill: "hsl(var(--primary))", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HeartRateChart;
