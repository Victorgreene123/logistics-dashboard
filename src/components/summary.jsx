import { useTheme } from "../context/themecontext.jsx";

const summaryData = [
  { title: "Total Shipping", value: "25.012", color: "border-blue-500" },
  { title: "Package On Progress", value: "15.215", color: "border-yellow-500" },
  { title: "Ready For Pickup", value: "5.215", color: "border-purple-500" },
  { title: "Delivered", value: "100.215", color: "border-green-500" },
];

const SummaryCards = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className={`p-6 shadow-md rounded-lg border-l-4 ${item.color} ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <h2 className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{item.title}</h2>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
