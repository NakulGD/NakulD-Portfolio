import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
