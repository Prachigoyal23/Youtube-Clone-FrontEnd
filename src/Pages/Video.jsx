import { useEffect, useState } from 'react';
import './Video.css'
import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";
import { Link } from 'react-router-dom';
import SideNavbar from '../Components/sideNavbar';

function Video({sideNavbar}){

    const [message, setMessage] = useState("")
    console.log(message);
    const [likes, setLikes] = useState(32);
    const [dislikes, setDislikes] = useState(5);

    const [comments, setComments] = useState([
        { id: 1, user: "User1", text: "This Video is very Helpful", date: "2025-07-05" },
        { id: 2, user: "User2", text: "Nice tutorial", date: "2025-07-06" }
    ]);
    const [editId, setEditId] = useState(null);
  
    return (
        <>
        <div className="video">
            <SideNavbar sideNavbar={sideNavbar} />
            
            <div className="videoPostSection">
                <div className="video_youtube">
                    <video width="400px" controls autoPlay className='video_youtube_video'>
                        <source src={"https://res.cloudinary.com/mashhuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4"} type='video/mp4' />
                        <source src={"https://res.cloudinary.com/mashhuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4"} type='video/webm' />

                        Your browser does not support the video tag
                    </video>
                </div>

                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{"JavaScript For Beginner"}</div>
                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={'/user/7868'} className="youtube_video_ProfileBlock_left_img">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s"} alt="Profile Image" className="youtube_video_ProfileBlock_left_image" />
                            </Link>

                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName">{"User1"}</div>
                                <div className="youtubePostProfileSubs">{"2025-07-05"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            <div onClick={()=>setLikes(likes + 1)} className="youtube_video_likeBlock_Like">
                                <PiThumbsUp /> 
                                <div className="youtube_video_likeBlock_NoOfLikes">{likes}</div>
                            </div>

                            <div className="youtubeVideoDivider"></div>

                            <div onClick={()=>setDislikes(dislikes + 1)} className="youtube_video_likeBlock_Like">
                                <PiThumbsDown />
                                <div className="youtube_video_likeBlock_NoOfLikes">{dislikes}</div>
                            </div>

                        </div>
                    </div>

                    <div className="youtube_video_About">
                        <div>2025-05-07</div>
                        <div>JavaScript Tutorial in one Shot</div>
                    </div>

                    <div className="youtubeCommentSection">
                        <div className="youtubeCommentSectionTitle">2 Comments</div>
                        <div className="youtubeSelfComment">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXY8gIvEv1r4pNE58b3xTXVP9QIMAoM4YIg&s" alt="Profile Image" className="video_youtubeSelfCommentProfile" />
                            <div className="addAComment">
                                <input type="text" value={message} onChange={(e)=> {setMessage(e.target.value)}} className="addAcommentInput" placeholder='Add a Comment' />
                                <div className="cancelSubmitComment">
                                    <div className="cancelComment">Cancel</div>
                                    <div className="cancelComment">Comment</div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="youtubeOthersComments">
                            {/* <div className="youtubeSelfComment">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXY8gIvEv1r4pNE58b3xTXVP9QIMAoM4YIg&s" alt="Profile Image" className="video_youtubeSelfCommentProfile" />
                                <div className="others_commentSection">
                                    <div className="others_commentSectionHeader">
                                        <div className="channelName_comment">UserName</div>
                                        <div className="commentTimingOthers">2025-07-05</div>
                                    </div>

                                    <div className="otherCommentSectionComment">This Video is very Helpful</div>
                                </div>
                            </div>

                            <div className="youtubeSelfComment">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXY8gIvEv1r4pNE58b3xTXVP9QIMAoM4YIg&s" alt="Profile Image" className="video_youtubeSelfCommentProfile" />
                                <div className="others_commentSection">
                                    <div className="others_commentSectionHeader">
                                        <div className="channelName_comment">UserName</div>
                                        <div className="commentTimingOthers">2025-07-05</div>
                                    </div>

                                    <div className="otherCommentSectionComment">This Video is very Helpful</div>
                                </div> */}
                            {/* </div> */}

                            {comments.map(comment => (
  <div className="youtubeSelfComment" key={comment.id}>
    <img src="..." className="video_youtubeSelfCommentProfile" />
    <div className="others_commentSection">
      <div className="others_commentSectionHeader">
        <div className="channelName_comment">{comment.user}</div>
        <div className="commentTimingOthers">{comment.date}</div>
      </div>

      {editId === comment.id ? (
        <input 
          type="text" 
          value={comment.text} 
          onChange={(e) => {
            const updated = comments.map(c => 
              c.id === comment.id ? { ...c, text: e.target.value } : c
            );
            setComments(updated);
          }}
        />
      ) : (
        <div className="otherCommentSectionComment">{comment.text}</div>
      )}

      <div className="commentActions">
        <button onClick={() => setEditId(editId === comment.id ? null : comment.id)}>Edit</button>
        <button onClick={() => setComments(comments.filter(c => c.id !== comment.id))}>Delete</button>
      </div>
    </div>
  </div>
))}

                            <div className="youtubeSelfComment">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXY8gIvEv1r4pNE58b3xTXVP9QIMAoM4YIg&s" alt="Profile Image" className="video_youtubeSelfCommentProfile" />
                                <div className="others_commentSection">
                                    <div className="others_commentSectionHeader">
                                        <div className="channelName_comment">UserName</div>
                                        <div className="commentTimingOthers">2025-07-05</div>
                                    </div>

                                    <div className="otherCommentSectionComment">This Video is very Helpful</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="videoSuggestions">
                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/ER9SspLe4Hg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGR77y9DQenTuxw1BBbIzcq81h-w" alt="Image" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">JavaScript Full Course in one shot by code with Harry</div>
                        <div className="video_suggetions_About_Profile">Code with Harry</div>
                        <div className="video_suggetions_About_Profile">136K views, 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/ER9SspLe4Hg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGR77y9DQenTuxw1BBbIzcq81h-w" alt="Image" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">JavaScript Full Course in one shot by code with Harry</div>
                        <div className="video_suggetions_About_Profile">Code with Harry</div>
                        <div className="video_suggetions_About_Profile">136K views, 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/ER9SspLe4Hg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGR77y9DQenTuxw1BBbIzcq81h-w" alt="Image" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">JavaScript Full Course in one shot by code with Harry</div>
                        <div className="video_suggetions_About_Profile">Code with Harry</div>
                        <div className="video_suggetions_About_Profile">136K views, 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://i.ytimg.com/vi/ER9SspLe4Hg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGR77y9DQenTuxw1BBbIzcq81h-w" alt="Image" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">JavaScript Full Course in one shot by code with Harry</div>
                        <div className="video_suggetions_About_Profile">Code with Harry</div>
                        <div className="video_suggetions_About_Profile">136K views, 1 day ago</div>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Video;