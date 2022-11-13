import React, { useState } from "react";
import { videos } from "./video-base";

export const Video = () => {
    const [video, setVideo] = useState(videos[0].player);
    const [title, setTitle] = useState(videos[0].title);
    
    const videoList = videos.map(videosample => {
        const clickHandler = () => {
            function changeVideo(){
                setVideo(videosample.player);
            };
            function changeTitle(){
                setTitle(videosample.title)
            }
            changeVideo();
            changeTitle();
        }
        return (
            
                    <a href='#mainvideo'>
                        <div className="video-mini" onClick={clickHandler}>
                            <img src={videosample.pic}></img>
                            
                                <h6>{videosample.title}</h6>
                            
                        </div>
                    </a>
                        



                       
                   
        )})

    return (
        <div className="container-fluid sec sec-margin content">
            <h2 id='mainvideo'>Video</h2>
            
                <div className="jumbotron">
                    {video}
                    <h4 align='center'>{title}</h4>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    {videoList}
                </div>
                
            
           
        </div>
    )
}
