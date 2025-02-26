import { useTheme } from "../context/themecontext.jsx";

const packageTypes = [
  { label: "Very Large", value: 5 },
  { label: "Large", value: 15 },
  { label: "Medium", value: 31 },
  { label: "Small", value: 30 },
  { label: "Very Small", value: 19 },
];

const PackageType = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 shadow-md rounded-lg mt-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">Package Type</h2>
      {packageTypes.map((item, index) => (
        <div key={index} className="mb-2">
          <p>{item.label}</p>
          <div className={`h-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}>
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageType;
