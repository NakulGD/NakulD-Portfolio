import React, { useState, useEffect } from 'react';
import './styling/HomePage.css';
import { TypeAnimation } from 'react-type-animation';

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

const HomePage = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setStartAnimation(true);
        }, 5000); // Delay of 6000ms (6 seconds)

        return () => clearTimeout(startTimer);
    }, []);

    return (
        <>
        <div className="fade-out-container">
            <div className='animated-rectangle'> </div>
            <div className='sliding-rectangle'></div>
            <div className="grid-container">
                {startAnimation && (
                    <div className="typing-animation-container">
                        <TypeAnimation
                            cursor={false}
                            className={CURSOR_CLASS_NAME}
                            sequence={[
                                'Nakul Dharan',
                                (el) => el.classList.remove(CURSOR_CLASS_NAME), // Remove cursor after text
                            ]}
                            speed={15}
                            wrapper="h2"
                            repeat={0}
                            style={{ fontSize: '2em' }}
                        />
                    </div>
                )}
                {/* ... other elements ... */}
            </div>
        </div>
        <div className='top-sliding-rectangle'></div>
        <div className='top-left-rectangle'>
            <p>Nakul Dharan</p>
        </div>
        </>
    );
};

export default HomePage;
