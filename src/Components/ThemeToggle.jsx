import React from 'react';
import '../App.css'

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setDarkMode((prev) => !prev)}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        marginLeft: 100,
        padding: '0.5rem 1rem',
        borderRadius: 10,
        border: 'none',
        background: darkMode ? '#222' : '333333',
        color: darkMode ? '#fff' : '#fff',
        cursor: 'pointer',
        fontWeight: 600
      }}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;
