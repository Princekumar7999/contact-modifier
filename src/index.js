import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './components/App'; // Ensure the correct path to App component

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
