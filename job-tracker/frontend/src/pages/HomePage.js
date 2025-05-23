// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import RatingStars from '../ui/RatingStars';
import { useNavigate } from 'react-router-dom'; // <--- Make sure this import is here

function HomePage() {
  const navigate = useNavigate(); // <--- Make sure this is here

  const handleRatingChange = (newRating) => {
    console.log("User rated:", newRating, "stars!");
    alert(`Thank you for rating us ${newRating} stars!`);
  };

  // <--- This function should be exactly like this
  const handleGoToPipeline = () => {
    navigate('/pipeline'); // <--- This should navigate to '/pipeline'
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
        {/* <--- This is the button and its onClick handler */}
        <button className="start-button" onClick={handleGoToPipeline}>
          Go to Pipeline
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