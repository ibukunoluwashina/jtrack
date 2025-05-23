// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import RatingStars from '../ui/RatingStars';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleRatingChange = (newRating) => {
    console.log("User rated:", newRating, "stars!");
    alert(`Thank thank you for rating us ${newRating} stars!`);
  };

  // Change this handler to navigate to the /pipelines dashboard
  const handleGoToPipelinesDashboard = () => {
    navigate('/pipelines'); // Navigate to the dashboard
  };

  const currentYear = new Date().getFullYear();
  const lastUpdateDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="home-page-container">
      <header className="home-header">
        <h1>Welcome to Your Job Tracker!</h1>
        <p>Organize your job applications, projects, and tasks with ease.</p>
      </header>
      <section className="home-features">
        <h2>Key Features:</h2>
        <ul>
          <li>Streamlined Pipeline Management</li>
          <li>Intuitive Job Card Organization</li>
          <li>Progress Tracking and Status Updates</li>
          <li>(Future: API Integration for Persistent Data)</li>
        </ul>
      </section>
      <section className="home-cta">
        <p>Ready to get started?</p>
        <button className="start-button" onClick={handleGoToPipelinesDashboard}> {/* Updated onClick */}
          Go to My Pipelines
        </button>
      </section>
      <footer className="home-footer">
        <h3>Rate Your Experience!</h3>
        <RatingStars onRatingChange={handleRatingChange} />
        <p>Last Updated: {lastUpdateDate}</p>
        <p>&copy; {currentYear} Job Tracker App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;