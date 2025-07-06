import { useState } from 'react';
import './SignUp.css'
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SignUp(){

    const [signupFeild, setSignupFeild] = useState({"channelName":"", "userName":"", "password":"", "email":"", "profilePic":""  })

    const[uploadImageURL, setUploadImageURL] = useState("https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png")

    const handleInputField = (event, name) => {
        setSignupFeild({
            ...signupFeild, [name]:event.target.value
        })        
    }

    async function uploadImage(e) {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])  ;
             
    }

    return (
        <>
        <div className="signUp">
            <div className="signup_card">
                <div className="signUp_title">
                    <FaYoutube style={{ fontSize : '54px', color: 'red' }} className='login_youtubeImage'/>
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    <input type="text" value={signupFeild.channelName} onChange = {(e)=> {handleInputField(e, "channelName")}} placeholder='Channel Name' className="signUp_Inputs_inp" />
                    <input type="text" value={signupFeild.userName} onChange = {(e)=> {handleInputField(e, "userName")}} placeholder='User Name' className="signUp_Inputs_inp" />
                    <input type="email" value={signupFeild.email} onChange = {(e)=> {handleInputField(e, "email")}} placeholder='Email' className="signUp_Inputs_inp" />
                    <input type="password" value={signupFeild.password} onChange = {(e)=> {handleInputField(e, "password")}} placeholder='Password' className="signUp_Inputs_inp" />
                    

                    <div className="image_upload_signup">
                        <input type="text" value={signupFeild.profilePic} onChange={(e)=>handleInputField(e, "profilePic")} placeholder="Paste Profile Image URL"/>
                        <div className="image_upload_signup_div">
                            <img src={uploadImageURL} alt="" className="image_default_signUp" />
                        </div>
                    </div>

                    <div className="signUpBtns">
                        <div className="signUpBtn">SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home</Link>
                    </div>
                    
                </div>
                
            </div>           
        </div>
        </>
    )
}

export default SignUp;