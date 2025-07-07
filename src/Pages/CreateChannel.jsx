// src/Pages/CreateChannel.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <input type="email" name="Handle" placeholder="Handle's Email" onChange={handleChange} required />
        
        <div className="buttonGroup">
          <button><Link to={'/'}>Cancel</Link></button>
          <button type="submit">Create Channel</button>
        </div>
        
      </form>
    </div>
  );
}

export default CreateChannel;
