import React, { useEffect, useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './styling/MainPage.css';
import Resume from '../assets/Nakul_Dharan-Resume-FE-2023_2024Winter.pdf';
import ubcLogo from '../assets/ubc_image.png';
import cmdPrompt from '../assets/terminal.png'
import { motion, AnimatePresence } from 'framer-motion';
import ClashLogo from '../assets/clash_course_logo.png'
import OS161Logo from '../assets/os161_logo.png'
import SearchLogo from '../assets/search_engine_logo.png'
import HeatingReport from '../assets/Heating_System_Report.pdf'

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


const ProjectCard = ({ project, isSelected, onClick }) => {
    
    return (
        <motion.div 
            layout
            initial={{ borderRadius: 15 }}
            onClick={() => onClick(project.id)}
            className='myproject-card'
            whileHover={{ scale: 1.1 }}
        >
            <motion.h2 layout='position'>{project.title}</motion.h2>
            {isSelected && (
                <motion.div
                    layout = 'position'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='expanded-content'
                >
                    <p>{project.description}</p>
                    {project.github && (
                        <a href={project.github} className="card-link-button">
                        GitHub
                        </a>
                    )}
                    {project.website && (
                        <a href={project.website} className="card-link-button">
                        Website
                        </a>
                    )}
                    {project.report && (
                        <a href={project.report} className="card-link-button">
                        Full Report
                        </a>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
};

const MainPage = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [offsetY, setOffsetY] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleCardClick = (id) => {
        setSelectedId(selectedId === id ? null : id);
    };
    

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
        { id: 'project1', title: 'Clash Course', subtitle: 'A University Course Planner', logo: ClashLogo, fontClass: 'font-style-1', description: 'Full-stack web application assisting students in visualizing course schedules and catching potential conflicts. Developed using HTML, CSS, and JavaScript, the app allows students to add courses and times to a schedule, visually highlighting any time conflicts between courses.',
        website: 'http://clashcourse.online',
        github: 'https://github.com/NakulGD/worklist_helper'},
        { id: 'project2', title: 'OS161', subtitle: 'Operating System Implementation', description: 'Developed by Harvard University as a teaching tool, OS/161 is a C-based, multicore operating system. Initially, the system has missing/primitive implementations of core operating system components. It was up to me to program, rigorously debug, and optimize these components to end up with a stable, reliable, and quick operating system. (GitHub link coming soon)', fontClass: 'font-style-2', website: null, github: null},
        { id: 'project3', title: 'Search Engine', subtitle: 'Autocompletion Capable Search', logo: SearchLogo, description: 'A fully functional Java-based search engine leveraging Naive Bayesian Analysis and Laplacian Smoothing to enhance accuracy and reliability of autocomplete suggestions based on what the user has inputted.', fontClass: 'font-style-3', github: 'https://github.com/NakulGD/Search-Engine.git'},
        { id: 'project4', title: 'Curation System', subtitle: 'Content Curation for Twitter', logo: ClashLogo, description: 'Java-based content curation service that utilized the Twitter API to provide a streamlined solution for managing social media activity. The service allowed for the addition and removal of subscribers, resulting in a customizable timeline of their latest unread tweets.', fontClass: 'font-style-1', github: 'https://github.com/NakulGD/Social-Media-Curation.git'},
        { id: 'project5', title: 'RISC Machine', subtitle: 'Turing-Complete Computer', logo: ClashLogo, description:'A functional 16-bit Turing-complete Reduced Instruction Set Computer (RISC) machine. This computational device was constructed of a Datapath, a Finite State Machine (FSM) controller, Random Access Memory (RAM), and register modules. The entire development process was centered around the use of SystemVerilog, implemented on a Field-Programmable Gate Array (FPGA) board.', fontClass: 'font-style-1' },
        { id: 'project6', title: 'Automatic Heating System', subtitle: 'Built from an NTC Thermistor', logo: ClashLogo, description: 'Developed a working implementation of an automatic thermostat, intricately designed around an NTC Thermistor, calculating temperature with 0.1℃ precision across a -2-67℃ spectrum.It contained a dual-speed motor control circuit, utilizing PWM through a 555 timer chip, to adeptly modulate a the speed of a connected fan, ensuring optimal energy efficiency and implementing an automatic shut-off feature to conserve power. Additionally, the system possesses data logging functionalities, logging temperature data to an SD card via Arduino, and subsequently craft a graph, providing a clear and insightful visual representation of the data.', 
        fontClass: 'font-style-1', report: HeatingReport },
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
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                        isSelected={selectedId === project.id}
                        onClick={handleCardClick}
                    />
                ))}

            </div>
        </div>
    );
};

export default MainPage;