import React, { useState, useEffect } from 'react';
import './styling/HomePage.css';
import { TypeAnimation } from 'react-type-animation';
import normalCursorImage from '../assets/normal-cursor.png';


const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);
    const [wipeAnimationCompleted, setWipeAnimationCompleted] = useState(false);


    useEffect(() => {
        const startTimer = setTimeout(() => {
            setStartAnimation(true);
        }, 5000); // Delay of 6000ms (6 seconds)

        return () => clearTimeout(startTimer);
    }, []);

    useEffect(() => {
        if (startAnimation) {
            const delay = 1500;

            const timeoutId = setTimeout(() => {
                let startTime = null;
                const duration = 900; // Duration of the movement in milliseconds
        
                const startPos = { x: window.innerWidth * 70 / 100, y: window.innerHeight * 50 / 100 };
                const endPos = { x: window.innerWidth * 46.5 / 100, y: window.innerHeight * 60 / 100 };
                const controlPoint1 = { x: window.innerWidth * 80 / 100, y: window.innerHeight * 60 / 100 }; // First control point
                const controlPoint2 = { x: window.innerWidth * 45 / 100, y: window.innerHeight * 80 / 100 }; // Second control point
        
                const calculateBezierPoint = (t, p0, p1, p2, p3) => {
                    const cX = 3 * (p1.x - p0.x);
                    const bX = 3 * (p2.x - p1.x) - cX;
                    const aX = p3.x - p0.x - cX - bX;
        
                    const cY = 3 * (p1.y - p0.y);
                    const bY = 3 * (p2.y - p1.y) - cY;
                    const aY = p3.y - p0.y - cY - bY;
        
                    const x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
                    const y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
        
                    return { x, y };
                };
    
                const animate = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    let t = elapsed / duration; // Normalized time (0 to 1)
                    t = 1 - Math.pow(1 - t, 3); // Apply cubic easing (ease-out)

                    const currentPosition = calculateBezierPoint(t, startPos, controlPoint1, controlPoint2, endPos);

                    setCursorPosition(currentPosition);
        
                    if (elapsed < duration) {
                        requestAnimationFrame(animate);
                    }
                };
    
                setCursorVisible(true);
                requestAnimationFrame(animate);
            }, delay);

            return () => clearTimeout(timeoutId);
        }

    }, [startAnimation]);


    useEffect(() => {
        // Set a timeout to change visibility after 10 seconds
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 8500); // 10000 milliseconds = 10 seconds
    
        return () => clearTimeout(timer);
      }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setWipeAnimationCompleted(true);
        }, 8500 + 2000); // Duration of wipe animation + delay

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            <div className="screen-wipe"></div>
            {!wipeAnimationCompleted && (
                <>
                    <div className={`blink-2 ${isVisible ? 'visible' : ''}`}>
                        <p>GO</p>
                    </div>
                    <div className='animated-rectangle'></div>
                    <div className="grid-container">
                        {startAnimation && (
                            <div className="typing-animation-container">
                                <TypeAnimation
                                    cursor={false}
                                    className={CURSOR_CLASS_NAME}
                                    sequence={[
                                        'Nakul Dharan',
                                        (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    ]}
                                    speed={10}
                                    wrapper="h2"
                                    repeat={0}
                                    style={{ fontSize: '2em' }}
                                />
                            </div>
                        )}
                    </div>
                    <div 
                        className="custom-cursor"
                        style={{
                            left: `${cursorPosition.x}px`,
                            top: `${cursorPosition.y}px`,
                            opacity: cursorVisible ? 1 : 0,
                        }}
                    />
                </>
            )}
        </>
    );
};

export default HomePage;