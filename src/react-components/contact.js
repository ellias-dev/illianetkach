import React from "react";

export const Contact = () => {
    return (
        <div className="sec sec-margin content container-fluid">
            <h2>Contact Me</h2>
            <div className="row">
                <div className="col-6 sec contact">
                    <h3>Write</h3>
                    <a href='mailto:info@illianetkach.com' targer='_blank'><i class="fa-solid fa-envelope"></i> Email me</a>
                </div>
                <div className="col-6 sec contact">
                    <div className="margin-bottom">
                        <h3>Listen</h3>
                        <div>
                            <a href='#' target='_blank'><i class="fa-brands fa-bandcamp"></i> Bandcamp</a>
                            <a href='#' target='_blank'><i class="fa-brands fa-spotify"></i> Spotify</a>
                            <a href='#' target='_blank'><i class="fa-brands fa-apple"></i> Apple</a>
                        </div>
                    </div>
                    <div className="margin-bottom">
                        <h3>Watch</h3>
                        <div>
                            <a href='#' target='_blank'><i class="fa-brands fa-youtube"></i> YouTube</a>
                        </div>
                    </div>
                    <div className="margin-bottom">
                        <h3>Connect</h3>
                        <div>
                            <a href='#' target='_blank'><i class="fa-brands fa-square-instagram"></i> Instagram</a>
                            <a href='#' target='_blank'><i class="fa-brands fa-facebook"></i> Facebook</a>
                            <a href='#' target='_blank'><i class="fa-brands fa-twitter"></i> Twitter</a>
                            <a href='#' target='_blank'><i class="fa-brands fa-mastodon"></i> Mastodon</a>
                            
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
            
        </div>
    )
}