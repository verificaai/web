import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Verify from './pages/Verify'

import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "sobre",
    element: <About />
  },
  {
    path: "verificar",
    element: <Verify />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
