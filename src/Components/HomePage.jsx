import { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';


function HomePage({sideNavbar}){

    // const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy",];
    const options = ["All", "JavaScript", "React", "MongoDB", "MERN Stack", "Web Development", "HTML", "CSS", "Nodejs", "Expressjs", "FrontEnd", "BackEnd", "Fullstack Development", "Poetry"];
    return (
        <>
        <div className={sideNavbar? "homePage" : "fullHomePage"}>
            <div className="homePage_options">
                {
                    options.map((item, index)=>{
                        return (
                            <div key={index} className="homePage_option">{item}</div>
                        )
                    })
                }
                
            </div>


            <div className={sideNavbar? "home_mainPage": "home_mainPageWithoutLink"}>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
                        <div className="youtube_timingThumbnail">3:10:47</div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
                        <div className="youtube_timingThumbnail">3:10:47</div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
                        <div className="youtube_timingThumbnail">3:10:47</div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
                        <div className="youtube_timingThumbnail">3:10:47</div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
                        <div className="youtube_timingThumbnail">3:10:47</div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
                        <div className="youtube_timingThumbnail">3:10:47</div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>
                </Link>


            </div>
        </div>
        </>
    )
}

export default HomePage;