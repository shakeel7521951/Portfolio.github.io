import React from "react";
import './Footer.css';
import whatsappicon from './images/whatsappicon.jpeg';
import facebookIcon from './images/facebookIcon.jpeg';
import twitterIcon from './images/twitterIcon.webp';
import emailIcon from './images/emailIcon.jpeg';
import InstagramIcon from './images/instagramIcon.webp';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footer">
                <h3>
                    "Elevating digital experiences through code and creativity.
                    Crafting web solutions that blend functionality, aesthetics, and seamless user interactions."
                </h3>
                <p>Contact Options!</p>
                <div className="icons">
                    <a href="mailto:shakeel7521951@gmail.com" data-on-hover='Email' target="_blank" rel="noopener noreferrer">
                        <img src={emailIcon} alt="Email Icon" />
                    </a>
                    <a href="https://wa.me/03207521951" data-on-hover="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappicon} alt="WhatsApp Icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100083701840637&mibextid=ZbWKwL" data-on-hover="Facebook" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook Icon" />
                    </a>
                    <a href="https://www.instagram.com/shakeel7521951?igsh=cHdpc2t5YWltZG5z" data-on-hover="Instagram" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Twitter Icon" />
                    </a>
                </div>
                <p className="copyright">
                    © 2024 Muhammad Shakeel. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;
