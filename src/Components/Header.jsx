import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaUser } from "react-icons/fa";
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/HomePage.css'
import '../CSS/Login.css'
import UserModal from './UserModal.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';

function Header({ sidebarOpen, setSidebarOpen, searchedVal, setSearchedVal, onSearch }) {
    const { user, setUser } = useAuth(); // get user from context
    const navigate = useNavigate(); 
    const [showModal, setShowModal] = useState(false);
    const [showUpload, setShowUpload] = useState(false);
    const [form, setForm] = useState({
        title: '',
        videoLink: '',
        thumbnail: '',
        description: '',
        category: ''
    });
    const [formLoading, setFormLoading] = useState(false);

    function handleSearchInput(e) {
        setSearchedVal(e.target.value);
    }

    function handleSearchBtn(e) {
        e.preventDefault();
        if (onSearch) onSearch();
    }

    const handleUpload = () => {
        setForm(initialForm);
        setShowUpload(true);
    };

    const handleUploadSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);
 
        const trimmed = {
            title: form.title.trim(),
            videoLink: form.videoLink.trim(),
            thumbnail: form.thumbnail.trim(),
            description: form.description.trim(),
            category: form.category.trim()
        };
        // Check required fields
        if (!trimmed.title || !trimmed.videoLink || !trimmed.thumbnail) {
            alert("Please fill in all required fields.");
            setFormLoading(false);
            return;
        }
        try {
            // user is available from context
            await axios.post(
                "http://localhost:4000/api/video",
                trimmed,
                { headers: { Authorization: `JWT ${user.token}` } }
            );
            toast.success("Video uploaded!");
            setShowUpload(false);
            setForm({
                title: '',
                videoLink: '',
                thumbnail: '',
                description: '',
                category: ''
            });
        } catch (err) {
            toast.error("Failed to upload video: " + (err.response?.data?.message || err.message));
        } finally {
            setFormLoading(false);
        }
    };

    return (
        <> 
        <header className='header'>
                <div className='left'>
                    <span onClick={() => setSidebarOpen(!sidebarOpen)} >
                        <RxHamburgerMenu style={{cursor: 'pointer'}}/>
                    </span>
                    <Link to="/" className='youtube'>
                        <FaYoutube className="youtube-icon" />
                        <h2>YouTube Clone</h2>
                    </Link>
                </div>
                <div className='middle'>
                    <input placeholder="Search..." onChange={handleSearchInput} value={searchedVal} />
                    <button onClick={handleSearchBtn}><CiSearch /></button>
                </div>
                <div className='right'>

                    {user ? (
                        <>
                            <img
                                src={user.user.avatar}
                                alt="Profile"
                                className="header-avatar"
                                onClick={() => setShowModal(v => !v)}
                                style={{ cursor: 'pointer', borderRadius: '100%' }}
                            />
                            {showModal && <UserModal setShowModal={setShowModal} onClose={() => setShowModal(false)} />}
                        </>
                        ) : (
                        <>
                            <Link to="/login" className="header-login-link">Sign In</Link>
                            <Link to="/register" className="header-login-link signup">Sign Up</Link>
                        </>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header