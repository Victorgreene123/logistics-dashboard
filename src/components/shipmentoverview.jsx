import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "../context/themecontext.jsx";

const data = [
  { name: "Sat", Early: 4000, OnTime: 2400, Delay: 800 },
  { name: "Sun", Early: 3000, OnTime: 1398, Delay: 500 },
  { name: "Mon", Early: 2000, OnTime: 9800, Delay: 200 },
];

const ShipmentOverview = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 shadow-md rounded-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">Shipment Overview</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            tick={{ fill: theme === "dark" ? "#ffffff" : "#000000" }} 
            stroke={theme === "dark" ? "#ffffff" : "#000000"} 
          />
          <YAxis 
            tick={{ fill: theme === "dark" ? "#ffffff" : "#000000" }} 
            stroke={theme === "dark" ? "#ffffff" : "#000000"} 
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: theme === "dark" ? "#333" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
            }} 
          />
          <Bar dataKey="Early" fill="#8884d8" />
          <Bar dataKey="OnTime" fill="#82ca9d" />
          <Bar dataKey="Delay" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShipmentOverview;
