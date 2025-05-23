// src/components/PipelineColumn.js
import React from 'react';
import './PipelineColumn.css'; // Link to its specific CSS file
// We will import JobCard here later

function PipelineColumn({ title, children }) { // title and children are props
  return (
    <div className="pipeline-column">
      <h3>{title}</h3>
      <div className="column-content">
        {children} {/* This is where JobCards will go */}
      </div>
    </div>
  );
}

export default PipelineColumn;