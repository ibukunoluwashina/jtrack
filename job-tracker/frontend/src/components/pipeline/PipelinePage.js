// C:\Users\jilli\New folder (15)\jtrack\job-tracker\frontend\src\components\pipeline\PipelinePage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PipelinePage.css'; // Make sure this CSS file exists
import PipelineColumn from './PipelineColumn'; // This should be in the same 'pipeline' folder
import JobCard from '../jobs/JobCard'; // <--- CORRECTED IMPORT PATH for JobCard.js
import { usePipelineContext } from '../../context/PipelineContext'; // Path confirmed correct

function PipelinePage() {
    const { pipelineId } = useParams();
    const { pipelines, updateJobStatus, addJobToPipeline } = usePipelineContext();
    const navigate = useNavigate();

    const currentPipeline = pipelines.find(p => p.id === pipelineId);

    if (!currentPipeline) {
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

    // This function will receive the entire jobData object from JobCard's onViewJob callback
    const handleCardClick = (jobData) => {
        alert(`Clicked Job: ${jobData.title} (ID: ${jobData.id})\nStatus: ${jobData.status}\nDescription: ${jobData.description}`);
        // Here you would typically open a detailed modal or navigate to a job details page
    };

    const handleStatusChange = (jobId, newStatus) => {
        updateJobStatus(currentPipeline.id, jobId, newStatus);
    };

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
                            jobData={job} // <--- CRITICAL: Pass the entire 'job' object as 'jobData'
                            onViewJob={handleCardClick} // <--- Ensure this prop name matches JobCard's prop name
                            // onUpdateJobStatus={(newStatus) => handleStatusChange(job.id, newStatus)} // Pass this if JobCard uses it
                        />
                    ))}
                </PipelineColumn>

                <PipelineColumn title="In Progress">
                    {inProgressJobs.map(job => (
                        <JobCard
                            key={job.id}
                            jobData={job} // <--- CRITICAL: Pass the entire 'job' object as 'jobData'
                            onViewJob={handleCardClick}
                            // onUpdateJobStatus={(newStatus) => handleStatusChange(job.id, newStatus)}
                        />
                    ))}
                </PipelineColumn>

                <PipelineColumn title="Done">
                    {doneJobs.map(job => (
                        <JobCard
                            key={job.id}
                            jobData={job} // <--- CRITICAL: Pass the entire 'job' object as 'jobData'
                            onViewJob={handleCardClick}
                            // onUpdateJobStatus={(newStatus) => handleStatusChange(job.id, newStatus)}
                        />
                    ))}
                </PipelineColumn>
            </div>
        </div>
    );
}

export default PipelinePage;