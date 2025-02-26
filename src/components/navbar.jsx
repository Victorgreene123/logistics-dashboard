import React from "react";
import { GoBellFill } from "react-icons/go";
import { LuCircleUserRound } from "react-icons/lu";
import ThemeToggle from "./themetoggle";
import { useTheme } from "../context/themecontext.jsx";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      className={`flex justify-between items-center h-16 px-6 border-b ${
        theme === "dark"
          ? "bg-gray-900 text-white border-gray-800"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      {/* Logo */}
      <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
        logistico
      </h2>

      {/* Navigation Links */}
      <ul
        className={`flex space-x-6 text-lg p-2 rounded-md px-10 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <li
          className={`border border-purple-600 border-dashed rounded-md px-2 cursor-pointer ${
            theme === "dark"
              ? "bg-gray-900 text-white hover:text-purple-400"
              : "bg-white text-black hover:text-purple-600"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-purple-400" : "hover:text-purple-600"
          }`}
        >
          Shipments
        </li>
        <li
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-purple-400" : "hover:text-purple-600"
          }`}
        >
          Analytics
        </li>
      </ul>

      {/* Icons & Theme Toggle */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <GoBellFill
          className={`text-xl cursor-pointer ${
            theme === "dark" ? "text-white hover:text-purple-400" : "text-purple-600"
          }`}
        />

        {/* User Profile Icon */}
        <LuCircleUserRound
          className={`text-xl cursor-pointer ${
            theme === "dark" ? "text-white hover:text-purple-400" : "text-purple-600"
          }`}
        />

        {/* Dark Mode Switch */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
