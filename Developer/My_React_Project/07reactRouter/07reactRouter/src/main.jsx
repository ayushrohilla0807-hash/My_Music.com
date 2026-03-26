import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import React from 'react'
import About from './components/About/About.jsx' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    childern: [
      {
        path:"",
        element:<Home/>
       },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
