// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // <--- Imports
import HomePage from './pages/HomePage';
import PipelinePage from './components/pipeline/PipelinePage'; // <--- Ensure this path is correct
import { PipelineProvider } from './context/PipelineContext';

function App() {
  return (
    <Router> {/* <--- Router wrapper */}
      <div className="App">
        <PipelineProvider> {/* <--- Provider wraps Routes */}
          <Routes> {/* <--- Routes wrapper */}
            <Route path="/" element={<HomePage />} /> {/* <--- Home page route */}
            <Route path="/pipeline" element={<PipelinePage />} /> {/* <--- Pipeline page route */}
          </Routes>
        </PipelineProvider>
      </div>
    </Router>
  );
}

export default App;