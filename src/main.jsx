import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { NewziaApp } from '../NewziaApp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const router = createBrowserRouter([
  { path: "*", Component: NewziaApp },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
