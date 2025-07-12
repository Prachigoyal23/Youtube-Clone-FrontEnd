import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
import '../CSS/HomePage.css'
import { Link } from 'react-router-dom';

// This Component only contain the sidebar logo and names
function Sidebar({ sidebarOpen }) {
    return (
        <nav className={`sideBar${sidebarOpen ? '' : ' collapsed'}`}>
            <Link to="/" className="sideBar-item">
                <IoMdHome />
                <span className="sideBar-label">Home</span>
            </Link>
            <div className="sideBar-item">
                <SiYoutubeshorts />
                <span className="sideBar-label">Shorts</span>
            </div>
            <div className="sideBar-item">
                <MdSubscriptions />
                <span className="sideBar-label">Subscriptions</span>
            </div>
            <hr/>
            <div className="sideBar-item">
                <span className="sideBar-label"><h4>You</h4></span>
            </div>
            <div className="sideBar-item">
                <MdOutlineHistory />
                <span className="sideBar-label">History</span>
            </div>
            <div className="sideBar-item">
                <MdPlaylistPlay />
                <span className="sideBar-label">Playlists</span>
            </div>
            <div className="sideBar-item">
                <PiVideoFill />
                <span className="sideBar-label">Your Videos</span>
            </div>
            <div className="sideBar-item">
                <MdOutlineWatchLater />
                <span className="sideBar-label">Watch later</span>
            </div>
            <div className="sideBar-item">
                <BiLike />
                <span className="sideBar-label">Liked Videos</span>
            </div>
            <hr />
            <div className="sideBar-item">
                <span className="sideBar-label"><h4>Subscription</h4></span>
            </div>
            <div className="sideBar-item">
                <MdOutlineSchool />
                <span className="sideBar-label">Internshala</span>
            </div>
            <div className="sideBar-item">
                <FaMusic />
                <span className="sideBar-label">Music</span>
            </div>
        </nav>
    )
}

export default Sidebar