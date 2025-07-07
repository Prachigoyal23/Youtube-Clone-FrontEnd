import { MdOutlineMenu } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import './Navbar.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

function Navbar({setSideNavbarFunc, sideNavbar}) {
    const [userPic, setUserPic] = useState("https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg");
    const [navbarModal, setNavbarModal] = useState(false)
    const [login, setLogin] = useState(false)

    const hasChannel = localStorage.getItem("channel");

    const navigate = useNavigate()

    function handleprofile(){
        navigate('/user/456');
        setNavbarModal(false)
    }

    function channelProfile(){
        setNavbarModal(false)
    }

    function handleClick(){
      setNavbarModal(prev=>!prev)  
    }
    const sideNavbarFunc = () => {
        setSideNavbarFunc(!sideNavbar)
    }

    const onclickOfPopUpOption = (button) => {
        setNavbarModal(false)
        if(button == "login"){
            setLogin(true)
        }
        else{

        }
    }

    const setLoginModal = () => {
        setLogin(false)
    }

    const [search, setSearch] = useState("");

    return (
        <>
        <div className="navbar">
            {/* Left Navbar */}
            <div className="navbar-left">
                <div className="navbarHamberger" onClick={sideNavbarFunc} >
                    <MdOutlineMenu style={{ color: "white", fontSize: "24px" }}/>
                </div>  
                <Link to={'/'} className="navbar_youtubeImg">
                    <IoLogoYoutube style={{fontSize: "34px"}} className="navbar_youtubeImage"/>
                    <div className="navbar_utubeTitle">Youtube</div>
                </Link>              
            </div>

            {/* Middle Navbar */}
            <div className="navbar-middle">
                <div className="navbar_searchBox">
                    <input type="text" placeholder="Search" className="navbar_searchBoxInput" />
        
                    <div className="navbar_searchIconBox">
                        <IoSearchSharp style={{fontSize: "28px", color: "white"}}/>
                    </div>
                </div>
                <div className="navbar_mike">
                    <MdKeyboardVoice />
                </div>
            </div>

            {/* Right Navbar */}

            <div className="navbar-right">
                <Link to={'/455/upload'}>
                  <MdVideoCall style={{ fontSize: "30px", cursor: "pointer", color: "white"}}/>
                </Link>
                
                <FaBell style={{ fontSize: "30px", cursor: "pointer", color: "white"}}/> 
                <img onClick={handleClick} src={userPic} alt="Logo" className="navbar-right-logo" /> 

                { navbarModal && 
                    <div className="navbar-modal">
                        <div className="navbar-modal-option" onClick={handleprofile} >Profile</div>
                        <div className="navbar-modal-option" onClick={channelProfile} >
                            {hasChannel ? (
                                <Link to="/channel" className="channelButton">View Channel</Link>
                            ) : (
                                <Link to="/create-channel" className="channelButton">Create Your Channel</Link>
                            )}
                        </div>
                        <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("logout")} >Logout</div>
                        <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("login")} >Login</div>
                        
                    </div>
                }
            </div>

            {
                login && <Login setLoginModal={setLoginModal} />
            }
        </div>
        </>
    )
}

export default Navbar;


{/* <IoPersonSharp /> */}
