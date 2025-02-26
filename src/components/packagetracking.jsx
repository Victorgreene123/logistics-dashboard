import { useTheme } from "../context/themecontext.jsx";

const PackageTracking = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 shadow-md rounded-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">Package Tracking</h2>
      <input
        type="text"
        placeholder="Search Package ID"
        className={`border p-2 w-full rounded-md ${
          theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-black border-gray-300"
        }`}
      />
      <div className="mt-4 flex items-center justify-between">
        <p>
          Package ID: <span className="font-bold">9912494884013</span>
        </p>
      </div>
    </div>
  );
};

export default PackageTracking;
