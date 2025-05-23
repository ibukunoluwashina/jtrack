// src/components/pipeline/JobCard.js (assuming JobCard is in this folder based on our last successful structure)
import React from 'react';
import './JobCard.css'; // Ensure this CSS file exists and is styled

// Make sure your jobData includes these new properties:
// { id: 'job-1', title: 'Setup React App', status: 'Done', description: '...', commentsCount: 3, filesCount: 1, dueDate: '2025-06-15' }
const JobCard = ({ jobData, onViewJob, onUpdateJobStatus }) => { // Added onUpdateJobStatus if you have drag/drop or status change
    const { id, title, status, description, commentsCount, filesCount, dueDate } = jobData;

    return (
        <div className="job-card" onClick={() => onViewJob(jobData)}> {/* Pass the whole jobData on click */}
            <div className="job-card-header">
                <h4 className="job-card-title">{title}</h4>
                {/* Display status more prominently if needed, or rely on column */}
                {/* <span className={`job-status status-${status.toLowerCase().replace(' ', '-')}`}>{status}</span> */}
            </div>
            {/* Optional: Add description snippet if it makes sense */}
            {description && <p className="job-card-description">{description.substring(0, 50)}...</p>}

            <div className="job-meta">
                {commentsCount > 0 && (
                    <span className="job-meta-item">
                        💬 {commentsCount}
                    </span>
                )}
                {filesCount > 0 && (
                    <span className="job-meta-item">
                        📁 {filesCount}
                    </span>
                )}
                {dueDate && (
                    <span className="job-meta-item">
                        🗓️ {dueDate}
                    </span>
                )}
            </div>

            {/* If you have a dropdown or button to change status from the card itself */}
            {/* <div className="job-actions">
                <button onClick={(e) => { e.stopPropagation(); onUpdateJobStatus(id, 'Done'); }}>Mark Done</button>
            </div> */}
        </div>
    );
};

export default JobCard;