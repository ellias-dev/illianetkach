import React from "react";

export const Footer = () => {
    //let year = year = new Date();document.write(year.getFullYear());
    return (
        <footer className="container-fluid">
            <div className='footer-connect d-flex justify-content-around flex-wrap'>
                <a href='https://illianetkach.bandcamp.com/' target='_blank'><i className="fa-brands fa-bandcamp"></i></a>
                <a href='https://open.spotify.com/artist/1Qs1Bm7Y1KQBmPV1ailUG2' target='_blank'><i className="fa-brands fa-spotify"></i></a>
                <a href='https://music.apple.com/us/artist/ilya-netkach/641932434' target='_blank'><i className="fa-brands fa-itunes"></i></a>
                <a href='https://twitter.com/illianetkach' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                <a href='https://www.facebook.com/IlyaNetkach/' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='https://instagram.com/illianetkah' target='_blank'><i className="fa-brands fa-instagram"></i></a>
            </div>
            
            &copy; 2022 Illia Netkach. All Rights Reserved
            
            
        </footer>
    )
}
    
