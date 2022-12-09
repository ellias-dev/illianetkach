import React from "react";

export const Footer = () => {
    //let year = year = new Date();document.write(year.getFullYear());
    return (
        <footer className="container-fluid">
            <div className='footer-connect d-flex justify-content-around flex-wrap'>
                <a href='https://illianetkach.bandcamp.com/' target='_blank' alt='Bandcamp'><i className="fa-brands fa-bandcamp" title='Bandcamp'></i></a>
                <a href='https://open.spotify.com/artist/1Qs1Bm7Y1KQBmPV1ailUG2' target='_blank' alt='Spotify'><i className="fa-brands fa-spotify" title='Spotify'></i></a>
                <a href='https://music.apple.com/us/artist/ilya-netkach/641932434' target='_blank' alt='Apple Music'><i className="fa-brands fa-itunes" title='iTunes/Apple Music'></i></a>
                <a href='https://mastodon.social/@illianetkach' target='_blank' alt='Mastodon'><i class="fa-brands fa-mastodon"></i></a>
                <a href='https://www.facebook.com/IlyaNetkach/' target='_blank' alt='Facebook'><i className="fa-brands fa-facebook-f" title='Facebook'></i></a>
                <a href='https://instagram.com/illianetkah' target='_blank' alt='Instagram'><i className="fa-brands fa-instagram" title='Instagram'></i></a>
            </div>
            
            &copy; 2022 Illia Netkach. All Rights Reserved
            
            
        </footer>
    )
}
    
