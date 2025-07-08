// import { useState } from 'react';
// import './Homepage.css';
// import { Link } from 'react-router-dom';


// function HomePage({sideNavbar}){

//     // const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy",];
//     const options = ["All", "JavaScript", "React", "MongoDB", "MERN Stack", "Web Development", "HTML", "CSS", "Nodejs", "Expressjs", "FrontEnd", "BackEnd", "Fullstack Development", "Poetry"];
//     return (
//         <>
//         <div className={sideNavbar? "homePage" : "fullHomePage"}>
//             <div className="homePage_options">
//                 {
//                     options.map((item, index)=>{
//                         return (
//                             <div key={index} className="homePage_option">{item}</div>
//                         )
//                     })
//                 }
                
//             </div>


//             <div className={sideNavbar? "home_mainPage": "home_mainPageWithoutLink"}>

//                 <Link to={'/watch/9897'} className="youtube_Video">

//                     <div className="youtube_thumbnailBox">
//                         <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
//                         <div className="youtube_timingThumbnail">3:10:47</div>
//                     </div>

//                     <div className="youtubeTitleBox">
//                         <div className="youtubeTitleBoxProfile">
//                             <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                         </div>

//                         <div className="youtubeTitleBox_Title">
//                             <div className="youtube_videoTitle">User1</div>
//                             <div className="youtube_channelName">User1</div>
//                             <div className="youtubeVideo_views">3 Likes</div>
//                         </div>
//                     </div>
//                 </Link>

//                 <Link to={'/watch/9897'} className="youtube_Video">

//                     <div className="youtube_thumbnailBox">
//                         <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
//                         <div className="youtube_timingThumbnail">3:10:47</div>
//                     </div>

//                     <div className="youtubeTitleBox">
//                         <div className="youtubeTitleBoxProfile">
//                             <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                         </div>

//                         <div className="youtubeTitleBox_Title">
//                             <div className="youtube_videoTitle">User1</div>
//                             <div className="youtube_channelName">User1</div>
//                             <div className="youtubeVideo_views">3 Likes</div>
//                         </div>
//                     </div>
//                 </Link>

//                 <Link to={'/watch/9897'} className="youtube_Video">

//                     <div className="youtube_thumbnailBox">
//                         <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
//                         <div className="youtube_timingThumbnail">3:10:47</div>
//                     </div>

//                     <div className="youtubeTitleBox">
//                         <div className="youtubeTitleBoxProfile">
//                             <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                         </div>

//                         <div className="youtubeTitleBox_Title">
//                             <div className="youtube_videoTitle">User1</div>
//                             <div className="youtube_channelName">User1</div>
//                             <div className="youtubeVideo_views">3 Likes</div>
//                         </div>
//                     </div>
//                 </Link>

//                 <Link to={'/watch/9897'} className="youtube_Video">

//                     <div className="youtube_thumbnailBox">
//                         <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
//                         <div className="youtube_timingThumbnail">3:10:47</div>
//                     </div>

//                     <div className="youtubeTitleBox">
//                         <div className="youtubeTitleBoxProfile">
//                             <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                         </div>

//                         <div className="youtubeTitleBox_Title">
//                             <div className="youtube_videoTitle">User1</div>
//                             <div className="youtube_channelName">User1</div>
//                             <div className="youtubeVideo_views">3 Likes</div>
//                         </div>
//                     </div>
//                 </Link>

//                 <Link to={'/watch/9897'} className="youtube_Video">

//                     <div className="youtube_thumbnailBox">
//                         <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
//                         <div className="youtube_timingThumbnail">3:10:47</div>
//                     </div>

//                     <div className="youtubeTitleBox">
//                         <div className="youtubeTitleBoxProfile">
//                             <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                         </div>

//                         <div className="youtubeTitleBox_Title">
//                             <div className="youtube_videoTitle">User1</div>
//                             <div className="youtube_channelName">User1</div>
//                             <div className="youtubeVideo_views">3 Likes</div>
//                         </div>
//                     </div>
//                 </Link>

//                 <Link to={'/watch/9897'} className="youtube_Video">

//                     <div className="youtube_thumbnailBox">
//                         <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwFeIAxyTZDeCtY6FmNSjoTkBC5Q" alt="JavaScript lecture image" className="youtube_thumbnailPic" />
//                         <div className="youtube_timingThumbnail">3:10:47</div>
//                     </div>

//                     <div className="youtubeTitleBox">
//                         <div className="youtubeTitleBoxProfile">
//                             <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                         </div>

//                         <div className="youtubeTitleBox_Title">
//                             <div className="youtube_videoTitle">User1</div>
//                             <div className="youtube_channelName">User1</div>
//                             <div className="youtubeVideo_views">3 Likes</div>
//                         </div>
//                     </div>
//                 </Link>


//             </div>
//         </div>
//         </>
//     )
// }

// export default HomePage;


// -----------------------------------------------------------

import { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function HomePage({ sideNavbar }) {
    const options = ["All", "JavaScript", "React", "MongoDB", "MERN Stack", "Web Development", "HTML", "CSS", "Nodejs", "Expressjs", "FrontEnd", "BackEnd", "Fullstack Development", "Poetry"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className={sideNavbar ? "homePage" : "fullHomePage"}>
            <div className="homePage_options">
                {options.map((item, index) => (
                    <div
                        key={index}
                        className={`homePage_option ${selectedCategory === item ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
                {/* Dummy data inline */}
                {[
                    {
                        id: 1,
                        title: "Learn JavaScript in 3 Hours",
                        category: "JavaScript",
                        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
                        duration: "3:10:47",
                        user: "User1",
                        likes: "3 Likes"
                    },
                    {
                        id: 2,
                        title: "React Crash Course",
                        category: "React",
                        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
                        duration: "2:45:12",
                        user: "User2",
                        likes: "5 Likes"
                    },
                    {
                        id: 3,
                        title: "CSS Basics",
                        category: "CSS",
                        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
                        duration: "1:15:30",
                        user: "User3",
                        likes: "2 Likes"
                    },
                    {
                        id: 4,
                        title: "HTML Beginner Guide",
                        category: "HTML",
                        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
                        duration: "1:00:00",
                        user: "User4",
                        likes: "4 Likes"
                    },
                    {
                        id: 5,
                        title: "Poetry Collection",
                        category: "Poetry",
                        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
                        duration: "0:45:00",
                        user: "PoetX",
                        likes: "10 Likes"
                    }
                ]
                    .filter(video => selectedCategory === "All" || video.category === selectedCategory)
                    .map(video => (
                        <Link to={`/watch/${video.id}`} className="youtube_Video" key={video.id}>
                            <div className="youtube_thumbnailBox">
                                <img src={video.thumbnail} alt="Thumbnail" className="youtube_thumbnailPic" />
                                <div className="youtube_timingThumbnail">{video.duration}</div>
                            </div>

                            <div className="youtubeTitleBox">
                                <div className="youtubeTitleBoxProfile">
                                    <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
                                </div>

                                <div className="youtubeTitleBox_Title">
                                    <div className="youtube_videoTitle">{video.title}</div>
                                    <div className="youtube_channelName">{video.user}</div>
                                    <div className="youtubeVideo_views">{video.likes}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default HomePage;

