import SideNavbar from '../Components/sideNavbar';
import { FaCaretRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Profile.css'

function Profile({sideNavbar}){
    return (
        <>
        <div className="profile">
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="Profile Image" className="profile_top_section_img" />
                    </div>

                    <div className="profile_top_section_About">
                        <div className="profile_top_section_About_Name">CodingHunger</div>
                        <div className="profile_top_section_info">
                            @user1 .  4 videos
                        </div>
                        <div className="profile_top_section_info">
                            This is a coding tutorial channel
                        </div>
                    </div>
                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <FaCaretRight /></div>
                    <div className="profileVideos">
                        <Link to={'/watch/8989'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAinRrwPE5pzrycYfnhB4Za4rgb99sfmR2kg&s" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2025-07-05</div>
                            </div>
                        </Link>

                        <Link to={'/watch/8989'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAinRrwPE5pzrycYfnhB4Za4rgb99sfmR2kg&s" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2025-07-05</div>
                            </div>
                        </Link>

                        <Link to={'/watch/8989'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAinRrwPE5pzrycYfnhB4Za4rgb99sfmR2kg&s" alt="" className="profileVideo_block_thumbnail_img" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2025-07-05</div>
                            </div>
                        </Link>


                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Profile;