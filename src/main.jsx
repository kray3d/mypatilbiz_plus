import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PbtDirectory from './PbtDirectory.jsx'

const currentPage = window.location.pathname.replace(/\/+$/, '') === '/pbt'
  ? PbtDirectory
  : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {currentPage === PbtDirectory ? <PbtDirectory /> : <App />}
  </StrictMode>,
)
