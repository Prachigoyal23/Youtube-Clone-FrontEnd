
// import { useState, useEffect } from 'react';
// import './Homepage.css';
// import { Link } from 'react-router-dom';

// function HomePage({ sideNavbar, searchTerm }) {
//     const options = ["All", "JavaScript", "React", "MongoDB", "MERN Stack", "Web Development", "HTML", "CSS", "Nodejs", "Expressjs", "FrontEnd", "BackEnd", "Fullstack Development", "Poetry"];

//     const [selectedCategory, setSelectedCategory] = useState("All");

//     // Dummy data (can be replaced with real API/video list)
//     const videos = [
//         {
//             id: 1,
//             title: "Learn JavaScript in 3 Hours",
//             category: "JavaScript",
//             thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
//             duration: "3:10:47",
//             user: "User1",
//             likes: "3 Likes"
//         },
//         {
//             id: 2,
//             title: "React Crash Course",
//             category: "React",
//             thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
//             duration: "2:45:12",
//             user: "User1",
//             likes: "5 Likes"
//         },
//         {
//             id: 3,
//             title: "Introduction to HTML",
//             category: "HTML",
//             thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
//             duration: "1:30:00",
//             user: "User1",
//             likes: "7 Likes"
//         },
//         {
//             id: 4,
//             title: "CSS for Beginners",
//             category: "CSS",
//             thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
//             duration: "1:50:00",
//             user: "User1",
//             likes: "2 Likes"
//         },
//         // ...add more items if needed
//     ];

//     // Filter videos based on selected category
//     const filteredVideos = selectedCategory === "All"
//         ? videos
//         : videos.filter(video => video.category === selectedCategory);

// //    useEffect(() => {
// //     const filtered = videos.filter(
// //       (video) =>
// //         (selectedCategory === "All" || video.category === selectedCategory) &&
// //         video.title.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setFilteredVideos(filtered);
// //   }, [searchTerm, selectedCategory]);
    

//     return (
//         <div className={sideNavbar ? "homePage" : "fullHomePage"}>
//             <div className="homePage_options">
//                 {
//                     options.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`homePage_option ${selectedCategory === item ? 'selected' : ''}`}
//                             onClick={() => setSelectedCategory(item)}
//                         >
//                             {item}
//                         </div>
//                     ))
//                 }
//             </div>

//             <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
//                 {
//                     filteredVideos.map((video) => (
//                          <Link to={`/watch/${video.id}`} className="youtube_Video" key={video.id}>
//                             <div className="youtube_thumbnailBox">
//                                 <img src={video.thumbnail} alt="Thumbnail" className="youtube_thumbnailPic" />
//                                 <div className="youtube_timingThumbnail">{video.duration}</div>
//                             </div>

//                             <div className="youtubeTitleBox">
//                                 <div className="youtubeTitleBoxProfile">
//                                     <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
//                                 </div>

//                                 <div className="youtubeTitleBox_Title">
//                                     <div className="youtube_videoTitle">{video.title}</div>
//                                     <div className="youtube_channelName">{video.user}</div>
//                                     <div className="youtubeVideo_views">{video.likes}</div>
//                                 </div>
//                             </div>
                            
//                         </Link>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default HomePage;


// =========================================================================================


import { useState, useEffect } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

function HomePage({ sideNavbar }) {
    const options = ["All", "JavaScript", "React", "MongoDB", "MERN Stack", "Web Development", "HTML", "CSS", "Nodejs", "Expressjs", "FrontEnd", "BackEnd", "Fullstack Development", "Poetry"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const videos = [
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
            user: "User1",
            likes: "5 Likes"
        },
        {
            id: 3,
            title: "Introduction to HTML",
            category: "HTML",
            thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
            duration: "1:30:00",
            user: "User1",
            likes: "7 Likes"
        },
        {
            id: 4,
            title: "CSS for Beginners",
            category: "CSS",
            thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
            duration: "1:50:00",
            user: "User1",
            likes: "2 Likes"
        },
    ];

    const filteredVideos = videos.filter(video =>
        (selectedCategory === "All" || video.category === selectedCategory) &&
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={sideNavbar ? "homePage" : "fullHomePage"}>

            {/* --- Search Input Box --- */}
            <div className='homePage_searchContainer'>
            <div className="homePage_searchBox">
                <input
                    type="text"
                    placeholder="Search"
                    className="homePage_searchInput"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            // optional: add logic if needed
                        }
                    }}
                />
                <div className="homePage_searchIcon">
                    <IoSearchSharp style={{ fontSize: "24px", color: "black" }} />
                </div>
            </div>
            </div>

            {/* --- Category Filter Buttons --- */}
            <div className="homePage_options">
                {
                    options.map((item, index) => (
                        <div
                            key={index}
                            className={`homePage_option ${selectedCategory === item ? 'selected' : ''}`}
                            onClick={() => setSelectedCategory(item)}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>

            {/* --- Video Listing --- */}
            <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
                {
                    filteredVideos.map((video) => (
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
                    ))
                }
            </div>
        </div>
    );
}

export default HomePage;



