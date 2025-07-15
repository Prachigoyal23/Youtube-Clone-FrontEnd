import React from 'react'
import { useAuth } from '../Context/AuthContext.jsx'
import '../CSS/Modal.css'
import { Link, useNavigate } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineAccountCircle, MdOutlineSwitchAccount, MdLogout } from "react-icons/md";

function UserModal({ onClose, setShowModal }) {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    // Placeholder handlers
    const handleViewChannel = () => {
        navigate("/channel");
        setShowModal(false);
    };
    const handleCreateChannel = () => {
        navigate("/createChannel");
        setShowModal(false);
    };
    const handleSignOut = () => {
        localStorage.removeItem('user');
        setShowModal(false);
        setUser(null);
    };

    if (!user) return null;

    return (
        <div className="user-modal-container" onClick={onClose}>
            <div className="user-modal" onClick={e => e.stopPropagation()}>
                <div className="user-modal-header">
                    <img src={user.user.avatar} alt={user.user.username || 'User'} className="user-modal-avatar" />
                    <div className="user-modal-info">
                        <div className="user-modal-username">{user.user.username || 'Guest'}</div>
                        <div className="user-modal-email">{user.user.email || 'No email'}</div>
                        {user.channelId ? (
                            <span className="user-modal-link" onClick={handleViewChannel}>View your channel</span>
                        ) : (
                            <span className="user-modal-link" onClick={handleCreateChannel}>Create your channel</span>
                        )}
                    </div>
                </div>
                <div className="user-modal-divider"></div>
                <div className="user-modal-list">
                    <div className="user-modal-listitem">
                        <MdOutlineAccountCircle className="user-modal-icon" />
                        Google Account
                    </div>
                    <div className="user-modal-listitem user-modal-listitem-arrow">
                        <MdOutlineSwitchAccount className="user-modal-icon" />
                        Switch account
                        <FiChevronRight className="user-modal-arrow" />
                    </div>
                    <div className="user-modal-listitem" onClick={handleSignOut}>
                        <MdLogout className="user-modal-icon" />
                        Log out
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default UserModal