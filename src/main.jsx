// main.jsx

import React, { StrictMode } from 'react' // <--- ADDED React here, and merged StrictMode
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // The JSX parser needs 'React' to understand <StrictMode> and <App />
  <StrictMode> 
    <App />
  </StrictMode>,
)