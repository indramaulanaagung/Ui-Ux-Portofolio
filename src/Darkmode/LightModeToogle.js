import React from "react";
import { useTheme } from "./ThemeContext";

function LightModeToggle() {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <div className="">
      <div className="toggle-switch ">
        <label className="switch-label">
          <input type="checkbox" className="checkbox" onClick={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default LightModeToggle;
