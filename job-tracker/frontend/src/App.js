// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PipelinePage from './components/pipeline/PipelinePage'; // Or PipelineList if you're using that as the main view
import { PipelineProvider } from './context/PipelineContext';

function App() {
  return (
    <Router>
      <div className="App">
        <PipelineProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Make sure the path here exactly matches what HomePage's button navigates to */}
            <Route path="/pipeline" element={<PipelinePage />} />
          </Routes>
        </PipelineProvider>
      </div>
    </Router>
  );
}

export default App;