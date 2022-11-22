import React, { useState } from 'react'; 
import { DrawHamburger } from './hamburger-pres';
import { Link } from 'react-router-dom';

export const Hamburger = () => {
    const [classs, setClasss] = useState('hamburger');
    const [display, setDisplay] = useState('mobmenu mm-close');

    function handleClick(){
        if(classs === 'hamburger'){
            setClasss('hamburger open');
            setDisplay('mobmenu mm-open');
        } else {
            setClasss('hamburger')
            setDisplay('mobmenu mm-close')
        }
    }

    function handleLinkClick(){
        setClasss('hamburger')
        setDisplay('mobmenu mm-close')
    }
    
    
    return (
        <div>
            <div id='hbtn' className={classs} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div className={display}>
                <Link to='/' onClick={handleLinkClick}>Home</Link>
                <Link to='/news' onClick={handleLinkClick}>News</Link>
                <Link to='/events' onClick={handleLinkClick}>Events</Link>
                <Link to='/music' onClick={handleLinkClick}>Audio</Link>
                <Link to='/video' onClick={handleLinkClick}>Video</Link>
                <Link to='/bio' onClick={handleLinkClick}>Bio</Link>
                <Link to='/contact' onClick={handleLinkClick}>Contact</Link>
                <a href='https://www.subscribepage.com/illianetkach' target='_blank' onClick={handleLinkClick}>Subscribe</a>
            </div>
            
        </div>
       
       
    )

}










