// Header.jsx
import React from "react";
import { FaTasks } from "react-icons/fa"; // Importing an icon from react-icons

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <FaTasks /> To-Do List
      </h1>
    </header>
  );
};

export default Header;
