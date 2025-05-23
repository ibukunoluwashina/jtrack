

import React from 'react';
import './JobCard.css'; // This CSS file should be in the same 'jobs' folder

/**
 * JobCard Component
 * Displays a single job with its title, comments, files, and due date.
 * Handles click to view job details.
 *
 * @param {object} props - The component's properties.
 * @param {object} props.jobData - The job object containing id, title, commentsCount, filesCount, dueDate, etc.
 * @param {function} props.onViewJob - Callback function when the card is clicked. Receives the full jobData object.
 * @param {function} [props.onUpdateJobStatus] - Optional: Callback function for changing job status (e.g., for drag-and-drop).
 */
const JobCard = ({ jobData, onViewJob, onUpdateJobStatus }) => {
    // Graceful handling if jobData is somehow undefined (though PipelinePage should prevent this)
    if (!jobData) {
        console.error("JobCard received undefined jobData!");
        return null; // Don't render anything if data is missing
    }

    // Destructure jobData.
    // 'id' and 'status' are accessed via jobData.id and jobData.status to avoid 'no-unused-vars' warning,
    // as they are not directly rendered in the JSX in this version.
    const { title, description, commentsCount, filesCount, dueDate } = jobData;

    return (
        // onClick now directly uses onViewJob, passing the whole jobData object
        <div className="job-card" onClick={() => onViewJob(jobData)}>
            <div className="job-card-header">
                <h4 className="job-card-title">{title}</h4>
                {/*
                    Optional: Display status on the card if desired.
                    If uncommented, you could put 'status' back into the destructuring if you prefer.
                */}
                {/* {jobData.status && (
                    <span className={`job-status status-${jobData.status.toLowerCase().replace(' ', '-')}`}>
                        {jobData.status}
                    </span>
                )} */}
            </div>

            {/* Display description snippet if available */}
            {description && <p className="job-card-description">{description.substring(0, 50)}...</p>}

            <div className="job-meta">
                {commentsCount > 0 && (
                    <span className="job-meta-item">
                        {/* Accessible emoji: wrapped in span with role="img" and aria-label */}
                        <span role="img" aria-label="comments count">💬</span> {commentsCount}
                    </span>
                )}
                {filesCount > 0 && (
                    <span className="job-meta-item">
                        {/* Accessible emoji */}
                        <span role="img" aria-label="files count">📁</span> {filesCount}
                    </span>
                )}
                {dueDate && (
                    <span className="job-meta-item">
                        {/* Accessible emoji */}
                        <span role="img" aria-label="due date">🗓️</span> {dueDate}
                    </span>
                )}
            </div>

            {/* Optional: Add a button or dropdown for status change directly on the card */}
            {/*
            {onUpdateJobStatus && (
                <div className="job-actions">
                    <button onClick={(e) => { e.stopPropagation(); onUpdateJobStatus(jobData.id, 'Done'); }}>
                        Mark Done
                    </button>
                </div>
            )}
            */}
        </div>
    );
};

export default JobCard;