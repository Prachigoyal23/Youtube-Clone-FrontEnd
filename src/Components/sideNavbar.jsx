import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { MdRecentActors } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import './sideNavbar.css'
import { Link } from "react-router-dom";

function SideNavbar({sideNavbar}){
    return (
        <>
        <div className={sideNavbar? "home-sideNavbar" : "homeSideNavbarHide"}>
            <div className="home_sideNavbarTop">
                <div className={`home_sideNavbarTopOption`}>
                    <MdHome/>
                    <Link to={'/'} className="home_sideNavbarTopOptionTitle">Home</Link>
                </div>

                 <div className={`home_sideNavbarTopOption`}>
                    <SiYoutubeshorts />
                    <div className="home_sideNavbarTopOptionTitle">Shorts</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <MdOutlineSubscriptions />
                    <div className="home_sideNavbarTopOptionTitle">Subscription</div>
                </div>

            </div>

            <div className="home_sideNavbarMiddle">
                <div className={`home_sideNavbarTopOption`}>
                    <div className="home_sideNavbarTopOptionTitle">You</div>
                    <FaChevronRight />                  
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <MdRecentActors />
                    <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <MdHistory />
                    <div className="home_sideNavbarTopOptionTitle">History</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <MdPlaylistPlay />
                    <div className="home_sideNavbarTopOptionTitle">Playlists</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <PiVideoFill />
                    <div className="home_sideNavbarTopOptionTitle">Your videos</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <MdOutlineWatchLater />
                    <div className="home_sideNavbarTopOptionTitle">Watch later</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <FaRegThumbsUp />
                    <div className="home_sideNavbarTopOptionTitle">Liked Videos</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <FaScissors />
                    <div className="home_sideNavbarTopOptionTitle">Your clips</div>
                </div>                

            </div>

            <div className="home_sideNavbarMiddle">
                <div className="home_sideNavbarTopOption">
                    <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
                </div>

                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg' />
                    <div className="home_sideNavbarTopOptionTitle">Aaj Tak</div>
                </div>


                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://th.bing.com/th/id/R.bce6ed4af85677ce3b6908ac7e8e631b?rik=DFwXRhY0pZxYIg&pid=ImgRaw&r=0' />
                    <div className="home_sideNavbarTopOptionTitle">The LallanTop</div>
                </div>

                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://th.bing.com/th/id/OIP.Ptvb889e_arCEj1IgCROgAHaHa?rs=1&pid=ImgDetMain' />
                    <div className="home_sideNavbarTopOptionTitle">NDTV India</div>
                </div>

            </div>
        </div>
        </>
    )
}

export default SideNavbar;