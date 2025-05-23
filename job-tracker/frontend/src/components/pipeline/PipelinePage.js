// src/components/pipeline/PipelinePage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // NEW: useParams to get URL params, useNavigate to go back
import './PipelinePage.css';
import PipelineColumn from './PipelineColumn';
import JobCard from '../jobs/JobCard';
import { usePipelineContext } from '../../context/PipelineContext';

function PipelinePage() {
  const { pipelineId } = useParams(); // Get the pipelineId from the URL
  const { pipelines, updateJobStatus, addJobToPipeline } = usePipelineContext(); // Also get addJobToPipeline
  const navigate = useNavigate(); // For going back to dashboard

  // Find the current pipeline based on the ID from the URL
  const currentPipeline = pipelines.find(p => p.id === pipelineId);

  // If pipeline not found, redirect or show a message
  if (!currentPipeline) {
    // You could navigate back to the dashboard or show a 404 message
    return (
      <div className="pipeline-container">
        <h2>Pipeline not found!</h2>
        <p>The pipeline with ID "{pipelineId}" does not exist.</p>
        <button onClick={() => navigate('/pipelines')} className="back-button">
            Back to Pipelines Dashboard
        </button>
      </div>
    );
  }

  // Filter jobs for the current pipeline based on status
  const todoJobs = (currentPipeline.jobs || []).filter(job => job.status === 'To Do');
  const inProgressJobs = (currentPipeline.jobs || []).filter(job => job.status === 'In Progress');
  const doneJobs = (currentPipeline.jobs || []).filter(job => job.status === 'Done');

  const handleCardClick = (job) => {
    alert(`Clicked Job: ${job.title} (ID: ${job.id})\nStatus: ${job.status}\nDescription: ${job.description}`);
    // This is where you would typically open a detailed modal or navigate to a job details page
  };

  const handleStatusChange = (jobId, newStatus) => {
    updateJobStatus(currentPipeline.id, jobId, newStatus);
  };

  // Handle adding a new job
  const handleAddNewJob = () => {
      const jobTitle = prompt("Enter title for new job:");
      if (jobTitle) {
          addJobToPipeline(currentPipeline.id, { title: jobTitle, description: "New job created." });
      }
  };

  return (
    <div className="pipeline-container">
      <button onClick={() => navigate('/pipelines')} className="back-button">
          &larr; Back to Pipelines
      </button>
      <h2>Pipeline: {currentPipeline.name}</h2>
      <div className="pipeline-actions">
          <button onClick={handleAddNewJob} className="add-job-button">
              + Add New Job
          </button>
      </div>

      <div className="pipeline-columns-wrapper">
        <PipelineColumn title="To Do">
          {todoJobs.map(job => (
            <JobCard
              key={job.id}
              jobTitle={job.title}
              status={job.status}
              onClick={() => handleCardClick(job)}
              onStatusChange={(newStatus) => handleStatusChange(job.id, newStatus)}
            />
          ))}
        </PipelineColumn>

        <PipelineColumn title="In Progress">
          {inProgressJobs.map(job => (
            <JobCard
              key={job.id}
              jobTitle={job.title}
              status={job.status}
              onClick={() => handleCardClick(job)}
              onStatusChange={(newStatus) => handleStatusChange(job.id, newStatus)}
            />
          ))}
        </PipelineColumn>

        <PipelineColumn title="Done">
          {doneJobs.map(job => (
            <JobCard
              key={job.id}
              jobTitle={job.title}
              status={job.status}
              onClick={() => handleCardClick(job)}
              onStatusChange={(newStatus) => handleStatusChange(job.id, newStatus)}
            />
          ))}
        </PipelineColumn>
      </div>
    </div>
  );
}

export default PipelinePage;