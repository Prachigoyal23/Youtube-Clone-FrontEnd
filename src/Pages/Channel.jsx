import React, { useEffect } from 'react'
import { useAuth } from '../Context/AuthContext.jsx'
import ViewChannel from '../Components/ViewChannel.jsx';
import CreateChannel from '../Components/CreateChannel.jsx';
import { useNavigate, useOutletContext } from 'react-router-dom'
import Login from './Login.jsx'

function Channel() {
    const { sidebarOpen } = useOutletContext();
    const {user} = useAuth();

    return (
        <div className='channel-page'>
            {user?.channelId ? <ViewChannel />:<CreateChannel />}
        </div>
    )
}

export default Channel