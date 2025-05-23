// src/pages/PipelinesDashboard.js
import React from 'react';
import { usePipelineContext } from '../context/PipelineContext'; // Access the pipeline data
import { useNavigate } from 'react-router-dom'; // For navigation
import './PipelinesDashboard.css'; // For styling

function PipelinesDashboard() {
  const { pipelines, addPipeline } = usePipelineContext(); // Get pipelines and addPipeline function
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle clicking on a pipeline to view it
  const handleViewPipeline = (pipelineId) => {
    navigate(`/pipeline/${pipelineId}`); // Navigate to the specific pipeline's route
  };

  // Function to handle adding a new pipeline (for now, will go to a simple form)
  const handleAddNewPipeline = () => {
    // For simplicity, let's just add a dummy new pipeline for now
    // In a real app, you'd navigate to an AddPipeline form
    const newPipelineName = prompt("Enter name for new pipeline:");
    if (newPipelineName) {
        addPipeline({ name: newPipelineName });
    }
  };

  return (
    <div className="pipelines-dashboard-container">
      <h2>Your Pipelines</h2>

      <div className="pipeline-list-actions">
          <button onClick={handleAddNewPipeline} className="add-pipeline-button">
              + Add New Pipeline
          </button>
      </div>

      {pipelines.length === 0 ? (
        <p>No pipelines found. Click "Add New Pipeline" to get started!</p>
      ) : (
        <div className="pipelines-grid">
          {pipelines.map((pipeline) => (
            <div
              key={pipeline.id}
              className="pipeline-card"
              onClick={() => handleViewPipeline(pipeline.id)}
            >
              <h3>{pipeline.name}</h3>
              <p>{pipeline.jobs ? pipeline.jobs.length : 0} Jobs</p>
              {/* You could add more details here, like progress, last updated, etc. */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PipelinesDashboard;