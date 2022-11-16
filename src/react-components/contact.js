import React from "react";

export const Contact = () => {
    return (
        <div className="sec sec-margin content container-fluid">
            <h2>Contact Me</h2>
            <div className="row">
                <div className="col-6 sec contact">
                    <h3>Write</h3>
                    <a href='mailto:info@illianetkach.com' target='_blank'><i class="fa-solid fa-envelope"></i> Email me</a>
                </div>
                <div className="col-6 sec contact">
                    <div className="margin-bottom">
                        <h3>Listen</h3>
                        <div>
                            <a href='https://illianetkach.bandcamp.com/' target='_blank'><i class="fa-brands fa-bandcamp"></i> Bandcamp</a>
                            <a href='https://open.spotify.com/artist/1Qs1Bm7Y1KQBmPV1ailUG2' target='_blank'><i class="fa-brands fa-spotify"></i> Spotify</a>
                            <a href='https://music.apple.com/us/artist/ilya-netkach/641932434' target='_blank'><i class="fa-brands fa-apple"></i> Apple</a>
                        </div>
                    </div>
                    <div className="margin-bottom">
                        <h3>Watch</h3>
                        <div>
                            <a href='https://www.youtube.com/channel/UCa84anROguFj5lJrAyMvang' target='_blank'><i class="fa-brands fa-youtube"></i> YouTube</a>
                        </div>
                    </div>
                    <div className="margin-bottom">
                        <h3>Connect</h3>
                        <div>
                            <a href='https://instagram.com/illianetkach' target='_blank'><i class="fa-brands fa-square-instagram"></i> Instagram</a>
                            <a href='https://www.facebook.com/IlyaNetkach/' target='_blank'><i class="fa-brands fa-facebook"></i> Facebook</a>
                            <a href='https://twitter.com/illianetkach' target='_blank'><i class="fa-brands fa-twitter"></i> Twitter</a>
                            <a href='https://mastodon.social/@illianetkach' target='_blank'><i class="fa-brands fa-mastodon"></i> Mastodon</a>
                            
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
            
        </div>
    )
}