// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigator from '../src/App navigator/Navigator'; 
import './App.css';
import AppRoutes from './Routes'; 

function App() {
  return (
    <Router>
      <div>
        
        <Navigator />

        
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
