import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  const [homePageVisible, setHomePageVisible] = useState(false);

  return (
    <div className="App">
      <Landing onLandingAnimationEnd={() => setHomePageVisible(true)} />
      {homePageVisible && <MainPage />}
    </div>
  );
}

export default App;
