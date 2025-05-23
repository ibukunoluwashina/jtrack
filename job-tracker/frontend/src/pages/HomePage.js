// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Link to its specific CSS file
// We'll import RatingStars here later

function HomePage() {
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
        {/* You'll add a button here later to navigate to the pipeline page */}
        <button className="start-button">Go to Pipeline</button>
      </section>
      <footer className="home-footer">
        {/* This is where the rating component will go */}
        <h3>Rate Your Experience!</h3>
        {/* <RatingStars /> - Will be imported here later */}
        <p>&copy; 2025 Job Tracker App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;