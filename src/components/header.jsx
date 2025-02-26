import { FaFileExport } from "react-icons/fa";
import { useTheme } from "../context/themecontext.jsx";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-between items-center p-4 shadow-md rounded-lg ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className={`text-xl font-bold ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
        Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <input
          type="date"
          className={`border p-2 rounded-md outline-none ${
            theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-black border-gray-300"
          }`}
        />
        <button
          className={`px-4 py-2 rounded-md flex items-center transition-all ${
            theme === "dark"
              ? "bg-purple-500 hover:bg-purple-400 text-white"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          <FaFileExport className="mr-2" /> Export CSV
        </button>
      </div>
    </div>
  );
};

export default Header;
