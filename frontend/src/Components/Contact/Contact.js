import React, { useState } from "react";
import './Contact.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);  

    const messageHandler = (event) => {
        event.preventDefault();
      errorHandler();
    }

    const errorHandler =()=>{
        if (!name || !email || !subject || !message) {
            setError(true);
            return false;
        }
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setError(false);
        alert(`Dear ${name}! Your message is sent. ${email} ${subject} ${message}`);
    }
    

    return (
        <div className="contact-container">
            <Navbar />
            <div className="contact">
                <h1>Start Conversation With Me</h1>
                <p>"Ready to start a conversation? Fill out the form below, and let's make your ideas come to life on the web!"</p>
                <div className="contact-form">
                    <h2>Send Message</h2>
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" />
                        {error && !name && <span className="errorMessage">Enter Valid Name</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" />
                        {error && !email && <span className="errorMessage">Enter Valid Email</span>}
                    </div>
                    <div>
                        <label>Subject</label>
                        <input type="text" value={subject} onChange={(e) => { setSubject(e.target.value) }} placeholder="Enter subject" />
                        {error && !subject && <span className="errorMessage">Please Enter Subject</span>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Enter message you want to send me" />
                        {error && !message && <span className="errorMessage">Please Enter Message</span>}
                    </div>
                    <button type="button" onClick={messageHandler}>Send</button>
                </div>

                <div className="contact-information">
                    <h1>Contact Information</h1>
                    <p>"Feel free to reach out to me through any of the following channels.
                        Whether you prefer a quick message, an email, or a social media chat, I'm here to connect
                        with you and explore exciting possibilities together.
                        Your ideas and inquiries are always welcome!"</p>
                    <h2>Contact Options:</h2>
                    <ul>
                        <li>📞 Phone: <span>+92-320-7521951</span></li>
                        <li>📧 Email: <span>shakeel7521951@gmail.com</span></li>
                        <li>💬 Facebook Messenger: <Link ><span>https://www.facebook.com/profile.php?id=100083701840637&mibextid=ZbWKwL</span></Link></li>
                        <li>📷 Instagram DM: <Link><span>https://www.instagram.com/shakeel7521951?igsh=cHdpc2t5YWltZG5z</span></Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;