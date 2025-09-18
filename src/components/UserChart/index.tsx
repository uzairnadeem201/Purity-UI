import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
const UserChart = () => {
   const data = [
    { day: "05-01", users: 120 },
    { day: "05-02", users: 340 },
    { day: "05-03", users: 220 },
    { day: "05-04", users: 410 },
    { day: "05-05", users: 95 },
    { day: "05-06", users: 300 },
    { day: "05-07", users: 480 },
    { day: "05-08", users: 150 },
    { day: "05-09", users: 270 },
  ];
  return (
    
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20}}
        style={{
      background: "linear-gradient(112deg, #31386A 0%, #151928 100%)",
      borderRadius: "12px",
      padding: "1rem",
    }}
      >
        <XAxis hide={true} dataKey="day" />
        <YAxis tickLine={false} axisLine={false} tickMargin={80} tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="middle"
              fill="white"
              opacity="1"
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "sans-serif",
              }}
            >
              {payload.value}
            </text>
          )} />
        <Tooltip />
        <Bar
          dataKey="users"
          fill="white"
          barSize={8}
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserChart;
