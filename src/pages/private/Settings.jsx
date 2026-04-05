import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Settings() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="p-6">
      <h2>Settings</h2>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}