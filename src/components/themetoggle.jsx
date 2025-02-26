
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/themecontext.jsx";

const ThemeToggle = () => {
  const { theme , toggleTheme } = useTheme();

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
        theme === 'dark' ? "bg-gray-800" : "bg-gray-300"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 ${
          theme === 'dark' ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {theme === 'dark' ? (
          <MdDarkMode className="text-gray-900 text-lg" />
        ) : (
          <CiLight className="text-yellow-500 text-lg" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
