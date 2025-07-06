import { Link } from 'react-router-dom';
import './Login.css'
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';


function Login({setLoginModal}){

    const [loginField, setLoginField] = useState({"userName":"", "password": "" });

    const handleOnChangeInput = (event, name) => {
        setLoginField({
            ...loginField, [name]:event.target.value
        })
    }

    return (
        <>
        <div className="login">
            <div className="login_card">
                <div className="titleCard_login">
                    <FaYoutube style={{ fontSize : '54px', color: 'red' }} className='login_youtubeImage'/>
                </div>
                <div className="loginCredentials">
                    <div className="userNameLogin">
                        <input type="text" value={loginField.userName} onChange={(e)=>{handleOnChangeInput(e, "userName")}} placeholder='UserName' className='userNameLoginUserName' />
                    </div>
                    <div className="userNameLogin">
                        <input type="password" value={loginField.password} onChange={(e)=>{handleOnChangeInput(e, "password")}} placeholder='Password' className='userNameLoginUserName' />
                    </div>
                    
                </div>
                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <Link to={'/signup'} onClick={()=>{setLoginModal()}} className="login-btn">SignUp</Link>
                    <div className="login-btn" onClick={()=>{setLoginModal()}} >Cancel</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;