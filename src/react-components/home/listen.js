import React from "react";
import { ilyanetkachAudio } from "../audio/audiodata";

export const Listen = () => {
    return (
        <div className="container-fluid sec content">
            <h3>out now</h3>
            <div className="row sec">
                <div className="col-12 col-lg-6 sec">
                <iframe styleName="border-radius:12px" src="https://open.spotify.com/embed/track/6bprY9I9kRwtCYwdWftj3c?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                </div>
                <div className="col-12 col-lg-6 sec">
                    <h4>{ilyanetkachAudio[0].title}</h4>
                    <p>{ilyanetkachAudio[0].description}</p>
                    <div className="musicLinks d-flex flex-wrap">
                            <a href={ilyanetkachAudio[0].links.bandcamp} target='_blank'><i class="fa-brands fa-bandcamp"></i> Bandcamp</a>
                            <a href={ilyanetkachAudio[0].links.spotify} target='_blank'><i class="fa-brands fa-spotify"></i> Spotify</a>
                            <a href={ilyanetkachAudio[0].links.amazon} target='_blank'><i class="fa-brands fa-amazon"></i> Amazon</a>
                            <a href={ilyanetkachAudio[0].links.apple} target='_blank'><i class="fa-brands fa-itunes"></i> Apple</a>
                        </div>
                </div>
            </div>
            
        </div>
    )
}