import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log("----- index.js: Script started loading -----");

try {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        console.log("----- index.js: Found 'root' element. Attempting to create root. -----");
        const root = ReactDOM.createRoot(rootElement);
        console.log("----- index.js: ReactDOM.createRoot successful. Attempting to render App. -----");
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
        console.log("----- index.js: root.render (App) called. -----");
    } else {
        console.error("----- index.js: 'root' element not found in the DOM! Page will be blank. -----");
    }
} catch (error) {
    console.error("----- index.js: An unexpected error occurred during React rendering: ", error);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log("----- index.js: Script finished executing -----");