import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hamburger } from './elements/mobmenu/hamburger';


export const Header = () => {
    return (
      <header className='container-fluid'>
        <div className='row d-flex flex-nowrap'>
          <div className='col-11 col-lg-5 d-flex flex-nowrap justify-items-start'>
              <img src='/logo.svg' alt='Illia Netkach Logo'></img>
              <h1>Illia Netkach</h1>
          </div>
          
          <nav id='nav-dt' className='d-none col-lg-7  d-lg-flex justify-content-around align-items-center'>

            <NavLink to='/' end>Home</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/events'>Events</NavLink>
            <NavLink to='/music'>Music</NavLink>
            <NavLink to='/video'>Video</NavLink>
            <NavLink to='/bio'>Bio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <a href='https://www.subscribepage.com/illianetkach' target='_blank'>Subscribe</a>
          </nav>
          <div className='col-1 d-flex justify-content-end align-items-center d-lg-none'>
            <Hamburger />
            
          </div>
          
          
         
          
        </div>
        
        
      </header>
      
            
        
    )
}