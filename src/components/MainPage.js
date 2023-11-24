import React, { useEffect, useState, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './styling/MainPage.css';
import Resume from '../assets/Nakul-Dharan-Resume-2023_2024Winter.pdf';
import ubcLogo from '../assets/ubc_image.png';
import cmdPrompt from '../assets/terminal.png'
import eduTitle from '../assets/edu_title.png';

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 5000); // Set this to the desired delay in milliseconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='fade-in-left-container'>
            <div className='header-rectangle'>
                <ul class="background">
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

            <div className="education-section">
                <div className='education-title'>
                    <h1> {'>Education'} </h1>
                </div>
                <img src= {ubcLogo} alt='UBC Logo'></img>
                <p>2020-2025 | BASc in Computer Engineering</p>
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
