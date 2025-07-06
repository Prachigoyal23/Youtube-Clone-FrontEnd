// src/Pages/CreateChannel.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateChannel.css';


function CreateChannel() {
  const [channelData, setChannelData] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setChannelData({ ...channelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save channel to localStorage or backend
    localStorage.setItem('channel', JSON.stringify(channelData));
    navigate('/channel');
  };

  return (
    <div className="createChannelPage">
      <h2>Create Your Channel</h2>
      <form onSubmit={handleSubmit} className="channelForm">
        <input type="text" name="name" placeholder="Channel Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Channel Description" onChange={handleChange} required />
        <button type="submit">Create Channel</button>
      </form>
    </div>
  );
}

export default CreateChannel;
