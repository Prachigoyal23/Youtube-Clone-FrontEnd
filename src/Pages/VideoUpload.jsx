import { Link } from 'react-router-dom';
import './VideoUpload.css'
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';

function VideoUpload(){

    const [inputField, setInputField] = useState({"title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })

    const handleInputField = (event, name) => {
        setInputField({
            ...inputField, [name]:event.target.value
        })        
    }

    console.log(inputField)

    return (
        <>
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <FaYoutube style={{ fontSize : '54px', color: 'red' }}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" value={inputField.title} onChange={(e)=> {handleInputField(e, "title")}} placeholder='Title of Video' className='uploadFormInputs' />
                    <input type="text" value={inputField.description} onChange={(e)=> {handleInputField(e, "description")}} placeholder='Description' className='uploadFormInputs' />
                    <input type="text" value={inputField.videoType} onChange={(e)=> {handleInputField(e, "videoType")}} placeholder='Category' className='uploadFormInputs' />
                    <div>Thumbnail <input type="file" accept='image' /></div>
                    <div>Video <input type="file" accept='video/mp4, video/webm, video/*' /></div>
                </div>

                <div className="uploadBtns">
                    <div className="uploadBtn-form">Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoUpload