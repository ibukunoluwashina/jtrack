// src/context/PipelineContext.js
import React, { createContext, useState, useContext } from 'react';

export const PipelineContext = createContext();

export const PipelineProvider = ({ children }) => {
    // Initialize with dummy data, now including commentsCount, filesCount, and dueDate
    const [pipelines, setPipelines] = useState([
        {
            id: 'pipe-1',
            name: 'Web Development Project',
            jobs: [
                { id: 'job-1', title: 'Setup React App', status: 'Done', description: 'Initialize create-react-app.' },
                { id: 'job-2', title: 'Design Database Schema', status: 'Done', description: 'Define tables for jobs and pipelines.' },
                {
                    id: 'job-3',
                    title: 'Build Pipeline Page UI',
                    status: 'In Progress',
                    description: 'Create components for columns and cards.',
                    commentsCount: 3, // Added for emoji
                    filesCount: 1,    // Added for emoji
                    dueDate: '2025-05-31' // Added for calendar icon and date
                },
                { id: 'job-4', title: 'Implement Add Job Feature', status: 'To Do', description: 'Add a form to create new job cards.' },
                {
                    id: 'job-5',
                    title: 'Connect to Backend API',
                    status: 'To Do',
                    description: 'Integrate frontend with REST endpoints.',
                    commentsCount: 0, // This job won't show comments emoji (count is 0)
                    filesCount: 2,    // This job will show files emoji
                    dueDate: '2025-06-15' // This job will show due date
                }
            ]
        },
        {
            id: 'pipe-2',
            name: 'Mobile App Idea',
            jobs: [
                {
                    id: 'job-6',
                    title: 'Brainstorm Features',
                    status: 'To Do',
                    description: 'List core functionalities.',
                    commentsCount: 5, // Added for emoji
                    filesCount: 0,    // This job won't show files emoji
                    dueDate: '2025-07-01' // Added for calendar icon and date
                },
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
                        // Ensure 'commentsCount', 'filesCount', and 'dueDate' are initialized if not provided by newJob
                        jobs: [...(pipeline.jobs || []), { id: `job-${Date.now()}`, status: 'To Do', commentsCount: 0, filesCount: 0, ...newJob }]
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

    // The updateJob function to handle general job property updates
    const updateJob = (pipelineId, jobId, updatedJob) => {
        setPipelines(prevPipelines =>
            prevPipelines.map(pipeline =>
                pipeline.id === pipelineId
                    ? {
                        ...pipeline,
                        jobs: pipeline.jobs.map(job =>
                            job.id === jobId ? { ...job, ...updatedJob } : job
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
        updateJob, // Added this to the contextValue
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