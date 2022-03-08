import React from 'react';

export default function Navbar(props) {
  const { darkMode,toggleDarkMode } = props
  const addDarkMode = darkMode ? "darkMode" : ""
  return (
    <nav
      className={`navbar ${addDarkMode}`}>
      <div className="container">
        <h1>Where in the world?</h1>
        <p
          className="light--mode-txt ">Light Mode</p>
        <div
          className="dark-btn"
          onClick={toggleDarkMode}
        >
          <div className="circle"></div>
        </div>
        <p className="dark--mode-txt">Dark Mode</p>
      </div>
    </nav>
  );
}