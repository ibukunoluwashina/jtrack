# Frontend: Job Tracking Pipeline

This repository contains the frontend application for a Job Tracking Pipeline, built with React. It provides a user interface for managing job tasks organized into customizable pipelines and columns, allowing for visual tracking of progress.

---

## 🚀 Features

* **Pipeline Display:** View jobs categorized into "To Do," "In Progress," and "Done" columns within specific pipelines.
* **Dynamic Job Cards:** Each job card displays its title, description, and includes visual indicators for:
       *Number of comments (💬 emoji)
       *Number of attached files (📁 emoji)
       *Due date (🗓️ calendar icon with date)
* **Context API for State Management:** Uses React's Context API to manage the application's pipeline and job data globally.
* **Client-Side Data:** Currently uses static, dummy data for demonstration purposes, managed within the `PipelineContext`.
* **Basic Job Addition:** Functionality to add new jobs to a pipeline (via a simple prompt).
* **Job Status Update:** Functionality to update job statuses (requires UI in `JobCard`).
* **Routing:** Utilizes React Router for navigation between different views:
    *A Home page (`/`)
    *Dynamic pipeline view (`/pipeline/:pipelineId`)

---

## 🛠️ Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **React Router DOM:** For declarative routing in React applications.
* **Context API:** For state management across components.
* **CSS:** For styling the application.
* **Node.js & npm:** As the JavaScript runtime and package manager.

---

## 📦 Getting Started

Follow these steps to set up and run the frontend application on your local machine.

### Prerequisites

* Node.js (LTS version recommended) and npm (comes with Node.js) installed on your system.

### Installation

1. **Navigate to the `frontend` directory:**
    Open your terminal or PowerShell and change your current directory to the `frontend` folder of your project:```bash
    cd "C:\Users\jilli\New folder (15)\jtrack\job-tracker\frontend"
         ```
    (Adjust the path if your project is located elsewhere)

2. **Install dependencies:**
    Run the following command to install all the necessary Node.js packages:
             ```bash
    npm install
                 ```

    *Note: You might see some `npm audit` warnings. While usually minor, if you encounter persistent issues, you can try running `npm audit fix --force` after installation to address them. Ensure no process is holding files (e.g., close VS Code) if you encounter permission errors during deletion/installation.*

### Running the Application

1. **Start the development server:**
    To run the application, use the following command. This explicitly sets the host to `127.0.0.1` to avoid potential `localhost` resolution issues and starts the React development server.

    ```bash
    $env:HOST="127.0.0.1"; npm start
              ```
    *(If you are on a Linux/macOS system, use `HOST=127.0.0.1 npm start` instead.)*

2.**Access the application:**
    Once the server starts (it usually takes a few moments), your browser should automatically open to `http://127.0.0.1:5500` (or sometimes `http://localhost:5500`).

---

## 🌐 Key Routes

* **`/`**: The Home Page.
* **`/pipeline/:pipelineId`**: Displays a specific pipeline.
    *Example: To view the "Web Development Project" pipeline, navigate to `http://127.0.0.1:5500/pipeline/pipe-1`.
    *Example: To view the "Mobile App Idea" pipeline, navigate to `http://127.0.0.1:5500/pipeline/pipe-2`.

---

## 🔗 Deployment & Access

This frontend application can be deployed as a static site. It needs to be hosted to be accessible online.

### Code Repository (GitHub)

To share the code, you'll typically push it to a version control platform like GitHub.

1. **Initialize Git:** In your project's **root directory** (e.g., `job-tracker`), run `git init`.
2. **Add `.gitignore`:** Create a `.gitignore` file in your root directory to exclude `node_modules` and other build artifacts.
3. **Commit Code:** Use `git add .` and `git commit -m "Initial commit"`.
4. **Create GitHub Repo:** Create a new repository on [github.com](https://github.com/).
5. **Link & Push:** Follow GitHub's instructions to link your local repository and push your code (`git remote add origin ...` then `git push -u origin main`).

Once pushed, your code will be accessible via a GitHub URL (e.g., `https://github.com/your-username/your-repo-name`).

### Live Demo (Render)

For a live demo, you can deploy this frontend application to a static site hosting service like Render, Vercel, or Netlify. These services are excellent for React apps.

**General Render Deployment Steps:**

1.**Connect to GitHub:** Link your Render account to your GitHub repository.
2.  **Create a New Static Site/Web Service:**
    *In Render, select "New" and then choose "Static Site" or "Web Service" (if you need a custom server setup, but for this React app, Static Site is usually sufficient).
    * Select your GitHub repository (`job-tracker-frontend`).
3.  **Configure Build Settings:**
    **Root Directory:** Specify the subdirectory where your frontend code resides (e.g., `frontend/`).
    **Build Command:** `npm run build`
    **Publish Directory (or Output Directory):** `build` (This is where React's build output goes).
4.  **Deploy:** Initiate the deployment. Render will build your application and provide a public URL.

Your live demo will then be accessible via the URL provided by Render (e.g., `https://your-app-name.onrender.com/`).

---

## ✨ Future Enhancements (Ideas)

* **Backend Integration:** Replace dummy data with actual data fetched from a backend API.
* **Pipelines Dashboard:** Create a dedicated `/pipelines` page to list, add, edit, and delete pipelines.
* **Job Card Details:** Implement a modal or dedicated page for viewing and editing full job details.
* **Drag-and-Drop:** Allow users to drag job cards between columns to change their status.
* **Filtering and Sorting:** Add options to filter or sort jobs within a pipeline.
* **Robust Forms:** Replace `prompt()` with proper React forms for adding/editing jobs and pipelines.
* **Styling & Responsiveness:** Further refine the UI/UX and ensure optimal viewing on various devices.