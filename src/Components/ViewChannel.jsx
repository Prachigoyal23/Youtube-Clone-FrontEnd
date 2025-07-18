import React, { useState, useEffect } from 'react'
import '../CSS/Channel.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit, MdDelete, MdUpload, MdSave, MdClose } from "react-icons/md";
import { Link, useOutletContext } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../Context/AuthContext.jsx';
import { toast } from 'react-toastify';

function ViewChannel() {
  const { sidebarOpen } = useOutletContext();
  const { user } = useAuth();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);
  const [descExpanded, setDescExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Upload/edit modal state
  const [showUpload, setShowUpload] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editVideo, setEditVideo] = useState(null);

  // Upload/edit form state
  const initialForm = {
    title: '',
    videoLink: '',
    thumbnail: '',
    description: '',
    category: ''
  };
  const [form, setForm] = useState(initialForm);
  const [formLoading, setFormLoading] = useState(false);

  // Channel edit modal state
  const [showEditChannel, setShowEditChannel] = useState(false);
  const [channelEditForm, setChannelEditForm] = useState({
    channelName: "",
    channelBanner: "",
    channelPic: "",
    description: ""
  });
  const [channelEditLoading, setChannelEditLoading] = useState(false);

  // Fetch channel and videos
  useEffect(() => {
        if (!user?.channelId) return;
        setLoading(true);
        setError(null);
        axios.get(`http://localhost:4000/api/channel/${user.channelId}`)
            .then(res => {
                setChannel(res.data);
                setVideos(res.data.videos || []);
            })
            .catch(err => {
                setError("Failed to load channel.");
            })
            .finally(() => setLoading(false));
    }, [user?.channelId]);

  const descLimit = 180;
  const showMore = channel && channel.description && channel.description.length > descLimit;
  const descToShow = channel && channel.description
    ? (descExpanded ? channel.description : channel.description.slice(0, descLimit))
    : "";

    // handle the delete data
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this video?")) return;
    try {
      await axios.delete(
        `http://localhost:4000/api/video/${id}`,
        { headers: { Authorization: `JWT ${user.token}` } }
      );
      setVideos(videos => videos.filter(v => v._id !== id));
      setMenuOpen(null);
    } catch (err) {
      toast.error("Failed to delete video");
    }
  };

  // Open upload modal
  const handleUpload = () => {
    setForm(initialForm);
    setShowUpload(true);
  };

  // Open edit modal
  const handleEdit = (id) => {
    const video = videos.find(v => v._id === id);
    if (video) {
      setEditVideo(video);
      setForm({
        title: video.title || '',
        videoLink: video.videoLink || '',
        thumbnail: video.thumbnail || '',
        description: video.description || '',
        category: video.category || ''
      });
      setShowEdit(true);
    }
    setMenuOpen(null);
  };

  // Upload video
  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await axios.post(
        "http://localhost:4000/api/video",
        form,
        { headers: { Authorization: `JWT ${user.token}` } }
      );
      // Refresh videos
      const res = await axios.get(`http://localhost:4000/api/channel/${user.channelId}`);
      setChannel(res.data);
      setVideos(res.data.videos || []);
      setShowUpload(false);
      setForm(initialForm);
    } catch (err) {
      toast.error("Failed to upload video: " + (err.response?.data?.message || err.message));
    } finally {
      setFormLoading(false);
    }
  };

  // Edit video
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editVideo) return;
    setFormLoading(true);
    try {
      await axios.put(
        `http://localhost:4000/api/video/${editVideo._id}`,
        form,
        { headers: { Authorization: `JWT ${user.token}` } }
      );
      // Refresh videos after update
      const res = await axios.get(`http://localhost:4000/api/channel/${user.channelId}`);
      setChannel(res.data);
      setVideos(res.data.videos || []);
      setShowEdit(false);
      setEditVideo(null);
      setForm(initialForm);
    } catch (err) {
      alert("Failed to update video: " + (err.response?.data?.message || err.message));
    } finally {
      setFormLoading(false);
    }
  };

  // Prepare channel edit form when opening modal
  const openEditChannelModal = () => {
    setChannelEditForm({
      channelName: channel.channelName || "",
      channelBanner: channel.channelBanner || "",
      channelPic: channel.channelPic || "",
      description: channel.description || ""
    });
    setShowEditChannel(true);
  };

  const handleChannelEditChange = e => {
    setChannelEditForm({ ...channelEditForm, [e.target.name]: e.target.value });
  };

  const handleChannelEditSave = async (e) => {
    e.preventDefault();
    setChannelEditLoading(true);
    try {
      await axios.put(
        `http://localhost:4000/api/updateChannel/${channel._id}`,
        channelEditForm,
        { headers: { Authorization: `JWT ${user.token}` } }
      );
      // Refresh channel data
      const res = await axios.get(`http://localhost:4000/api/channel/${user.channelId}`);
      setChannel(res.data);
      setShowEditChannel(false);
    } catch (err) {
      toast.error("Failed to update channel: " + (err.response?.data?.message || err.message));
    } finally {
      setChannelEditLoading(false);
    }
  };

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (loading) return <div style={{ padding: 32 }}>Loading...</div>;
  if (error) return <div style={{ padding: 32, color: 'red' }}>{error}</div>;
  if (!channel) return null;

  return (
    <div className="channel-page">
      {/* Channel Edit Modal */}
      {showEditChannel && (
        <div className="edit-channel-modal-bg">
          <div className="edit-channel-modal">
            <h2 className="edit-channel-title">Edit Channel Details</h2>
            <form className="edit-channel-form" onSubmit={handleChannelEditSave}>
              <label className="edit-channel-label">Channel Name</label>
              <input
                className="edit-channel-input"
                name="channelName"
                type="text"
                placeholder="Channel name"
                value={channelEditForm.channelName}
                onChange={handleChannelEditChange}
                required
                autoFocus
              />
              <label className="edit-channel-label">Description</label>
              <textarea
                className="edit-channel-input"
                name="description"
                placeholder="Channel description"
                value={channelEditForm.description}
                onChange={handleChannelEditChange}
                rows={3}
              />
              <label className="edit-channel-label">Banner URL</label>
              <input
                className="edit-channel-input"
                name="channelBanner"
                type="url"
                placeholder="Banner image URL"
                value={channelEditForm.channelBanner}
                onChange={handleChannelEditChange}
              />
              <img
                src={channelEditForm.channelBanner || "https://img.freepik.com/premium-vector/free-vector-gradient-youtube-horizontal-banner_726768-1146.jpg?semt=ais_hybrid&w=740"}
                alt="Banner preview"
                className="edit-channel-banner-preview"
              />
              <label className="edit-channel-label">Channel Picture URL</label>
              <input
                className="edit-channel-input"
                name="channelPic"
                type="url"
                placeholder="Channel picture URL"
                value={channelEditForm.channelPic}
                onChange={handleChannelEditChange}
              />
              <img
                src={channelEditForm.channelPic || "https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg"}
                alt="Avatar preview"
                className="edit-channel-avatar-preview"
              />
              <div className="edit-channel-actions">
                <button
                  type="button"
                  className="edit-channel-cancel"
                  onClick={() => setShowEditChannel(false)}
                  disabled={channelEditLoading}
                >
                  <MdClose style={{ marginRight: 6 }} />
                  Cancel
                </button>
                <button
                  type="submit"
                  className="edit-channel-save"
                  disabled={channelEditLoading || !channelEditForm.channelName}
                >
                  <MdSave style={{ marginRight: 6 }} />
                  {channelEditLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUpload && (
        <div className="CreateChannelModalBg" style={{ zIndex: 3000 }}>
          <div className="CreateChannelModal" style={{ maxWidth: 500 }}>
            <h2 className="CreateChannelTitle">Upload Video</h2>
            <form className="CreateChannelForm" onSubmit={handleUploadSubmit}>
              <div className="create-channel-fields">
                <label className="create-channel-label">Title</label>
                <input
                  className="create-channel-input"
                  name="title"
                  type="text"
                  placeholder="Video title"
                  value={form.title}
                  onChange={handleFormChange}
                  required
                  autoFocus
                />
                <label className="create-channel-label">Video Link (URL)</label>
                <input
                  className="create-channel-input"
                  name="videoLink"
                  type="url"
                  placeholder="Video file URL"
                  value={form.videoLink}
                  onChange={handleFormChange}
                  required
                />
                <label className="create-channel-label">Thumbnail URL</label>
                <input
                  className="create-channel-input"
                  name="thumbnail"
                  type="url"
                  placeholder="Thumbnail image URL"
                  value={form.thumbnail}
                  onChange={handleFormChange}
                  required
                />
                <label className="create-channel-label">Description</label>
                <textarea
                  className="create-channel-input"
                  name="description"
                  placeholder="Video description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={2}
                />
                <label className="create-channel-label">Category</label>
                <input
                  className="create-channel-input"
                  name="category"
                  type="text"
                  placeholder="Category"
                  value={form.category}
                  onChange={handleFormChange}
                />
              </div>
              <div className="create-channel-actions">
                <button
                  type="button"
                  className="create-channel-cancel"
                  onClick={() => setShowUpload(false)}
                  disabled={formLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="create-channel-submit"
                  disabled={!form.title || !form.videoLink || !form.thumbnail || formLoading}
                >
                  {formLoading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <div className="CreateChannelModalBg" style={{ zIndex: 3000 }}>
          <div className="CreateChannelModal" style={{ maxWidth: 500 }}>
            <h2 className="CreateChannelTitle">Edit Video</h2>
            <form className="CreateChannelForm" onSubmit={handleEditSubmit}>
              <div className="create-channel-fields">
                <label className="create-channel-label">Title</label>
                <input
                  className="create-channel-input"
                  name="title"
                  type="text"
                  placeholder="Video title"
                  value={form.title}
                  onChange={handleFormChange}
                  required
                  autoFocus
                />
                <label className="create-channel-label">Video Link (URL)</label>
                <input
                  className="create-channel-input"
                  name="videoLink"
                  type="url"
                  placeholder="Video file URL"
                  value={form.videoLink}
                  onChange={handleFormChange}
                  required
                />
                <label className="create-channel-label">Thumbnail URL</label>
                <input
                  className="create-channel-input"
                  name="thumbnail"
                  type="url"
                  placeholder="Thumbnail image URL"
                  value={form.thumbnail}
                  onChange={handleFormChange}
                  required
                />
                <label className="create-channel-label">Description</label>
                <textarea
                  className="create-channel-input"
                  name="description"
                  placeholder="Video description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={2}
                />
                <label className="create-channel-label">Category</label>
                <input
                  className="create-channel-input"
                  name="category"
                  type="text"
                  placeholder="Category"
                  value={form.category}
                  onChange={handleFormChange}
                />
              </div>
              <div className="create-channel-actions">
                <button
                  type="button"
                  className="create-channel-cancel"
                  onClick={() => { setShowEdit(false); setEditVideo(null); }}
                  disabled={formLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="create-channel-submit"
                  disabled={!form.title || !form.videoLink || !form.thumbnail || formLoading}
                >
                  {formLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="channel-banner-container">
        <img
          className="channel-banner"
          src={channel.channelBanner || "https://img.freepik.com/premium-vector/free-vector-gradient-youtube-horizontal-banner_726768-1146.jpg?semt=ais_hybrid&w=740"}
          alt="Channel banner"
        />
      </div>
      <div className="channel-header">
        <img className="channel-avatar" src={channel.channelPic || "https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg"} alt={channel.channelName} />
        <div className="channel-info">
          <div className="channel-title">{channel.channelName}</div>
          <div className="channel-meta">
            <span className="channel-subs">{channel.subscribers} subscribers</span>
            <span className="channel-videos">{videos.length} videos</span>
          </div>
          <div className="channel-desc">
            {descToShow}
            {showMore && !descExpanded && (
              <span className="desc-more" onClick={() => setDescExpanded(true)}>...more</span>
            )}
            {showMore && descExpanded && (
              <span className="desc-less" onClick={() => setDescExpanded(false)}> Show less</span>
            )}
          </div>
          <div className="channel-actions">
            <button className="channel-btn" onClick={handleUpload}>
              <MdUpload style={{ marginRight: 6, fontSize: "1.2rem" }} />
              Upload video
            </button>
            <button className="channel-btn" onClick={openEditChannelModal}>
              Customize channel
            </button>
            
          </div>
        </div>
      </div>
      <div className="channel-tabs">
        <div className="channel-tab">Home</div>
        <div className="channel-tab active">Videos</div>
        <div className="channel-tab">Playlists</div>
      </div>
      <div className="channel-videos-list">
        {videos.map(video => (
          <div className="channel-video-card" key={video._id}>
            <Link to={`/video/${video._id}`}>
              <img className="channel-video-thumb" src={video.thumbnail} alt={video.title} />
            </Link>
            <div className="channel-video-info">
              <div className="channel-video-title">{video.title}</div>
              <div className="channel-video-meta">
                <span>{video.views} views</span>
                <span className="channel-dot">·</span>
                <span>{video.uploadDate? new Date(video.uploadDate).toLocaleDateString("en-US", {year: "numeric",month: "long",day: "numeric"}): ""}</span>
              </div>
            </div>
            <div className="channel-video-actions">
              <span
                className="channel-video-meatball"
                tabIndex={0}
                onClick={() => setMenuOpen(menuOpen === video._id ? null : video._id)}
              >
                <BsThreeDotsVertical />
                {menuOpen === video._id && (
                  <div className="channel-video-dropdown">
                    <button className="channel-video-dropdown-item" onClick={() => handleEdit(video._id)}>
                      <MdEdit style={{ marginRight: 6 }} /> Edit
                    </button>
                    <button className="channel-video-dropdown-item delete" onClick={() => handleDelete(video._id)}>
                      <MdDelete style={{ marginRight: 6 }} /> Delete
                    </button>
                  </div>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewChannel