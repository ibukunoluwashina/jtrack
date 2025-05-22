// src/components/pipeline/PipelinePage.js
import React from 'react';
import './PipelinePage.css'; // Link to its specific CSS file

function PipelinePage() {
  return (
    <div className="pipeline-container">
      <h2>Your Project Pipeline</h2>
      <div className="pipeline-columns-wrapper">
        {/* These will be your individual pipeline stages/columns */}
        <div className="pipeline-column">
          <h3>To Do</h3>
          <div className="job-card">Job A: Finish setup</div>
          <div className="job-card">Job B: Plan UI</div>
        </div>

        <div className="pipeline-column">
          <h3>In Progress</h3>
          <div className="job-card">Job C: Build components</div>
        </div>

        <div className="pipeline-column">
          <h3>Done</h3>
          <div className="job-card">Job D: Initial wireframe</div>
        </div>
      </div>
    </div>
  );
}

export default PipelinePage;