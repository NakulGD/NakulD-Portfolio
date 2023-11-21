import React, { useState, useEffect } from 'react';
import './styling/HomePage.css';

const HomePage = () => {
    const [buttonText, setButtonText] = useState('OFF');

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonText('ON');
        }, 3400); // 3400ms = 3s (animation delay) + 0.4s (animation duration)

        return () => clearTimeout(timer);
    }, []);




    return (
        <div className="grid-container">
            <h1 className="welcome-element"> Glad you're here, my name is</h1>
            <div className="on-element">
                <div className="button">
                    <span>{buttonText}</span>
                </div>
            </div>
            <h1 className="text-flicker-in-glow name-element">Nakul Dharan</h1>
            {/* Additional rows and columns as needed */}
        </div>
    );
};

export default HomePage;