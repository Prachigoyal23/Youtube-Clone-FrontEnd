import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Video from './Video.jsx';
import '../CSS/HomePage.css';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import {DefaultVideo} from '../Context/DefaultVideo.js';

function Videolist({ sidebarOpen }) {
    const categories = ["All", "Programming", "JavaScript", "Data Science", "AI", "Finance", "Graphic Design", "Music", "Games", "MERN", "Courses", "Recipes"];
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const {
        searchedVal,
        setSearchedVal,
        searchActive,
        setSearchActive
    } = useOutletContext();
    const { user } = useAuth();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const { data } = await axios.get("http://localhost:4000/api/videos");
                setVideos(data);
            } catch (err) {
                console.error("Failed to load videos:", err);
            }
        };
        fetchVideos();
    }, []);

    const handleCategoryClick = (cat) => {
        setSelectedCategory(cat);
        setSearchedVal("");
        setSearchActive(false);
    };

    
    const videoIds = new Set(videos.map(v => v._id));
    const uniqueDefaultVideos = DefaultVideo.filter(v => !videoIds.has(v._id));
    let displayedVideos = user ? [...uniqueDefaultVideos, ...videos] : [];

    if (searchActive && searchedVal.trim()) {
        displayedVideos = displayedVideos.filter(v =>
            v.title?.toLowerCase().includes(searchedVal.trim().toLowerCase())
        );
    } else if (selectedCategory !== "All") {
        displayedVideos = displayedVideos.filter(v =>
            v.category?.toLowerCase() === selectedCategory.toLowerCase()
        );
    }

    const effectiveCategory = searchActive ? "All" : selectedCategory;

    return (
        <div className='home-page'>
            <div className='filter-options'>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn${effectiveCategory === cat ? ' active' : ''}`}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className='videoList'>
                {displayedVideos.map((video, idx) => (
                    <Video {...video} key={video._id || `video-${idx}`} />
                ))}
            </div>
        </div>
    );
}

export default Videolist;
