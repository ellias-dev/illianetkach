import React from "react";
import { videos } from "../video/video-base";

export const RecentVideo = () => {
    return (
        <div className="container-fluid sec content">
            <h3>recent video</h3>
            <div className="container sec">
                <div className="col-12 sec">
                {videos[0].player}
                <h4 align='center'>{videos[0].title}</h4>
                </div>
                

            </div>
        </div>
    )
}