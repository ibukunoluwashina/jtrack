// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PipelinesDashboard from "./pages/PipelinesDashboard"; // This is the CORRECT path
import PipelinePage from "./components/pipeline/PipelinePage";
import { PipelineProvider } from "./context/PipelineContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users"; // Importing the Users page

function App() {
  return (
    <Router>
      <div className="App">
        <PipelineProvider>
          <Routes>
            {/* Route for the Users page */}
            <Route path="/users" element={<Users />} />
            {/* Route for the Register page */}
            <Route path="/register" element={<Register />} />
            {/* Route for the Login page */}
            <Route path="/login" element={<Login />} />
            {/* Route for the Home page */}
            <Route path="/" element={<HomePage />} />
            {/* New route for the dashboard */}
            <Route path="/pipelines" element={<PipelinesDashboard />} />
            {/* Modified route for a specific pipeline using a URL parameter */}
            <Route path="/pipeline/:pipelineId" element={<PipelinePage />} />
            {/* You could also have a route for AddPipeline form like: */}
            {/* <Route path="/add-pipeline" element={<AddPipeline />} /> */}
          </Routes>
        </PipelineProvider>
      </div>
    </Router>
  );
}

export default App;
