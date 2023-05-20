import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { NewziaApp } from '../NewziaApp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "*", Component: NewziaApp },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
