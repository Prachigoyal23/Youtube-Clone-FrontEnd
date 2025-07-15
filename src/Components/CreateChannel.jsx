import React, { useState } from 'react'
import '../CSS/CreateChannel.css'
import axios from 'axios'
import { useAuth } from '../Context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function CreateChannel() {
    // State for the form fields
    const [form, setForm] = useState({
        channelName: '',
        description: '',
        channelPic: '',
        channelBanner: ''
    });

     // Get user and setUser from AuthContext
    const { user, setUser } = useAuth();

    // For navigation after successful channel creation
    const navigate = useNavigate();

     // Loading state for submit button
    const [loading, setLoading] = useState(false);

     // Handle input changes for all form fields
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

       // Handle form submission
    const handleSubmit = async e => {
        e.preventDefault();
        // If user is not logged in, show error and return
        if (!user) {
            toast.error("Login required to create a channel.");
            return;
        }
        setLoading(true);
        try {
            // Send POST request to backend to create a channel
            const { data } = await axios.post(
                "http://localhost:4000/api/channel",
                form,
                { headers: { Authorization: `JWT ${user.token}` } }
            );
            // Update user context with new channelId
            setUser({ ...user, channelId: data.channelId || data._id });
            toast.success("Channel created!");
            // redirect to channel 
            navigate("/channel");
        } catch (err) {
            toast.error("Failed to create channel: " + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="CreateChannelModalBg">
            <div className="CreateChannelModal">
                <h2 className="CreateChannelTitle">Create Your Channel</h2>
                <form className="CreateChannelForm" onSubmit={handleSubmit}>
                    <div className="create-channel-avatar-section">
                        <img
                            src={form.channelPic || "https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg"}
                            alt="Channel avatar"
                            className="create-channel-avatar"
                        />
                        <input
                            type="url"
                            name="channelPic"
                            placeholder="Channel Picture URL"
                            value={form.channelPic}
                            onChange={handleChange}
                            className="create-channel-input"
                        />
                    </div>
                    <div className="create-channel-fields">
                        <label className="create-channel-label">Name <span style={{color: "red"}}>*</span></label>
                        <input
                            className="create-channel-input"
                            name="channelName"
                            type="text"
                            placeholder="Channel Name"
                            value={form.channelName}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <label className="create-channel-label">Description <span style={{color: "red"}}>*</span></label>
                        <textarea
                            className="create-channel-input"
                            name="description"
                            placeholder="Channel Description"
                            value={form.description}
                            onChange={handleChange}
                            rows={2}
                        />
                        <label className="create-channel-label">Banner URL</label>
                        <input
                            className="create-channel-input"
                            name="channelBanner"
                            type="url"
                            placeholder="Channel Banner URL"
                            value={form.channelBanner}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="create-channel-actions">
                        <button
                            type="button"
                            className="create-channel-cancel"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="create-channel-submit"
                            disabled={!form.channelName || loading}
                        >
                            {loading ? "Creating..." : "Create channel"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateChannel