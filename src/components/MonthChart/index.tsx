import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from "recharts";

const MonthCharts = () => {
  const data = [
    { name: "Jan", uv: 120, pv: 300, amt: 200 },
    { name: "Feb", uv: 450, pv: 100, amt: 320 },
    { name: "Mar", uv: 300, pv: 420, amt: 150 },
    { name: "Apr", uv: 220, pv: 180, amt: 400 },
    { name: "May", uv: 80, pv: 250, amt: 310 },
    { name: "June", uv: 340, pv: 150, amt: 290 },
    { name: "July", uv: 500, pv: 410, amt: 120 },
    { name: "Aug", uv: 160, pv: 350, amt: 240 },
    { name: "Sep", uv: 90, pv: 200, amt: 500 },
    { name: "Oct", uv: 300, pv: 320, amt: 270 },
    { name: "Nov", uv: 410, pv: 450, amt: 180 },
    { name: "Dec", uv: 250, pv: 90, amt: 370 },
  ];

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 22 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="1%" stopColor="black" stopOpacity={0.4} />
            <stop offset="85%" stopColor="black" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="1%" stopColor="teal" stopOpacity={0.4} />
            <stop offset="95%" stopColor="teal" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          axisLine={false}
          tickLine={false}
          tickMargin={30}
          dataKey="name"
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y + 15}
              textAnchor="middle"
              fill="gray"
              opacity="0.5"
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "sans-serif",
              }}
            >
              {payload.value}
            </text>
          )}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={30}
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y + 15}
              textAnchor="middle"
              fill="gray"
              opacity="0.5"
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "sans-serif",
              }}
            >
              {payload.value}
            </text>
          )}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="black"
          strokeWidth={"3px"}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="teal"
          strokeWidth={"3px"}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MonthCharts;
