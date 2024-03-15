import React, { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className='logo1'>
          <img  className='imglogo' src="https://i.pinimg.com/736x/e3/c1/fa/e3c1faf4a6377c38bcc4b7aff4aaba2e.jpg"/>
          </div>
          <div className="logo-name"> 
            <h2 className="lname">Agri Funds</h2>
          </div>
        
          <div className="toggle">
          </div>
          <nav className='links'>
            <ul>
              
              <div className="top-bar">
                <ul>
                  <li className="li-elements">
                    <Link to="/faq">FAQ'S</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/register">Register</Link>
                  </li>
                  
                  <li className="li-elements">
                    <Link to="/login">Login</Link>
                  </li>
                  
                  
                </ul>
              </div>
            </ul>
          </nav>
        </div>
        <div className='socialIcons'></div>
      </header>
    </div>
  );
};

export default Navbar;