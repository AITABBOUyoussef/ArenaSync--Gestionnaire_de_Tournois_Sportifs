// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/app.css' // Zid had s-sitar bach Tailwind i-khdem
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)