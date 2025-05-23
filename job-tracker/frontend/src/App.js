// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PipelinesDashboard from './pages/PipelinesDashboard'; // NEW: Import the dashboard
import PipelinePage from './components/pipeline/PipelinePage';
import { PipelineProvider } from './context/PipelineContext';

function App() {
  return (
    <Router>
      <div className="App">
        <PipelineProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* New route for the dashboard */}
            <Route path="/pipelines" element={<PipelinesDashboard />} />
            {/* Modified route for a specific pipeline using a URL parameter */}
            <Route path="/pipeline/:pipelineId" element={<PipelinePage />} />
            {/* You could also have a route for AddPipeline form like: */}
            {/* <Route path="/add-pipeline" element={<AddPipeline />} /> */}
          </Routes>
        </PipelineProvider>
      </div>
    </Router>
  );
}

export default App;