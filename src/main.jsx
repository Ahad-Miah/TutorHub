import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
    <ToastContainer position='top-right' />
    </HelmetProvider>
  </StrictMode>,
)
