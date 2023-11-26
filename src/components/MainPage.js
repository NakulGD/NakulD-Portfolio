

import React, { useEffect, useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './styling/MainPage.css';
import Resume from '../assets/Nakul-Dharan-Resume-2023_2024Winter.pdf';
import ubcLogo from '../assets/ubc_image.png';
import cmdPrompt from '../assets/terminal.png'
import { motion, AnimatePresence } from 'framer-motion';
import ClashLogo from '../assets/clash_course_logo.png'
import OS161Logo from '../assets/os161_logo.png'
import SearchLogo from '../assets/search_engine_logo.png'

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
    const [selectedId, setSelectedId] = useState(null);
    

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



    const projects = [
        { id: 'project1', title: 'Clash Course', subtitle: 'A University Course Planner', logo: ClashLogo, fontClass: 'font-style-1'},
        //{ id: 'project2', title: 'OS161', subtitle: 'Operating System Implementation', logo: OS161Logo, fontClass: 'font-style-2'},
        { id: 'project3', title: 'Search Engine', subtitle: 'Autocompletion Capable Search', logo: SearchLogo, fontClass: 'font-style-3'},
        //{ id: 'project4', title: 'Content Curation System', subtitle: 'Content Curation for Twitter', logo: ClashLogo, fontClass: 'font-style-1' },
        //{ id: 'project5', title: '16-Bit RISC Machine', subtitle: 'Turing-Complete Computer', logo: ClashLogo, fontClass: 'font-style-1' },
        //{ id: 'project6', title: 'Automatic Heating System', subtitle: 'Built from an NTC Thermistor', logo: ClashLogo, fontClass: 'font-style-1' },
        // Add more projects
    ];

    return (
        <div className='fade-in-left-container'>
            <div className={`header-rectangle ${selectedId ? 'blur-background' : ''}`}>
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

            <div className={`education-title ${selectedId ? 'blur-background' : ''}`}>
                        <h1> {'>Education'} </h1>
            </div>

            <div className={`education-section ${selectedId ? 'blur-background' : ''}`}>

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

            <div className={`test ${selectedId ? 'blur-background' : ''}`} style={{ borderTop: "2px solid black ", marginLeft: 20, marginRight: 20 }}></div>

            <div className={`projects-title ${selectedId ? 'blur-background' : ''}`}>
                    <h1>{'>Technical Projects'}</h1>
            </div>
            <div className='projects-section'>
                <div className={`projects-container ${selectedId ? 'blur-background' : ''}`}>
                    {projects.map(project => (
                        <motion.div key={project.id} layoutId={project.id} onClick={() => setSelectedId(project.id)} className="project-card">
                            <div className="project-header">
                                <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />
                                <motion.h2 className={project.fontClass}>{project.title}</motion.h2>
                            </div>
                            <motion.h5 className='project-subtitle'>{project.subtitle}</motion.h5>
                        </motion.div>
                    ))}
                </div>


                <AnimatePresence>
                    {selectedId && (
                        <motion.div layoutId={selectedId} className="enlarged-project">
                            {projects.find(project => project.id === selectedId) && (
                                <>
                                    <motion.h2 className={projects.find(project => project.id === selectedId).fontClass}>{projects.find(project => project.id === selectedId).title}</motion.h2>
                                    <motion.h5 className="project-subtitle">{projects.find(project => project.id === selectedId).subtitle}</motion.h5>
                                    <motion.button className="close-button" onClick={() => setSelectedId(null)}>X</motion.button>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MainPage;
