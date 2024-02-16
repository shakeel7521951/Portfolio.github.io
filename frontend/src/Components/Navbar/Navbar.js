// Navbar.js

import React, { useState } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import menuIcon from './images/menu.png';
import closeIcon from './images/close.png';

const Navbar = () => {
    const auth = localStorage.getItem('User');
    const navigate = useNavigate();
    const [navbarIcon, setNavbarIcon] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const logoutFunctionality = () => {
        localStorage.clear();
        navigate("/signup");
    }

    const navbarHandler = () => {
        setSidebarVisible(!sidebarVisible);
        setNavbarIcon(!navbarIcon);
    }

    return (
        <div className="navbar-container">
            <i>Muhammad <span> Shakeel</span></i>
            <img
                src={navbarIcon ? closeIcon : menuIcon}
                onClick={navbarHandler}
                alt={navbarIcon ? "Close Icon" : "Menu Icon"}
                className="navIcon"
            />

            <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                {auth ?
                    <li><Link to='/signup' onClick={logoutFunctionality}>Logout ({JSON.parse(auth).name.split(' ')[0]})</Link></li>
                    :
                    <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Navbar;
