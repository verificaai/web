import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Verify from './pages/Verify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Verify />
  </StrictMode>,
)
