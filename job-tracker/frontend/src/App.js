/// src/App.js
import React from 'react';
import './App.css';
import { PipelineProvider } from './context/PipelineContext';
import PipelinePage from './components/pipeline/PipelinePage'; // Assuming PipelinePage is your main view

function App() {
  return (
    <div className="App">
      <PipelineProvider>
        <PipelinePage />
      </PipelineProvider>
    </div>
  );
}

export default App;