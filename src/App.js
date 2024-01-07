import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import MainPage from './components/MainPage';


function App() {
  const [homePageVisible, setHomePageVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1100);
  const [landingPageSkipped, setLandingPageSkipped] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth > 1100);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      setHomePageVisible(true);
      setLandingPageSkipped(true);
    } else if (landingPageSkipped) {
      // If the landing page was skipped and the screen is now large, don't show the landing page
      setHomePageVisible(true);
    }
  }, [isLargeScreen, landingPageSkipped]);

  return (
    <div className="App">
      {isLargeScreen && !landingPageSkipped && <Landing onLandingAnimationEnd={() => setHomePageVisible(true)} />}
      {homePageVisible && <MainPage />}
    </div>
  );
}

export default App;