import React from 'react'
import '../CSS/HomePage.css'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

function Video({ _id, title, channel, views, thumbnail, uploadDate }) {
    if (!channel || !channel._id) return null;
    return (
        <div className='video'> 
            <Link className='video-img' to={`/Video/${_id}`}>
                <img src={thumbnail} alt={title} className='thumbnail' />
            </Link>
            <div>
                <div>
                    <Link to={`/Video/${_id}`}>
                        <div className='video-title'>{title}</div>
                    </Link>
                    <Link to={`/channels/${channel._id}`}>
                        <div className='channel-name'>{channel.channelName}</div>
                    </Link>
                    <div className='views'>
                        {views} views
                        <span className="video-date">
                            {uploadDate
                                ? " • " + formatDistanceToNow(new Date(uploadDate), { addSuffix: true }).replace('about ', '')
                                : ""}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video