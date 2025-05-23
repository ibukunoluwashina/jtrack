// src/components/JobCard.js
import React from 'react';
import './JobCard.css'; // Link to its specific CSS file

function JobCard({ jobTitle, status, onClick }) { // Example props for now
  return (
    <div className="job-card" onClick={onClick}>
      <h4>{jobTitle}</h4>
      <p className="job-status">Status: {status}</p>
      {/* We'll add more details here later (e.g., date, comments, etc.) */}
    </div>
  );
}

export default JobCard;