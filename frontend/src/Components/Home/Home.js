import React, { useState } from "react";
import profileImage from './images/profileImage.png';
import './Home.css';
import Navbar from "../Navbar/Navbar";
import htmlIcon from './images/htmlIcon.png';
import cssIcon from './images/cssIcon.png';
import javaScriptIcon from './images/javascriptIcon.jpg';
import reactIcon from './images/reactIcon.png';
import nodejsIcon from './images/nodejsIcon.png';
import mongodbIcon from './images/mongodbIcon.png';
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const render_skill_page =()=>{
        navigate('/skills')
    }
    const sendMessage=(event)=>{
        event.preventDefault();
        if (!name || !email || !comment) {
            setError(true)
            return false;
        }
        setName('');
        setEmail('');
        setComment('');
        alert("Your comment is posted");
    
    }

    return (
        < div className="Main">
            <Navbar />
            <div className="home-container">
                <div className="left-of-home">
                    <h1>Muhammad <span>Shakeel</span></h1>
                    <p>
                        Hello! I'm a Full Stack Web Developer who loves making websites user-friendly and exciting.
                        I'm dedicated to turning your ideas into interactive and efficient digital experiences.
                        Let's work together to create something amazing and memorable that stands out in the world of web technology!
                    </p>
                    <Link to='/About' className="info-btn" >Check Info ➡</Link>
                </div>
                <div className="right-of-home">
                    <img src={profileImage} alt="Profile-Image" />
                </div>
            </div>

            {/*........ Skills.............. */}
            <div className="skills-container">
                <div className="skills">
                    <h1>Skills</h1>
                    <p>"With a focus on creating seamless user experiences, I specialize in crafting
                        responsive and visually engaging websites. My expertise extends to dynamic interfaces
                        and backend development for comprehensive digital solutions."</p>
                    <div className="cards" >
                        <div className="card" style={{ backgroundColor: "coral", color: "white" }}>
                            <img src={htmlIcon} alt="HTML Icon" />
                            <h2>HTML</h2>
                            <h3>"As a web developer, I harness the power of HTML to create the fundamental structure of websites.
                                HTML is the backbone, shaping content and ensuring seamless user experiences."</h3>
                        </div>
                        <div className="card" style={{ backgroundColor: 'skyblue' }}>
                            <img src={cssIcon} alt="HTML Icon" />
                            <h2>CSS</h2>
                            <h3>"As a web developer, I harness the power of HTML to create the fundamental structure of websites.
                                HTML is the backbone, shaping content and ensuring seamless user experiences."</h3>
                        </div>
                        <div className="card" style={{ backgroundColor: 'aqua' }}>
                            <img src={javaScriptIcon} alt="HTML Icon" />
                            <h2>JavaScript</h2>
                            <h3>
                                "In my web development journey, JavaScript is my dynamic tool.
                                I utilize its power to create interactive and engaging experiences,
                                seamlessly blending functionality and innovation for optimal user satisfaction."</h3>
                        </div>
                        <div className="card" style={{ backgroundColor: "#6c73d6", color: "white" }}>
                            <img src={reactIcon} alt="HTML Icon" />
                            <h2>React.Js</h2>
                            <h3>
                                "As a web developer, React.js is my go-to framework for building dynamic and
                                efficient user interfaces. I harness its component-based
                                architecture to create seamless, responsive, and scalable web applications."</h3>
                        </div>
                        <div className="card">
                            <img src={nodejsIcon} alt="HTML Icon" />
                            <h2>Node.js</h2>
                            <h3>
                                "Node.js powers my backend. Its event-driven architecture enables scalable applications,
                                ensuring seamless integration and high performance in web development."
                            </h3>
                        </div>
                        <div className="card" style={{ backgroundColor: "green", color: "white" }}>
                            <img src={mongodbIcon} alt="HTML Icon" />
                            <h2>MongoDB</h2>
                            <h3>
                                "In my web development toolkit, MongoDB serves as
                                the dynamic database. Its NoSQL nature allows for flexible,
                                scalable data storage, ensuring efficient and responsive applications."</h3>
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={render_skill_page}>Explore More ➡</button>
            </div>

            {/*........... Projects............ */}
            <div className="projects-container">
                <div className="projects">
                    <h1>Projects</h1>
                    <p>
                        "As a dedicated Full Stack Web Developer, I showcase my passion for innovation through a diverse array of projects.
                        Although not all projects are deployed, each represents a significant learning journey, highlighting my skills in HTML, CSS, JavaScript, React, Node.js, and more.
                        I invite you to explore my repositories for a deeper understanding of my coding proficiency and project versatility."
                    </p>
                    <div className="projects-detail">
                        <h3>Some Projects which I want to share with you:</h3>
                        <ul>
                            <li>❤ Portfolio website using React.js, Node.js, Express, and MongoDB</li>
                            <li>❤ Weather App utilizing Node.js and REST API</li>
                            <li>❤ University Website using HTML, CSS, and JavaScript</li>
                            <li>❤ Banking App utilizing Node.js, Express, and MongoDB</li>
                            <li>❤ E-Dashboard application using React for the front end and Node.js with Express.js for the back end, incorporating MongoDB for data storage</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*............. Message.......... */}

            <div className="message-container">
                <div className="message">
                    <h1>Comment</h1>
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' />
                        {error && !name && <span className='error-message'>Enter valid name</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email' />
                        {error && !email && <span className='error-message'>Enter valid email</span>}
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea type="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} placeholder='Leave your comment here' />
                        {error && !comment && <span className='error-message'>Please fulfill this </span>}
                    </div>
                    <button type="button" onClick={sendMessage} className="btn">Post</button>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Home;