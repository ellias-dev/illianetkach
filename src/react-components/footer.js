import React from "react";

export const Footer = () => {
    //let year = year = new Date();document.write(year.getFullYear());
    return (
        <footer className="container-fluid">
            <div className='footer-connect d-flex justify-content-around flex-wrap'>
                <a href='#'><i className="fa-brands fa-bandcamp"></i></a>
                <a href='#'><i className="fa-brands fa-spotify"></i></a>
                <a href='#'><i className="fa-brands fa-itunes"></i></a>
                <a href='#'><i className="fa-brands fa-twitter"></i></a>
                <a href='#'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#'><i className="fa-brands fa-instagram"></i></a>
            </div>
            
            &copy; 2022 Illia Netkach. All Rights Reserved
            
            
        </footer>
    )
}
    
