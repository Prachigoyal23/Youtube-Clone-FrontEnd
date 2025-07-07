
import { useState, useEffect } from 'react';
import SideNavbar from '../Components/sideNavbar';
import './ViewChannel.css';

function ViewChannel() {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ title: '', url: '', views: 0 });

  useEffect(() => {
    const savedChannel = JSON.parse(localStorage.getItem('channel'));
    const savedVideos = JSON.parse(localStorage.getItem('channelVideos')) || [];
    setChannel(savedChannel);
    setVideos(savedVideos);
  }, []);

  const handleAddVideo = () => {
    const updatedVideos = [...videos, { ...newVideo, id: Date.now() }];
    setVideos(updatedVideos);
    localStorage.setItem('channelVideos', JSON.stringify(updatedVideos));
    setNewVideo({ title: '', url: '', views: 0 });
  };

  const deleteVideo = (id) => {
    const updated = videos.filter(v => v.id !== id);
    setVideos(updated);
    localStorage.setItem('channelVideos', JSON.stringify(updated));
  };

  const updateVideo = (id, updatedFields) => {
    const updated = videos.map(v => v.id === id ? { ...v, ...updatedFields } : v);
    setVideos(updated);
    localStorage.setItem('channelVideos', JSON.stringify(updated));
  };

  return (
    <div className="channelPage">
      <h2>{channel?.name}</h2>
      <p>{channel?.description}</p>

      <div className="addVideoForm">
        <input type="text" placeholder="Video Title" value={newVideo.title} onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })} />
        <input type="text" placeholder="Video URL" value={newVideo.url} onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })} />
        <button onClick={handleAddVideo}>Add Video</button>
      </div>

      <div className="videoList">
        {videos.map(video => (
          <div key={video.id} className="videoCard">
            <video src={video.url} controls width="320" />
            <h4>{video.title}</h4>
            <p>{video.views} views</p>
            <button onClick={() => deleteVideo(video.id)}>Delete</button>
            <button onClick={() => {
              const newTitle = prompt("New title:", video.title);
              if (newTitle) updateVideo(video.id, { title: newTitle });
            }}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewChannel;
