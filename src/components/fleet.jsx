import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "On The Move", value: 3725, color: "#0088FE" },
  { name: "In Maintenance", value: 250, color: "#FF8042" },
];

const FleetStatus = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Fleet Status</h2>
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#000" }} wrapperStyle={{ backgroundColor: "transparent" }} />
      </PieChart>
    </div>
  );
};

export default FleetStatus;
