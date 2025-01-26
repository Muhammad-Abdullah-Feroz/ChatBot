import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element:<App/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

