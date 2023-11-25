import React, { useEffect, useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './styling/MainPage.css';
import Resume from '../assets/Nakul-Dharan-Resume-2023_2024Winter.pdf';
import ubcLogo from '../assets/ubc_image.png';
import cmdPrompt from '../assets/terminal.png'
import eduTitle from '../assets/edu_title.png';
import { motion } from "framer-motion"

const ColoredLine = ({ color }) => (
    <hr
        style={{
            width: 4,
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

const MainPage = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 5000); // Set this to the desired delay in milliseconds

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='fade-in-left-container'>
            <div className='header-rectangle'>
                <ul class="background" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                
                <div className="header-name">Nakul Dharan</div>
                <div className='header-info'>Computer Engineering Student at the University of British Columbia</div>
                <div className='socials-bar'>

                    <div className='social-link'>
                        <a href='https://www.linkedin.com/in/nakuldharan/'>
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#ffffff",}} />
                            <span>LinkedIn</span> 
                        </a>
                    </div>

                    <div className='social-link'>
                        <a href='https://github.com/NakulGD'>
                            <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#ffffff",}} />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className='social-link'>
                        <a href= {Resume}>
                            <FontAwesomeIcon icon={faFile} size="xl" style={{color: "#ffffff",}} target = "_blank" />
                            <span>Resume</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className='education-title'>
                        <h1> {'>Education'} </h1>
            </div>

            <div className="education-section">

                <div className='education-left'>

                    <div className='school-name'>
                        <span>The University of British Columbia - Vancouver</span>
                    </div>

                    <img src= {ubcLogo} alt='UBC Logo'></img>

                    <div className='edu-info-container'>

                        <div className="rounded-rectangle">
                            <span>2020-2025</span>
                        </div>

                        <div className='rounded-rectangle-degree'>
                            <span>BASc - Computer Engineering</span>
                        </div>

                    </div>
                </div>



                <div className='education-right'>
                    <span>Relevant Courses</span>
                    <div className="course-list">
                        <ul>
                            <li>Algorithms and Data Structures</li>
                            <li>Algorithm Design and Analysis</li>
                            <li>Operating Systems</li>
                            <li>Software Systems</li>
                            <li>Computing Hardware I/II</li>
                            <li>Human Computer Interfaces in Engineering Design</li>
                            <li>Circuit Analysis</li>
                            <li>Mathematical Proofs</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div style={{ borderTop: "2px solid black ", marginLeft: 20, marginRight: 20 }}></div>
            <div className='projects-section'>
                <div className='projects-title'>
                    <h1>{'>Technical Projects'}</h1>
                </div>
            
            </div>
        </div>
    );
};

export default MainPage;
