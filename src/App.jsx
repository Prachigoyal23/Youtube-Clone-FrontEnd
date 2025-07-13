import React, { useEffect, useState } from 'react'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'
import ThemeToggle from './Components/ThemeToggle.jsx'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchedVal, setSearchedVal] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    // Calculate left margin based on sidebar state
    const mainContentStyle = {
        marginLeft: sidebarOpen ? 220 : 72,
        transition: 'margin-left 0.2s cubic-bezier(.4,0,.2,1)'
    };

    // Called when search button is clicked
    const handleSearch = () => {
        setSearchActive(true);
    };

    useEffect(() => {
        document.body.className = darkMode ? '' : 'light';
    }, [darkMode]);


    return (
        <>
            <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                searchedVal={searchedVal}
                setSearchedVal={setSearchedVal}
                onSearch={handleSearch}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className={`app-layout ${darkMode ? 'dark-theme' : 'light-theme'}`}>
                <Sidebar sidebarOpen={sidebarOpen} />
                <div className="main-content" style={mainContentStyle}>
                    <Outlet context={{
                        sidebarOpen,
                        searchedVal,
                        setSearchedVal,
                        searchActive,
                        setSearchActive
                    }} />
                </div>
            </div> 
        </>
    )
}

export default App