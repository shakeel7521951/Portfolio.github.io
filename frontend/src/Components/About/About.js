import React from "react";
import Navbar from "../Navbar/Navbar";
import './About.css';
import infoImage from './images/infoImage.png';
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            <div className="about">
                <h1>Personal Info</h1>
                <div className="name-part">
                    <div className="left-of-about">
                        <h2>Muhammad Shakeel</h2>
                        <ul>
                            <li><span>Cell No :</span> +92-320-7521951</li>
                            <li><span>Address :</span>  Chah Muraad wala Dak Khana Khas Kot Muzaffar
                                Tehsil Mailsi, District Vehari.</li>
                        </ul>
                    </div>
                    <div className="right-of-about">
                        <img src={infoImage} alt="Personal Info Image" />
                    </div>
                </div>
                <div className="objective">
                    <hr />
                    <hr />
                    <h1>CAREER OBJECTIVE:</h1>
                    <p>
                        To become a part of dynamic organization where I can arm with strong coding skills, creativity,
                        and a proactive mindset. Eager to apply knowledge in a professional setting, contribute to projects,
                        and gain hands-on experience, while continuously learning and adapting to emerging
                        technologies.
                    </p>
                </div>
                <div className="personal-info">
                <h1>Personal Profile</h1>
                    <div className="info">
                        <div className="left">
                            <ul >
                                <li>Name : </li>
                                <li>Father Name :</li>
                                <li> Marital Status : </li>
                                <li>Gender :</li>
                                <li>C.N.I.C :</li>
                                <li>Email :</li>
                                <li>Religion :</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul >
                                <li> Muhammad Shakeel</li>
                                <li> Javed Akhtar</li>
                                <li> Single</li>
                                <li> Male</li>
                                <li> 36602-2464070-5</li>
                                <li> shakeel7521951@gmail.com</li>
                                <li> Muslim</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h1>Education:</h1>
                    <ul className="main-column">
                        <li>Degree</li>
                        <li>Year</li>
                        <li>Obtained Marks/CGPA</li>
                        <li>Total Marks</li>
                        <li className="uni">Board/University</li>
                    </ul>
                    <ul>
                        <li>BSCS</li>
                        <li>2022 - 2026</li>
                        <li>3.83</li>
                        <li>4.00</li>
                        <li className="uni">The Islamia University of Bahawalpur</li>
                    </ul>
                    <ul>
                        <li>F.Sc</li>
                        <li>2022</li>
                        <li>953</li>
                        <li>1100</li>
                        <li className="uni">B.I.S.E Multan</li>
                    </ul>
                    <ul>
                        <li>Matric</li>
                        <li>2020</li>
                        <li>999</li>
                        <li>1100</li>
                        <li className="uni">B.I.S.E Multan</li>
                    </ul>
                </div>
                <div className="experience">
                    <h1>Experience:</h1>
                    <ul>
                        <li>❤   1 year of experience in web development, with expertise in [HTML, CSS, JavaScript, ReactJs, NodeJS, Express, MongoDB].</li>
                        <li>❤  6 months of hands-on experience in C++ programming language. </li>
                        <li>❤   8 months of hands-on experience in Java programming language. Proficient in OOP concepts, Data Structures, and Algorithms.</li>
                        <li>❤  6 months of hands-on experience with Microsoft Office, including Word, Excel, and PowerPoint. </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;