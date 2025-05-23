// src/context/PipelineContext.js
import React, { createContext, useState, useContext } from 'react';

export const PipelineContext = createContext();

export const PipelineProvider = ({ children }) => {
    // Initialize with dummy data since there's no API connection yet
    const [pipelines, setPipelines] = useState([
        {
            id: 'pipe-1',
            name: 'Web Development Project',
            jobs: [
                { id: 'job-1', title: 'Setup React App', status: 'Done', description: 'Initialize create-react-app.' },
                { id: 'job-2', title: 'Design Database Schema', status: 'Done', description: 'Define tables for jobs and pipelines.' },
                { id: 'job-3', title: 'Build Pipeline Page UI', status: 'In Progress', description: 'Create components for columns and cards.' },
                { id: 'job-4', title: 'Implement Add Job Feature', status: 'To Do', description: 'Add a form to create new job cards.' },
                { id: 'job-5', title: 'Connect to Backend API', status: 'To Do', description: 'Integrate frontend with REST endpoints.' }
            ]
        },
        {
            id: 'pipe-2',
            name: 'Mobile App Idea',
            jobs: [
                { id: 'job-6', title: 'Brainstorm Features', status: 'To Do', description: 'List core functionalities.' },
                { id: 'job-7', title: 'Market Research', status: 'To Do', description: 'Identify target audience and competitors.' }
            ]
        }
    ]);

    // Functions to manipulate pipelines and jobs (now client-side only)
    const addPipeline = (pipeline) => {
        setPipelines(prevPipelines => [
            ...prevPipelines,
            { id: `pipe-${Date.now()}`, name: pipeline.name, jobs: [] } // Generate a simple ID
        ]);
    };

    const updatePipeline = (id, updatedPipeline) => {
        setPipelines(prevPipelines =>
            prevPipelines.map(p => (p.id === id ? { ...p, ...updatedPipeline } : p))
        );
    };

    const deletePipeline = (id) => {
        setPipelines(prevPipelines => prevPipelines.filter(p => p.id !== id));
    };

    const addJobToPipeline = (pipelineId, newJob) => {
        setPipelines(prevPipelines =>
            prevPipelines.map(pipeline =>
                pipeline.id === pipelineId
                    ? {
                        ...pipeline,
                        jobs: [...(pipeline.jobs || []), { id: `job-${Date.now()}`, status: 'To Do', ...newJob }]
                      }
                    : pipeline
            )
        );
    };

    const updateJobStatus = (pipelineId, jobId, newStatus) => {
        setPipelines(prevPipelines =>
            prevPipelines.map(pipeline =>
                pipeline.id === pipelineId
                    ? {
                        ...pipeline,
                        jobs: pipeline.jobs.map(job =>
                            job.id === jobId ? { ...job, status: newStatus } : job
                        )
                      }
                    : pipeline
            )
        );
    };

    const contextValue = {
        pipelines,
        addPipeline,
        updatePipeline,
        deletePipeline,
        addJobToPipeline,
        updateJobStatus,
    };

    return (
        <PipelineContext.Provider value={contextValue}>
            {children}
        </PipelineContext.Provider>
    );
};

// Custom hook for easier consumption
export const usePipelineContext = () => {
  return useContext(PipelineContext);
};