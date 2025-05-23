// src/App.js
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'; // Import your new HomePage component
// Removed PipelineProvider and PipelinePage for now, will re-add with routing

function App() {
  return (
    <div className="App">
      {/* Render your HomePage component as the main view */}
      <HomePage />
    </div>
  );
}

export default App;