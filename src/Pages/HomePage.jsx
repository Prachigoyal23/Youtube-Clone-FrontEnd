import React from 'react'
import Sidebar from '../Components/Sidebar.jsx'
import Videolist from '../Components/Videolist.jsx'
import '../CSS/HomePage.css'
import { useOutletContext } from 'react-router-dom'

function HomePage() {
  const { sidebarOpen } = useOutletContext();
  return (
    <div className='homepage'>
        <Videolist sidebarOpen={sidebarOpen} />
    </div>
  )
}

export default HomePage