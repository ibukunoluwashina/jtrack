// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import RatingStars from '../ui/RatingStars'; // Import the RatingStars component

function HomePage() {
  const handleRatingChange = (newRating) => {
    console.log("User rated:", newRating, "stars!");
    // Here you would typically send this rating to a backend API
    // or store it in your context/global state.
    alert(`Thank you for rating us ${newRating} stars!`);
  };

  return (
    <div className="home-page-container">
      <header className="home-header">
        <h1>ᵔᴗᵔWelcome to Your Job Tracker!ᵔᴗᵔ</h1>
    
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
        <button className="start-button">Go to Pipeline</button>
      </section>
      <footer className="home-footer">
        <h3>Rate Your Experience!</h3>
        <RatingStars onRatingChange={handleRatingChange} /> {/* Integrate the rating component */}
        <p>&copy; 2025 Job Tracker App.Desire Vargas ღ</p>
      </footer>
    </div>
  );
}

export default HomePage;